/**
 * Fetches complete TEFAS fund universes and daily histories from the official API.
 */
import { FUNDS_CONFIG } from './funds-config.js';

const TEFAS_URL = 'https://www.tefas.gov.tr/api/funds/fonGnlBlgSiraliGetir';
const MAX_RANGE_DAYS = 28;
const FUND_TYPES = [
  { code: 'YAT', label: 'Yatırım Fonu' },
  { code: 'EMK', label: 'Emeklilik Fonu' },
  { code: 'BYF', label: 'Borsa Yatırım Fonu' },
  { code: 'GYF', label: 'Gayrimenkul Yatırım Fonu' },
  { code: 'GSYF', label: 'Girişim Sermayesi Yatırım Fonu' }
];

const CATEGORY_MAP = {
  'Hisse Senedi': 'Hisse Senedi',
  'Yabancı & Teknoloji': 'Yabancı & Teknoloji',
  'Para Piyasası': 'Para Piyasası',
  'Kıymetli Madenler': 'Kıymetli Madenler',
  'Değişken & Karma': 'Değişken & Karma'
};

const HISTORY_DAYS = 365;
const LATEST_HISTORY_DAYS = 7;
const FUND_REQUEST_DELAY_MS = 500;
const EXCLUDED_YAT_FUNDS = new Set(['PTO', 'THF', 'TP2']);

function wait(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function toCompactDate(date) {
  return date.toISOString().slice(0, 10).replaceAll('-', '');
}

function toDate(value) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value || '');
  if (!match) return null;
  const date = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])));
  return Number.isNaN(date.getTime()) ? null : date;
}

function makeFundId(kind, code) {
  return kind === 'YAT' ? code : `${kind}-${code}`;
}

function inferCategory(name, kind, configuredCategory) {
  if (configuredCategory && CATEGORY_MAP[configuredCategory]) return configuredCategory;
  if (kind === 'EMK') return 'Emeklilik Fonları';
  if (kind === 'BYF') return 'Borsa Yatırım Fonları';
  if (kind === 'GYF') return 'Gayrimenkul Fonları';
  if (kind === 'GSYF') return 'Girişim Sermayesi Fonları';

  const normalized = name.toLocaleUpperCase('tr-TR');
  if (/PARA PİYASASI|PARA PIYASASI|LİKİT|Likit/i.test(normalized)) return 'Para Piyasası';
  if (/ALTIN|GÜMÜŞ|GUMUS|KIYMETLİ MADEN|KIYMETLI MADEN|EMTİA|EMTIA/.test(normalized)) return 'Kıymetli Madenler';
  if (/YABANCI|TEKNOLOJİ|TEKNOLOJI|DİJİTAL|DIJITAL|BLOCKCHAIN|BLOKZİNCİR|BLOKZINCIR/.test(normalized)) {
    return 'Yabancı & Teknoloji';
  }
  if (/HİSSE|HISSE|BIST|BORSA İSTANBUL|BORSA ISTANBUL/.test(normalized)) return 'Hisse Senedi';
  return 'Değişken & Karma';
}

function inferCompany(name, previousCompany) {
  if (previousCompany) return previousCompany;
  const match = /^(.+?\b(?:PORTFÖY|PORTFOY|PYŞ)\b(?:\s+YÖNETİMİ)?)/i.exec(name || '');
  return match ? match[1] : 'TEFAS Fon Kurucusu';
}

function calcReturn(price, basePrice) {
  return basePrice > 0 ? ((price - basePrice) / basePrice) * 100 : 0;
}

function priorFundIndex(previousFunds) {
  const result = new Map();
  for (const fund of Object.values(previousFunds || {})) {
    if (!fund?.code) continue;
    const kind = fund.tefasFundType || 'YAT';
    result.set(`${kind}:${fund.code}`, fund);
  }
  return result;
}

async function fetchTefasRange(kind, startDate, endDate, retries = 5) {
  const body = {
    fonTipi: kind,
    fonKodu: null,
    aramaMetni: null,
    fonTurKod: null,
    fonGrubu: null,
    sfonTurKod: null,
    fonTurAciklama: null,
    kurucuKod: null,
    basTarih: toCompactDate(startDate),
    bitTarih: toCompactDate(endDate),
    basSira: 1,
    bitSira: 100000,
    dil: 'TR',
    sFonTurKod: '',
    fonKod: '',
    fonGrup: '',
    fonUnvanTip: ''
  };

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await fetch(TEFAS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json, text/plain, */*',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131.0.0.0 Safari/537.36',
          Origin: 'https://www.tefas.gov.tr',
          Referer: 'https://www.tefas.gov.tr/tr/fon-verileri'
        },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(60000)
      });

      if (response.status === 429) {
        const resetAfter = Number(response.headers.get('ratelimit-reset'));
        const retryAfterHeader = response.headers.get('retry-after');
        const retryAfterSeconds = Number(retryAfterHeader);
        const retryAfterDate = Date.parse(retryAfterHeader || '');
        const waitMilliseconds = resetAfter > 0
          ? (resetAfter + 1) * 1000
          : (retryAfterSeconds > 0
            ? retryAfterSeconds * 1000
            : (Number.isFinite(retryAfterDate) ? Math.max(1000, retryAfterDate - Date.now()) : 30000));
        if (attempt === retries) {
          throw new Error(`TEFAS kota sınırı nedeniyle ${kind} fon verisi alınamadı`);
        }
        console.warn(`  ⏳ TEFAS kota sınırı; ${Math.ceil(waitMilliseconds / 1000)} saniye bekleniyor...`);
        await wait(waitMilliseconds);
        continue;
      }

      if (!response.ok) {
        throw new Error(`TEFAS HTTP ${response.status}`);
      }

      const payload = await response.json();
      if (payload?.errorCode || payload?.errorMessage) {
        const message = payload.errorMessage || `TEFAS hata kodu: ${payload.errorCode}`;
        if (/out of bounds|veri bulunamadı/i.test(message)) return [];
        throw new Error(message);
      }

      if (!Array.isArray(payload?.resultList)) {
        throw new Error('TEFAS fon yanıtı beklenen resultList alanını içermiyor');
      }

      return payload.resultList;
    } catch (error) {
      if (attempt === retries) {
        throw new Error(`${kind} fon verisi ${body.basTarih}-${body.bitTarih} aralığında alınamadı: ${error.message}`);
      }
      await wait(500 * (attempt + 1));
    }
  }

  return [];
}

function normalizeHistoryRow(row, kind) {
  const code = String(row.fonKodu || '').trim().toUpperCase();
  const date = row.tarih;
  const close = Number(row.fiyat);
  if (!code || !toDate(date) || !Number.isFinite(close) || close <= 0) return null;

  return {
    id: makeFundId(kind, code),
    code,
    name: String(row.fonUnvan || code).trim(),
    kind,
    date,
    close,
    sharesCount: Number.isFinite(Number(row.tedPaySayisi)) ? Number(row.tedPaySayisi) : null,
    investorCount: Number.isFinite(Number(row.kisiSayisi)) ? Number(row.kisiSayisi) : null,
    totalValue: Number.isFinite(Number(row.portfoyBuyukluk)) ? Number(row.portfoyBuyukluk) : null
  };
}

function categoryForFund(kind, name, config) {
  return inferCategory(name, kind, config?.category);
}

function makeFundObject(history, previous, config, kindLabel) {
  const latest = history[history.length - 1];
  const at = offset => history[Math.max(0, history.length - 1 - offset)];
  const price = latest.close;
  const dailyReturn = calcReturn(price, at(1)?.close || price);
  const weeklyReturn = calcReturn(price, at(5)?.close || price);
  const monthlyReturn = calcReturn(price, at(21)?.close || price);
  const threeMonthReturn = calcReturn(price, at(63)?.close || price);
  const yearlyReturn = calcReturn(price, history[0].close);
  const category = categoryForFund(latest.kind, latest.name, config);

  return {
    id: latest.id,
    code: latest.code,
    tefasFundType: latest.kind,
    fundTypeLabel: kindLabel,
    name: latest.name,
    company: inferCompany(latest.name, previous?.company || config?.company),
    category,
    riskLevel: previous?.riskLevel ?? config?.riskLevel ?? (category === 'Para Piyasası' ? 1 : 5),
    featured: previous?.featured ?? config?.featured ?? false,
    desc: previous?.desc ?? config?.desc ?? `${kindLabel} kategorisinde TEFAS'ta işlem gören fon.`,
    price: Number(price.toFixed(6)),
    dailyReturn: Number(dailyReturn.toFixed(2)),
    weeklyReturn: Number(weeklyReturn.toFixed(2)),
    monthlyReturn: Number(monthlyReturn.toFixed(2)),
    threeMonthReturn: Number(threeMonthReturn.toFixed(2)),
    yearlyReturn: Number(yearlyReturn.toFixed(2)),
    totalValue: Math.round(latest.totalValue ?? previous?.totalValue ?? 0),
    investorCount: Math.round(latest.investorCount ?? previous?.investorCount ?? 0),
    sharesCount: latest.sharesCount ?? previous?.sharesCount ?? null,
    marketShare: previous?.marketShare ?? null,
    categoryRank: previous?.categoryRank ?? null,
    categoryTotal: previous?.categoryTotal ?? null,
    isin: previous?.isin ?? null,
    sellValuation: previous?.sellValuation ?? null,
    buyValuation: previous?.buyValuation ?? null,
    tradeHours: previous?.tradeHours ?? '09:00 - 17:45',
    minBuy: previous?.minBuy ?? 1,
    minSell: previous?.minSell ?? 1,
    kapUrl: previous?.kapUrl ?? null,
    tefasStatus: previous?.tefasStatus ?? "TEFAS'ta işlem görüyor",
    sparkline: history.slice(-12).map(item => Number(item.close.toFixed(item.close < 1 ? 4 : 2))),
    updatedDate: latest.date
  };
}

function buildFundStats(funds) {
  const fundList = Object.values(funds);
  const comparableFunds = fundList.filter(fund => fund.tefasFundType !== 'GSYF');
  const topMonthly = [...comparableFunds].sort((a, b) => b.monthlyReturn - a.monthlyReturn).slice(0, 5);
  const topYearly = [...comparableFunds].sort((a, b) => b.yearlyReturn - a.yearlyReturn).slice(0, 5);
  const largestFunds = [...fundList].sort((a, b) => b.totalValue - a.totalValue).slice(0, 5);

  return {
    totalFundsCount: fundList.length,
    topMonthlyGainers: topMonthly.map(fund => ({ code: fund.code, name: fund.name, return: fund.monthlyReturn })),
    topYearlyGainers: topYearly.map(fund => ({ code: fund.code, name: fund.name, return: fund.yearlyReturn })),
    largestFunds: largestFunds.map(fund => ({ code: fund.code, name: fund.name, value: fund.totalValue }))
  };
}

export async function fetchTefasFunds(previousFunds = {}, {
  previousHistories = {},
  includeFullHistory = true
} = {}) {
  const now = new Date();
  const endDate = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  const startDate = new Date(endDate);
  const historyDays = includeFullHistory ? HISTORY_DAYS : LATEST_HISTORY_DAYS;
  startDate.setUTCDate(startDate.getUTCDate() - (historyDays - 1));
  const configByCode = new Map(FUNDS_CONFIG.map(config => [config.code, config]));
  const previousByCode = priorFundIndex(previousFunds);
  const historyById = new Map();
  const activeFundIds = new Set();

  console.log(`🌐 TEFAS'ın 5 resmi fon türü için ${historyDays} günlük toplu fiyat geçmişi çekiliyor...`);
  if (!includeFullHistory) {
    for (const [id, savedHistory] of Object.entries(previousHistories)) {
      const prices = Array.isArray(savedHistory) ? savedHistory : savedHistory?.history;
      if (!Array.isArray(prices)) continue;
      const previousFund = previousByCode.get(`${savedHistory?.kind || ''}:${savedHistory?.code || ''}`);
      const [kind, code = id] = savedHistory?.kind
        ? [savedHistory.kind, savedHistory.code || id]
        : (id.includes('-') ? id.split(/-(.*)/s).slice(0, 2) : ['YAT', id]);
      const previous = previousFund || previousByCode.get(`${kind}:${code}`);
      const history = prices.map(item => {
        const date = item?.date;
        const close = Number(item?.close);
        if (!toDate(date) || !Number.isFinite(close) || close <= 0) return null;
        return {
          id,
          code,
          name: previous?.name || code,
          kind,
          date,
          close,
          sharesCount: null,
          investorCount: null,
          totalValue: null
        };
      }).filter(Boolean);
      if (history.length) historyById.set(id, history);
    }
  }
  for (const fundType of FUND_TYPES) {
    let rangeStart = new Date(startDate);
    let received = 0;

    while (rangeStart <= endDate) {
      const rangeEnd = new Date(rangeStart);
      rangeEnd.setUTCDate(rangeEnd.getUTCDate() + MAX_RANGE_DAYS - 1);
      if (rangeEnd > endDate) rangeEnd.setTime(endDate.getTime());

      const rows = await fetchTefasRange(fundType.code, rangeStart, rangeEnd);
      received += rows.length;
      for (const row of rows) {
        if (fundType.code === 'YAT' && EXCLUDED_YAT_FUNDS.has(String(row.fonKodu || '').trim().toUpperCase())) continue;
        const normalized = normalizeHistoryRow(row, fundType.code);
        if (!normalized) continue;
        const recentCutoff = new Date(endDate);
        recentCutoff.setUTCDate(recentCutoff.getUTCDate() - (LATEST_HISTORY_DAYS - 1));
        if (toDate(normalized.date) >= recentCutoff) activeFundIds.add(normalized.id);
        if (!historyById.has(normalized.id)) historyById.set(normalized.id, []);
        historyById.get(normalized.id).push(normalized);
      }

      rangeStart = new Date(rangeEnd);
      rangeStart.setUTCDate(rangeStart.getUTCDate() + 1);
      await wait(FUND_REQUEST_DELAY_MS);
    }

    console.log(`  ✓ ${fundType.label}: ${received.toLocaleString('tr-TR')} fiyat kaydı`);
    if (received === 0 || ![...activeFundIds].some(id => id.startsWith(`${fundType.code}-`) || fundType.code === 'YAT' && !id.includes('-'))) {
      throw new Error(`TEFAS ${fundType.label} sınıfı son ${LATEST_HISTORY_DAYS} günde fon verisi döndürmedi`);
    }
  }

  const funds = {};
  const fundHistories = {};
  for (const [id, unsortedHistory] of historyById) {
    if (!activeFundIds.has(id)) continue;
    const sortedHistory = [...new Map(
      unsortedHistory
        .sort((a, b) => a.date.localeCompare(b.date))
        .map(item => [item.date, item])
    ).values()];
    if (sortedHistory.length === 0) continue;

    const latest = sortedHistory[sortedHistory.length - 1];
    const fundType = FUND_TYPES.find(item => item.code === latest.kind);
    const previous = previousByCode.get(`${latest.kind}:${latest.code}`);
    const config = latest.kind === 'YAT' ? configByCode.get(latest.code) : null;
    funds[id] = makeFundObject(sortedHistory, previous, config, fundType?.label || 'TEFAS Fonu');
    fundHistories[id] = sortedHistory.map(item => ({ date: item.date, close: item.close }));
  }

  if (Object.keys(funds).length === 0) {
    throw new Error('TEFAS toplu fiyat servisleri hiçbir geçerli fon döndürmedi');
  }

  return {
    funds,
    fundHistories,
    stats: buildFundStats(funds)
  };
}
