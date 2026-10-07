import { STOCKS_CONFIG } from './stocks-config.js';

const BIST_SCANNER_URL = 'https://scanner.tradingview.com/turkey/scan';

const SECTOR_MAP = {
  'Commercial Services': 'Hizmet & Danışmanlık',
  'Communications': 'İletişim',
  'Consumer Durables': 'Dayanıklı Tüketim',
  'Consumer Non-Durables': 'Gıda & Tüketim',
  'Consumer Services': 'Tüketici Hizmetleri',
  'Distribution Services': 'Ticaret & Dağıtım',
  'Electronic Technology': 'Teknoloji & Savunma',
  'Energy Minerals': 'Enerji & Petrokimya',
  'Finance': 'Bankacılık & Finans',
  'Health Services': 'Sağlık & İlaç',
  'Health Technology': 'Sağlık & İlaç',
  'Industrial Services': 'Sanayi & Üretim',
  'Miscellaneous': 'Diğer',
  'Non-Energy Minerals': 'Madencilik & Emtia',
  'Process Industries': 'Sanayi & Üretim',
  'Producer Manufacturing': 'Sanayi & Üretim',
  'Retail Trade': 'Perakende & Tüketim',
  'Technology Services': 'Teknoloji & Savunma',
  'Transportation': 'Ulaştırma & Havacılık',
  'Utilities': 'Enerji & Altyapı'
};

export async function fetchBistStocks() {
  const response = await fetch(BIST_SCANNER_URL, {
    method: 'POST',
    headers: {
      'User-Agent': 'Mozilla/5.0',
      'Content-Type': 'application/json',
      Origin: 'https://www.tradingview.com',
      Referer: 'https://www.tradingview.com/'
    },
    body: JSON.stringify({
      columns: ['name', 'description', 'type', 'subtype', 'exchange', 'sector'],
      filter: [
        { left: 'exchange', operation: 'equal', right: 'BIST' },
        { left: 'type', operation: 'equal', right: 'stock' },
        { left: 'subtype', operation: 'equal', right: 'common' }
      ],
      range: [0, 10000],
      sort: { sortBy: 'name', sortOrder: 'asc' },
      options: { lang: 'en' }
    }),
    signal: AbortSignal.timeout(20000)
  });

  if (!response.ok) {
    throw new Error(`BIST hisse evreni alınamadı (HTTP ${response.status})`);
  }

  const payload = await response.json();
  const entries = payload?.data;
  if (!Array.isArray(entries) || entries.length === 0 || payload.totalCount !== entries.length) {
    throw new Error('BIST hisse evreni yanıtı eksik veya beklenen formatta değil');
  }

  const existingMetadata = new Map(STOCKS_CONFIG.map(stock => [stock.symbol, stock]));
  const stocks = entries
    .map(entry => {
      const [symbol, description, type, subtype, exchange, sector] = entry.d || [];
      if (!symbol || type !== 'stock' || subtype !== 'common' || exchange !== 'BIST') return null;

      const existing = existingMetadata.get(symbol);
      return {
        symbol,
        name: existing?.name || description || symbol,
        sector: existing?.sector || SECTOR_MAP[sector] || 'Diğer',
        bist30: existing?.bist30 ?? false,
        dividend: existing?.dividend ?? false
      };
    })
    .filter(Boolean);

  if (stocks.length !== payload.totalCount) {
    throw new Error(`BIST hisse evreni doğrulanamadı (${stocks.length}/${payload.totalCount})`);
  }

  return stocks;
}
