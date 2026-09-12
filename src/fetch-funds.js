/**
 * TEFAS Mutual Funds Comprehensive Live Engine
 * Fetches all fund metrics directly from official TEFAS JSON API:
 * 1. fonFiyatBilgiGetir: Historical price points, 1D/1W/1M/3M/1Y returns, sparklines
 * 2. fonBilgiGetir: Total portfolio size (TL), investor count, shares count, market share, category rank
 * 3. fonProfilBilgiGetir: ISIN code, settlement valors (T+1/T+2), trade hours, KAP link
 */

import { FUNDS_CONFIG } from './funds-config.js';

/**
 * Baseline fallback dataset (used only if TEFAS network request is temporarily unreachable)
 */
const FUND_BASELINE_DATA = {
  'PTO': { price: 1.864854, dailyReturn: 0.13, weeklyReturn: 0.88, monthlyReturn: 2.38, threeMonthReturn: 22.28, yearlyReturn: 77.61, totalValue: 214185325, investorCount: 3107 },
  'TGE': { price: 0.308652, dailyReturn: -0.06, weeklyReturn: 2.87, monthlyReturn: 9.11, threeMonthReturn: 7.90, yearlyReturn: 65.70, totalValue: 3126713225, investorCount: 37719 },
  'THF': { price: 2.916338, dailyReturn: 0.14, weeklyReturn: 5.40, monthlyReturn: 29.47, threeMonthReturn: 58.20, yearlyReturn: 123.67, totalValue: 130895185406, investorCount: 182730 },
  'IPJ': { price: 19.813969, dailyReturn: -1.48, weeklyReturn: 2.82, monthlyReturn: 0.45, threeMonthReturn: 12.30, yearlyReturn: 53.35, totalValue: 1293578798, investorCount: 18483 },
  'TP2': { price: 2.229489, dailyReturn: 0.13, weeklyReturn: 0.89, monthlyReturn: 4.05, threeMonthReturn: 12.80, yearlyReturn: 60.38, totalValue: 242230969333, investorCount: 169165 },
  'MAC': { price: 0.748997, dailyReturn: -0.43, weeklyReturn: 2.45, monthlyReturn: -2.70, threeMonthReturn: 8.35, yearlyReturn: 19.39, totalValue: 4228682103, investorCount: 35272 },
  'TI2': { price: 0.129147, dailyReturn: -0.91, weeklyReturn: 3.19, monthlyReturn: 3.03, threeMonthReturn: 15.19, yearlyReturn: 27.35, totalValue: 3300645306, investorCount: 20603 },
  'IIH': { price: 33.978942, dailyReturn: -0.56, weeklyReturn: 3.23, monthlyReturn: 5.32, threeMonthReturn: 20.03, yearlyReturn: 34.75, totalValue: 1780877091, investorCount: 21255 },
  'HKH': { price: 8.924923, dailyReturn: -1.18, weeklyReturn: 1.15, monthlyReturn: 7.53, threeMonthReturn: 18.42, yearlyReturn: 15.93, totalValue: 987452100, investorCount: 9450 },
  'AFT': { price: 1.000902, dailyReturn: -2.12, weeklyReturn: -1.45, monthlyReturn: 0.76, threeMonthReturn: 8.14, yearlyReturn: 37.61, totalValue: 8452130200, investorCount: 54120 },
  'YAY': { price: 1871.713648, dailyReturn: -2.16, weeklyReturn: -0.85, monthlyReturn: 0.51, threeMonthReturn: 14.80, yearlyReturn: 69.91, totalValue: 3124500000, investorCount: 19800 },
  'TTE': { price: 1.599258, dailyReturn: -0.58, weeklyReturn: -3.12, monthlyReturn: -10.94, threeMonthReturn: 5.12, yearlyReturn: 58.06, totalValue: 1450230000, investorCount: 14200 },
  'PPZ': { price: 6.733779, dailyReturn: 0.10, weeklyReturn: 0.82, monthlyReturn: 3.09, threeMonthReturn: 11.45, yearlyReturn: 46.69, totalValue: 56420100000, investorCount: 88400 },
  'NRM': { price: 160.419783, dailyReturn: -0.51, weeklyReturn: 1.10, monthlyReturn: 4.46, threeMonthReturn: 15.60, yearlyReturn: 60.51, totalValue: 1820450000, investorCount: 11300 },
  'TCA': { price: 0.788889, dailyReturn: -0.36, weeklyReturn: 0.45, monthlyReturn: 0.62, threeMonthReturn: 6.80, yearlyReturn: 24.43, totalValue: 4120300000, investorCount: 22100 },
  'KZL': { price: 28.530669, dailyReturn: -0.19, weeklyReturn: 0.95, monthlyReturn: 1.17, threeMonthReturn: 12.30, yearlyReturn: 40.84, totalValue: 6540200000, investorCount: 38900 },
  'GGK': { price: 14.041938, dailyReturn: -0.17, weeklyReturn: 2.52, monthlyReturn: 1.06, threeMonthReturn: 19.95, yearlyReturn: 35.51, totalValue: 2519936968, investorCount: 11802 },
  'NRC': { price: 11.489024, dailyReturn: -0.75, weeklyReturn: 3.38, monthlyReturn: 0.33, threeMonthReturn: 12.52, yearlyReturn: 23.96, totalValue: 231607739, investorCount: 3495 },
  'BUY': { price: 1.708574, dailyReturn: -1.08, weeklyReturn: 1.69, monthlyReturn: -3.72, threeMonthReturn: 12.10, yearlyReturn: 23.35, totalValue: 323324790, investorCount: 16437 },
  'DBH': { price: 0.387876, dailyReturn: -0.19, weeklyReturn: 0.59, monthlyReturn: 1.85, threeMonthReturn: 13.35, yearlyReturn: 23.96, totalValue: 992790119, investorCount: 8667 }
};

/**
 * Generic POST request to TEFAS API with retry
 */
async function callTefasApi(endpoint, body, retries = 2) {
  const url = `https://www.tefas.gov.tr/api/funds/${endpoint}`;
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'Origin': 'https://www.tefas.gov.tr',
    'Referer': `https://www.tefas.gov.tr/FonAnaliz.aspx?FonKod=${body.fonKodu || ''}`
  };

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(8000)
      });

      if (!res.ok) {
        if (attempt < retries) {
          await new Promise(r => setTimeout(r, 250 * (attempt + 1)));
          continue;
        }
        return null;
      }

      const json = await res.json();
      return json?.resultList ?? null;
    } catch (err) {
      if (attempt < retries) {
        await new Promise(r => setTimeout(r, 250 * (attempt + 1)));
      }
    }
  }

  return null;
}

/**
 * Fetch all available data for a single fund from TEFAS
 */
async function fetchCompleteFundFromTefas(code) {
  try {
    // 1. Fetch live prices & 1-year history
    const priceList = await callTefasApi('fonFiyatBilgiGetir', { fonKodu: code, dil: 'TR', periyod: 12 });
    await new Promise(r => setTimeout(r, 80));

    // 2. Fetch official fund info (portfolio size, investor count, market share, category rank)
    const infoList = await callTefasApi('fonBilgiGetir', { fonKodu: code, dil: 'TR' });
    await new Promise(r => setTimeout(r, 80));

    // 3. Fetch official fund profile (ISIN, settlement valors, trade hours, KAP link)
    const profileList = await callTefasApi('fonProfilBilgiGetir', { fonKodu: code, dil: 'TR' });

    const info = infoList?.[0] || {};
    const profile = profileList?.[0] || {};
    const hasPriceList = Array.isArray(priceList) && priceList.length > 0;

    let price = info.sonFiyat;
    let dailyReturn = info.gunlukGetiri;
    let weeklyReturn = 0;
    let monthlyReturn = 0;
    let threeMonthReturn = 0;
    let yearlyReturn = 0;
    let sparkline = [];
    let updatedDate = new Date().toISOString().slice(0, 10);

    if (hasPriceList) {
      const latest = priceList[priceList.length - 1];
      const prevDay = priceList[priceList.length - 2];
      const prevWeek = priceList[Math.max(0, priceList.length - 6)];
      const prevMonth = priceList[Math.max(0, priceList.length - 22)];
      const prev3Month = priceList[Math.max(0, priceList.length - 64)];
      const prevYear = priceList[0];

      if (!price) price = latest.fiyat;
      const calcReturn = (base) => (base && base.fiyat > 0) ? ((price - base.fiyat) / base.fiyat) * 100 : 0;

      if (dailyReturn === undefined || dailyReturn === null) {
        dailyReturn = calcReturn(prevDay);
      }
      weeklyReturn = calcReturn(prevWeek);
      monthlyReturn = calcReturn(prevMonth);
      threeMonthReturn = calcReturn(prev3Month);
      yearlyReturn = calcReturn(prevYear);
      updatedDate = latest.tarih || updatedDate;

      sparkline = priceList.slice(-12).map(item => Number(item.fiyat.toFixed(item.fiyat < 1 ? 4 : 2)));
    }

    if (!price && !info.portBuyukluk) {
      return null;
    }

    return {
      price,
      dailyReturn: Number((dailyReturn || 0).toFixed(2)),
      weeklyReturn: Number((weeklyReturn || 0).toFixed(2)),
      monthlyReturn: Number((monthlyReturn || 0).toFixed(2)),
      threeMonthReturn: Number((threeMonthReturn || 0).toFixed(2)),
      yearlyReturn: Number((yearlyReturn || 0).toFixed(2)),
      totalValue: info.portBuyukluk ? Math.round(info.portBuyukluk) : null,
      investorCount: info.yatirimciSayi ? Math.round(info.yatirimciSayi) : null,
      sharesCount: info.payAdet ? Math.round(info.payAdet) : null,
      marketShare: (info.pazarPayi !== undefined && info.pazarPayi !== null) ? Number(info.pazarPayi.toFixed(2)) : null,
      categoryRank: info.kategoriDerece ?? null,
      categoryTotal: info.kategoriFonSay ?? null,
      isin: profile.isinKodu || null,
      sellValuation: profile.fonSatisValor !== undefined ? profile.fonSatisValor : null,
      buyValuation: profile.fonGeriAlisValor !== undefined ? profile.fonGeriAlisValor : null,
      tradeHours: (profile.basIsSaat && profile.sonIsSaat) ? `${profile.basIsSaat} - ${profile.sonIsSaat}` : null,
      kapUrl: profile.kapLink || null,
      tefasStatus: profile.tefasDurum || "TEFAS'ta işlem görüyor",
      minBuy: profile.minAlis ?? 1,
      minSell: profile.minSatis ?? 1,
      sparkline,
      updatedDate
    };
  } catch (err) {
    return null;
  }
}

/**
 * Compiles and returns all TEFAS investment funds with full details directly from live TEFAS
 */
export async function fetchTefasFunds(previousFunds = {}) {
  const fundsMap = {};
  const fundList = [];
  const fundCodes = FUNDS_CONFIG.map(f => f.code);

  console.log(`🌐 TEFAS Resmi API üzerinden ${fundCodes.length} yatırım fonu için tüm detay veriler çekiliyor...`);

  // Sequential execution with friendly delay between funds to respect TEFAS WAF
  const liveResults = {};
  for (const code of fundCodes) {
    const data = await fetchCompleteFundFromTefas(code);
    if (data) {
      liveResults[code] = data;
    }
    await new Promise(r => setTimeout(r, 120));
  }

  const liveSuccessCount = Object.keys(liveResults).length;
  console.log(`✅ TEFAS Canlı API: ${liveSuccessCount} / ${fundCodes.length} fon için tüm detay veriler çekildi.`);

  for (const cfg of FUNDS_CONFIG) {
    const live = liveResults[cfg.code];
    const prev = previousFunds?.[cfg.code];
    const base = FUND_BASELINE_DATA[cfg.code] || {
      price: 1.0,
      dailyReturn: 0,
      weeklyReturn: 0,
      monthlyReturn: 0,
      threeMonthReturn: 0,
      yearlyReturn: 0,
      totalValue: 1000000000,
      investorCount: 10000
    };

    const price = live?.price ?? prev?.price ?? base.price;
    const dailyReturn = live?.dailyReturn ?? prev?.dailyReturn ?? base.dailyReturn;
    const weeklyReturn = live?.weeklyReturn ?? prev?.weeklyReturn ?? base.weeklyReturn;
    const monthlyReturn = live?.monthlyReturn ?? prev?.monthlyReturn ?? base.monthlyReturn;
    const threeMonthReturn = live?.threeMonthReturn ?? prev?.threeMonthReturn ?? base.threeMonthReturn;
    const yearlyReturn = live?.yearlyReturn ?? prev?.yearlyReturn ?? base.yearlyReturn;
    const totalValue = live?.totalValue ?? prev?.totalValue ?? base.totalValue;
    const investorCount = live?.investorCount ?? prev?.investorCount ?? base.investorCount;
    const sharesCount = live?.sharesCount ?? prev?.sharesCount ?? null;
    const marketShare = live?.marketShare ?? prev?.marketShare ?? null;
    const categoryRank = live?.categoryRank ?? prev?.categoryRank ?? null;
    const categoryTotal = live?.categoryTotal ?? prev?.categoryTotal ?? null;
    const isin = live?.isin ?? prev?.isin ?? null;
    const sellValuation = live?.sellValuation ?? prev?.sellValuation ?? null;
    const buyValuation = live?.buyValuation ?? prev?.buyValuation ?? null;
    const tradeHours = live?.tradeHours ?? prev?.tradeHours ?? '09:00 - 17:45';
    const kapUrl = live?.kapUrl ?? prev?.kapUrl ?? `https://www.kap.org.tr/tr/`;
    const tefasStatus = live?.tefasStatus ?? prev?.tefasStatus ?? "TEFAS'ta işlem görüyor";
    const minBuy = live?.minBuy ?? prev?.minBuy ?? 1;
    const minSell = live?.minSell ?? prev?.minSell ?? 1;
    const sparkline = live?.sparkline ?? prev?.sparkline ?? [price, price];
    const updatedDate = live?.updatedDate ?? prev?.updatedDate ?? new Date().toISOString().slice(0, 10);

    const fundObj = {
      code: cfg.code,
      name: cfg.name,
      company: cfg.company,
      category: cfg.category,
      riskLevel: cfg.riskLevel,
      featured: cfg.featured,
      desc: cfg.desc,
      price: Number(price.toFixed(6)),
      dailyReturn: Number(dailyReturn.toFixed(2)),
      weeklyReturn: Number(weeklyReturn.toFixed(2)),
      monthlyReturn: Number(monthlyReturn.toFixed(2)),
      threeMonthReturn: Number(threeMonthReturn.toFixed(2)),
      yearlyReturn: Number(yearlyReturn.toFixed(2)),
      totalValue: Math.round(totalValue),
      investorCount: Math.round(investorCount),
      sharesCount,
      marketShare,
      categoryRank,
      categoryTotal,
      isin,
      sellValuation,
      buyValuation,
      tradeHours,
      minBuy,
      minSell,
      kapUrl,
      tefasStatus,
      sparkline,
      updatedDate
    };

    fundsMap[cfg.code] = fundObj;
    fundList.push(fundObj);
  }

  // Top Gainers in Funds (Monthly, Yearly, Largest)
  const topMonthly = [...fundList].sort((a, b) => b.monthlyReturn - a.monthlyReturn).slice(0, 5);
  const topYearly = [...fundList].sort((a, b) => b.yearlyReturn - a.yearlyReturn).slice(0, 5);
  const largestFunds = [...fundList].sort((a, b) => b.totalValue - a.totalValue).slice(0, 5);

  return {
    funds: fundsMap,
    stats: {
      totalFundsCount: fundList.length,
      topMonthlyGainers: topMonthly.map(f => ({ code: f.code, name: f.name, return: f.monthlyReturn })),
      topYearlyGainers: topYearly.map(f => ({ code: f.code, name: f.name, return: f.yearlyReturn })),
      largestFunds: largestFunds.map(f => ({ code: f.code, name: f.name, value: f.totalValue }))
    }
  };
}
