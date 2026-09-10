/**
 * TEFAS Mutual Funds Configuration
 * Top investment funds in Turkey covering various investment themes
 */

export const FUNDS_CONFIG = [
  // HİSSE SENEDİ YOĞUN FONLAR
  {
    code: 'THF',
    name: 'TEB Portföy Hisse Senedi Fonu (Hisse Senedi Yoğun Fon)',
    company: 'TEB Portföy Yönetimi A.Ş.',
    category: 'Hisse Senedi',
    riskLevel: 6,
    featured: true,
    desc: 'BIST hisse senetlerinde aktif portföy yönetimi ve yüksek sermaye kazancı odaklı fon.'
  },
  {
    code: 'PTO',
    name: 'Tera Portföy Birinci Hisse Senedi (TL) Fonu (Hisse Senedi Yoğun Fon)',
    company: 'Tera Portföy Yönetimi A.Ş.',
    category: 'Hisse Senedi',
    riskLevel: 6,
    featured: true,
    desc: 'Borsa İstanbul\'da büyüme potansiyeli yüksek şirketlere yatırım yapan dinamik hisse fonu.'
  },
  {
    code: 'MAC',
    name: 'Marmara Capital Portföy Hisse Senedi Fonu (Hisse Senedi Yoğun Fon)',
    company: 'Marmara Capital Portföy Yönetimi A.Ş.',
    category: 'Hisse Senedi',
    riskLevel: 6,
    featured: true,
    desc: 'Değer yatırımı stratejisiyle uzun vadeli BIST hisse senetlerine odaklanan popüler fon.'
  },
  {
    code: 'TI2',
    name: 'İş Portföy BIST 100 Dışı Şirketler Hisse Senedi Fonu',
    company: 'İş Portföy Yönetimi A.Ş.',
    category: 'Hisse Senedi',
    riskLevel: 6,
    featured: true,
    desc: 'BIST 100 endeksi dışındaki dinamik ve yüksek büyüme odaklı yan tahta şirketleri fonu.'
  },
  {
    code: 'IIH',
    name: 'İstanbul Portföy Üçüncü Hisse Senedi Fonu (Hisse Senedi Yoğun Fon)',
    company: 'İstanbul Portföy Yönetimi A.Ş.',
    category: 'Hisse Senedi',
    riskLevel: 6,
    featured: false,
    desc: 'Piyasa çarpanları cazip, kurumsal yönetim kalitesi yüksek BIST şirketlerine yatırım.'
  },
  {
    code: 'HKH',
    name: 'Hedef Portföy Birinci Hisse Senedi Fonu (Hisse Senedi Yoğun Fon)',
    company: 'Hedef Portföy Yönetimi A.Ş.',
    category: 'Hisse Senedi',
    riskLevel: 6,
    featured: false,
    desc: 'Dönemsel fırsatları ve sektör rotasyonlarını değerlendiren aktif hisse senedi fonu.'
  },

  // YABANCI, TEKNOLOJİ & SEKTÖREL FONLAR
  {
    code: 'TGE',
    name: 'İş Portföy Emtia Yabancı BYF Fon Sepeti Fonu',
    company: 'İş Portföy Yönetimi A.Ş.',
    category: 'Yabancı & Emtia',
    riskLevel: 6,
    featured: true,
    desc: 'Küresel emtia piyasalarına (enerji, tarım, sanayi metalleri) yabancı BYF\'ler yoluyla yatırım.'
  },
  {
    code: 'IPJ',
    name: 'İş Portföy Elektrikli Araçlar Karma Fon',
    company: 'İş Portföy Yönetimi A.Ş.',
    category: 'Yabancı & Teknoloji',
    riskLevel: 6,
    featured: true,
    desc: 'Küresel elektrikli araçlar, batarya teknolojileri ve otonom sürüş sektöründeki öncü şirketler.'
  },
  {
    code: 'AFT',
    name: 'Ak Portföy Yeni Teknolojiler Yabancı Hisse Senedi Fonu',
    company: 'Ak Portföy Yönetimi A.Ş.',
    category: 'Yabancı & Teknoloji',
    riskLevel: 6,
    featured: true,
    desc: 'Dünyanın en büyük teknoloji ve yapay zeka devlerine (Apple, Microsoft, Nvidia, Alphabet) yatırım.'
  },
  {
    code: 'YAY',
    name: 'Yapı Kredi Portföy Koç Holding İştirakleri Hisse Senedi Fonu',
    company: 'Yapı Kredi Portföy Yönetimi A.Ş.',
    category: 'Hisse Senedi',
    riskLevel: 6,
    featured: false,
    desc: 'Koç Holding ve iştiraklerine (Tüpraş, Ford Otosan, Tofaş, Arçelik, Yapı Kredi vb.) odaklı fon.'
  },
  {
    code: 'TTE',
    name: 'İş Portföy BIST Teknoloji Ağırlıklı Sınırlamalı Hisse Senedi Fonu',
    company: 'İş Portföy Yönetimi A.Ş.',
    category: 'Yabancı & Teknoloji',
    riskLevel: 6,
    featured: false,
    desc: 'Borsa İstanbul bilişim ve teknoloji endeksindeki büyüme odaklı şirketlere yatırım.'
  },

  // PARA PİYASASI & LİKİT FONLAR
  {
    code: 'TP2',
    name: 'Tera Portföy İkinci Para Piyasası (TL) Fonu',
    company: 'Tera Portföy Yönetimi A.Ş.',
    category: 'Para Piyasası',
    riskLevel: 1,
    featured: true,
    desc: 'Gecelik faiz, ters repo ve kısa vadeli mevduat getirisi sunan yüksek likidite fonu.'
  },
  {
    code: 'PPZ',
    name: 'Azimut Portföy Para Piyasası (TL) Fonu',
    company: 'Azimut Portföy Yönetimi A.Ş.',
    category: 'Para Piyasası',
    riskLevel: 1,
    featured: true,
    desc: 'Düşük risk ve günlük getiri bileşiği hedefleyen en büyük TL para piyasası fonlarından biri.'
  },
  {
    code: 'NRM',
    name: 'Nurol Portföy Birinci Para Piyasası (TL) Fonu',
    company: 'Nurol Portföy Yönetimi A.Ş.',
    category: 'Para Piyasası',
    riskLevel: 1,
    featured: false,
    desc: 'Kısa vadeli kamu ve özel sektör borçlanma araçlarıyla istikrarlı getiri sağlayan fon.'
  },

  // KIYMETLİ MADENLER & ALTIN FONLARI
  {
    code: 'TCA',
    name: 'Ziraat Portföy Altın Katılım Fonu',
    company: 'Ziraat Portföy Yönetimi A.Ş.',
    category: 'Kıymetli Madenler',
    riskLevel: 5,
    featured: true,
    desc: 'Kıymetli madenler ve faizsiz altın kira sertifikalarına yatırım yapan katılım esaslı altın fonu.'
  },
  {
    code: 'KZL',
    name: 'Kuveyt Türk Portföy Altın Katılım Fonu',
    company: 'Kuveyt Türk Portföy Yönetimi A.Ş.',
    category: 'Kıymetli Madenler',
    riskLevel: 5,
    featured: false,
    desc: 'Altın fiyatlarındaki yükselişten doğrudan faydalanmayı amaçlayan katılım fonu.'
  },
  {
    code: 'GGK',
    name: 'Garanti Portföy Altın Fonu',
    company: 'Garanti Portföy Yönetimi A.Ş.',
    category: 'Kıymetli Madenler',
    riskLevel: 5,
    featured: false,
    desc: 'Portföyünün en az %80\'i devamlı olarak borsada işlem gören altına dayalı varlıklardan oluşan fon.'
  },

  // DEĞİŞKEN & FON SEPETİ FONLARI
  {
    code: 'NRC',
    name: 'Neo Portföy Birinci Değişken Fon',
    company: 'Neo Portföy Yönetimi A.Ş.',
    category: 'Değişken & Karma',
    riskLevel: 5,
    featured: false,
    desc: 'Piyasa koşullarına göre hisse senedi, döviz, emtia ve borçlanma araçları arasında serbest geçiş.'
  },
  {
    code: 'BUY',
    name: 'Bulls Portföy Birinci Değişken Fon',
    company: 'Bulls Portföy Yönetimi A.Ş.',
    category: 'Değişken & Karma',
    riskLevel: 5,
    featured: false,
    desc: 'Makroekonomik trendlere göre esnek varlık dağılımı yapan çoklu varlık fonu.'
  },
  {
    code: 'DBH',
    name: 'Deniz Portföy Eurobond (Döviz) Borçlanma Araçları Fonu',
    company: 'Deniz Portföy Yönetimi A.Ş.',
    category: 'Yabancı & Emtia',
    riskLevel: 4,
    featured: false,
    desc: 'Türkiye Cumhuriyeti ve özel sektörün ihraç ettiği döviz cinsi Eurobond\'lara yatırım.'
  }
];

export const FUND_CATEGORIES = [
  'Tümü',
  'Hisse Senedi',
  'Yabancı & Teknoloji',
  'Para Piyasası',
  'Kıymetli Madenler',
  'Değişken & Karma'
];
