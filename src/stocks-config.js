/**
 * Comprehensive BIST Market Universe Configuration
 * Contains stock metadata, sector categorization, and market indices
 * 100+ Liquid BIST Companies across all key sectors
 */

export const STOCKS_CONFIG = [
  // HAVACILIK & ULAŞTIRMA
  { symbol: 'THYAO', name: 'Türk Hava Yolları', sector: 'Ulaştırma & Havacılık', bist30: true, dividend: true },
  { symbol: 'PGSUS', name: 'Pegasus Hava Taşımacılığı', sector: 'Ulaştırma & Havacılık', bist30: true, dividend: false },
  { symbol: 'TAVHL', name: 'TAV Havalimanları', sector: 'Ulaştırma & Havacılık', bist30: true, dividend: true },
  { symbol: 'CLEBI', name: 'Çelebi Hava Servisi', sector: 'Ulaştırma & Havacılık', bist30: false, dividend: true },

  // BANKACILIK & FİNANS
  { symbol: 'GARAN', name: 'Garanti BBVA', sector: 'Bankacılık & Finans', bist30: true, dividend: true },
  { symbol: 'AKBNK', name: 'Akbank', sector: 'Bankacılık & Finans', bist30: true, dividend: true },
  { symbol: 'ISCTR', name: 'Türkiye İş Bankası (C)', sector: 'Bankacılık & Finans', bist30: true, dividend: true },
  { symbol: 'YKBNK', name: 'Yapı ve Kredi Bankası', sector: 'Bankacılık & Finans', bist30: true, dividend: true },
  { symbol: 'VAKBN', name: 'Vakıflar Bankası', sector: 'Bankacılık & Finans', bist30: false, dividend: true },
  { symbol: 'HALKB', name: 'Türkiye Halk Bankası', sector: 'Bankacılık & Finans', bist30: false, dividend: false },
  { symbol: 'TSKB', name: 'T.S.K.B.', sector: 'Bankacılık & Finans', bist30: false, dividend: true },
  { symbol: 'ALBRK', name: 'Albaraka Türk Katılım', sector: 'Bankacılık & Finans', bist30: false, dividend: true },
  { symbol: 'SKBNK', name: 'Şekerbank', sector: 'Bankacılık & Finans', bist30: false, dividend: false },
  { symbol: 'ISMEN', name: 'İş Yatırım Menkul Değerler', sector: 'Bankacılık & Finans', bist30: false, dividend: true },
  { symbol: 'ISFIN', name: 'İş Finansal Kiralama', sector: 'Bankacılık & Finans', bist30: false, dividend: true },

  // SAVUNMA, TEKNOLOJİ & TELEKOMÜNİKASYON
  { symbol: 'ASELS', name: 'Aselsan Elektronik Sanayi', sector: 'Teknoloji & Savunma', bist30: true, dividend: true },
  { symbol: 'TCELL', name: 'Turkcell İletişim', sector: 'Teknoloji & Telekomünikasyon', bist30: true, dividend: true },
  { symbol: 'TTKOM', name: 'Türk Telekomünikasyon', sector: 'Teknoloji & Telekomünikasyon', bist30: true, dividend: true },
  { symbol: 'VBTYZ', name: 'VBT Yazılım', sector: 'Teknoloji & Savunma', bist30: false, dividend: true },
  { symbol: 'SDTTR', name: 'SDT Uzay ve Savunma', sector: 'Teknoloji & Savunma', bist30: false, dividend: false },
  { symbol: 'MIATK', name: 'Mia Teknoloji', sector: 'Teknoloji & Savunma', bist30: false, dividend: false },
  { symbol: 'REEDR', name: 'Reeder Teknoloji', sector: 'Teknoloji & Savunma', bist30: false, dividend: false },
  { symbol: 'LOGO', name: 'Logo Yazılım', sector: 'Teknoloji & Savunma', bist30: false, dividend: true },
  { symbol: 'ALTNY', name: 'Altınay Savunma Teknolojileri', sector: 'Teknoloji & Savunma', bist30: false, dividend: false },
  { symbol: 'PAPIL', name: 'Papilon Savunma', sector: 'Teknoloji & Savunma', bist30: false, dividend: false },

  // HOLDİNGLER & YATIRIM
  { symbol: 'KCHOL', name: 'Koç Holding', sector: 'Holdingler', bist30: true, dividend: true },
  { symbol: 'SAHOL', name: 'Sabancı Holding', sector: 'Holdingler', bist30: true, dividend: true },
  { symbol: 'AGHOL', name: 'Anadolu Grubu Holding', sector: 'Holdingler', bist30: false, dividend: true },
  { symbol: 'DOHOL', name: 'Doğan Holding', sector: 'Holdingler', bist30: false, dividend: true },
  { symbol: 'ENKAI', name: 'Enka İnşaat ve Sanayi', sector: 'Holdingler', bist30: true, dividend: true },
  { symbol: 'ALARK', name: 'Alarko Holding', sector: 'Holdingler', bist30: true, dividend: true },
  { symbol: 'TKFEN', name: 'Tekfen Holding', sector: 'Holdingler', bist30: false, dividend: true },
  { symbol: 'BERA', name: 'Bera Holding', sector: 'Holdingler', bist30: false, dividend: false },
  { symbol: 'ECZYT', name: 'Eczacıbaşı Yatırım', sector: 'Holdingler', bist30: false, dividend: true },
  { symbol: 'GSDHO', name: 'GSD Holding', sector: 'Holdingler', bist30: false, dividend: true },

  // SANAYİ, DEMİR ÇELİK, BORU & CAM
  { symbol: 'EREGL', name: 'Ereğli Demir ve Çelik', sector: 'Sanayi & Metal', bist30: true, dividend: true },
  { symbol: 'KRDMD', name: 'Kardemir (D)', sector: 'Sanayi & Metal', bist30: true, dividend: true },
  { symbol: 'BRSAN', name: 'Borusan Boru Sanayi', sector: 'Sanayi & Metal', bist30: true, dividend: true },
  { symbol: 'KCAER', name: 'Kocaer Çelik Sanayi', sector: 'Sanayi & Metal', bist30: false, dividend: true },
  { symbol: 'SISE', name: 'Türkiye Şişe ve Cam', sector: 'Sanayi & Cam', bist30: true, dividend: true },
  { symbol: 'OYAKC', name: 'OYAK Çimento', sector: 'Sanayi & Yapı', bist30: true, dividend: true },
  { symbol: 'CIMSA', name: 'Çimsa Çimento Sanayi', sector: 'Sanayi & Yapı', bist30: false, dividend: true },
  { symbol: 'BSOKE', name: 'Batısöke Çimento', sector: 'Sanayi & Yapı', bist30: false, dividend: false },
  { symbol: 'BUCIM', name: 'Bursa Çimento', sector: 'Sanayi & Yapı', bist30: false, dividend: true },
  { symbol: 'QUAGR', name: 'Qua Granite Hayal Yapı', sector: 'Sanayi & Yapı', bist30: false, dividend: false },
  { symbol: 'EGEEN', name: 'Ege Endüstri ve Ticaret', sector: 'Sanayi & Metal', bist30: false, dividend: true },
  { symbol: 'SARKY', name: 'Sarkuysan Elektrolitik Bakır', sector: 'Sanayi & Metal', bist30: false, dividend: true },
  { symbol: 'KORDS', name: 'Kordsa Teknik Tekstil', sector: 'Sanayi & Tekstil', bist30: false, dividend: true },

  // OTOMOTİV & DAYANIKLI TÜKETİM
  { symbol: 'FROTO', name: 'Ford Otomotiv Sanayi', sector: 'Otomotiv & Sanayi', bist30: true, dividend: true },
  { symbol: 'TOASO', name: 'Tofaş Türk Otomobil', sector: 'Otomotiv & Sanayi', bist30: true, dividend: true },
  { symbol: 'DOAS', name: 'Doğuş Otomotiv', sector: 'Otomotiv & Sanayi', bist30: true, dividend: true },
  { symbol: 'OTKAR', name: 'Otokar Otomotiv ve Savunma', sector: 'Otomotiv & Sanayi', bist30: false, dividend: true },
  { symbol: 'KARSN', name: 'Karsan Otomotiv', sector: 'Otomotiv & Sanayi', bist30: false, dividend: false },
  { symbol: 'BRISA', name: 'Brisa Bridgestone Sabancı', sector: 'Otomotiv & Sanayi', bist30: false, dividend: true },
  { symbol: 'ARCLK', name: 'Arçelik', sector: 'Dayanıklı Tüketim', bist30: true, dividend: true },
  { symbol: 'VESTL', name: 'Vestel Elektronik', sector: 'Dayanıklı Tüketim', bist30: false, dividend: false },
  { symbol: 'VESBE', name: 'Vestel Beyaz Eşya', sector: 'Dayanıklı Tüketim', bist30: false, dividend: true },

  // ENERJİ, PETROKİMYA & MADENCİLİK
  { symbol: 'TUPRS', name: 'Tüpraş Türkiye Petrol Rafinerileri', sector: 'Enerji & Petrokimya', bist30: true, dividend: true },
  { symbol: 'PETKM', name: 'Petkim Petrokimya', sector: 'Enerji & Petrokimya', bist30: true, dividend: false },
  { symbol: 'ASTOR', name: 'Astor Enerji', sector: 'Enerji & Altyapı', bist30: true, dividend: true },
  { symbol: 'ENJSA', name: 'Enerjisa Enerji', sector: 'Enerji & Altyapı', bist30: true, dividend: true },
  { symbol: 'AKSEN', name: 'Aksa Enerji Üretim', sector: 'Enerji & Altyapı', bist30: false, dividend: true },
  { symbol: 'AKSA', name: 'Aksa Akrilik Kimya', sector: 'Kimya & Sanayi', bist30: false, dividend: true },
  { symbol: 'GESAN', name: 'Girişim Elektrik', sector: 'Enerji & Altyapı', bist30: false, dividend: false },
  { symbol: 'KONTR', name: 'Kontrolmatik Teknoloji Enerji', sector: 'Enerji & Teknoloji', bist30: true, dividend: false },
  { symbol: 'EUPWR', name: 'Europower Enerji', sector: 'Enerji & Altyapı', bist30: false, dividend: false },
  { symbol: 'CWENE', name: 'CW Enerji', sector: 'Enerji & Altyapı', bist30: false, dividend: false },
  { symbol: 'YEOTK', name: 'YEO Teknoloji Enerji', sector: 'Enerji & Teknoloji', bist30: false, dividend: false },
  { symbol: 'SMRTG', name: 'Smart Güneş Enerjisi', sector: 'Enerji & Altyapı', bist30: false, dividend: false },
  { symbol: 'GWIND', name: 'Galata Wind Enerji', sector: 'Enerji & Altyapı', bist30: false, dividend: true },
  { symbol: 'CANTE', name: 'Çan2 Termik', sector: 'Enerji & Altyapı', bist30: false, dividend: false },
  { symbol: 'BIOEN', name: 'Biotrend Çevre ve Enerji', sector: 'Enerji & Altyapı', bist30: false, dividend: false },
  { symbol: 'ENERY', name: 'Enerya Enerji', sector: 'Enerji & Altyapı', bist30: false, dividend: false },
  { symbol: 'TATEN', name: 'Tatlıpınar Enerji', sector: 'Enerji & Altyapı', bist30: false, dividend: false },
  { symbol: 'ZOREN', name: 'Zorlu Enerji', sector: 'Enerji & Altyapı', bist30: false, dividend: false },
  { symbol: 'ODAS', name: 'Odaş Elektrik Üretim', sector: 'Enerji & Altyapı', bist30: false, dividend: false },
  { symbol: 'KOZAL', name: 'Koza Altın İşletmeleri', sector: 'Madencilik & Emtia', bist30: true, dividend: false },
  { symbol: 'KOZAA', name: 'Koza Anadolu Metal', sector: 'Madencilik & Emtia', bist30: false, dividend: false },
  { symbol: 'IPEKE', name: 'İpek Doğal Enerji', sector: 'Madencilik & Emtia', bist30: false, dividend: false },

  // PERAKENDE, GIDA & İÇECEK
  { symbol: 'BIMAS', name: 'BİM Birleşik Mağazalar', sector: 'Perakende & Tüketim', bist30: true, dividend: true },
  { symbol: 'MGROS', name: 'Migros Ticaret', sector: 'Perakende & Tüketim', bist30: false, dividend: true },
  { symbol: 'SOKM', name: 'Şok Marketler', sector: 'Perakende & Tüketim', bist30: false, dividend: true },
  { symbol: 'ULKER', name: 'Ülker Bisküvi', sector: 'Gıda & İçecek', bist30: false, dividend: true },
  { symbol: 'CCOLA', name: 'Coca-Cola İçecek', sector: 'Gıda & İçecek', bist30: false, dividend: true },
  { symbol: 'AEFES', name: 'Anadolu Efes Biracılık', sector: 'Gıda & İçecek', bist30: false, dividend: true },
  { symbol: 'TABGD', name: 'TAB Gıda Sanayi', sector: 'Perakende & Tüketim', bist30: false, dividend: true },
  { symbol: 'MAVI', name: 'Mavi Giyim Sanayi', sector: 'Perakende & Tüketim', bist30: false, dividend: true },
  { symbol: 'VAKKO', name: 'Vakko Tekstil ve Hazır Giyim', sector: 'Perakende & Tüketim', bist30: false, dividend: true },
  { symbol: 'YYLGD', name: 'Yayla Agro Gıda', sector: 'Gıda & İçecek', bist30: false, dividend: true },
  { symbol: 'TUKAS', name: 'Tukaş Gıda Sanayi', sector: 'Gıda & İçecek', bist30: false, dividend: false },
  { symbol: 'OYLUM', name: 'Oylum Sınai Yatırımlar', sector: 'Gıda & İçecek', bist30: false, dividend: false },

  // KİMYA, SAĞLIK & İLAÇ
  { symbol: 'SASA', name: 'Sasa Polyester Sanayi', sector: 'Kimya & Sanayi', bist30: true, dividend: false },
  { symbol: 'HEKTS', name: 'Hektaş Ticaret', sector: 'Kimya & Tarım', bist30: true, dividend: false },
  { symbol: 'GUBRF', name: 'Gübre Fabrikaları', sector: 'Kimya & Tarım', bist30: true, dividend: false },
  { symbol: 'ECILC', name: 'Eczacıbaşı İlaç Sanayi', sector: 'Kimya & İlaç', bist30: false, dividend: true },
  { symbol: 'MPARK', name: 'MLP Sağlık Hizmetleri (Medical Park)', sector: 'Sağlık & Hizmet', bist30: false, dividend: true },
  { symbol: 'GENIL', name: 'Gen İlaç ve Sağlık', sector: 'Kimya & İlaç', bist30: false, dividend: true },
  { symbol: 'DEVA', name: 'Deva Holding', sector: 'Kimya & İlaç', bist30: false, dividend: true },
  { symbol: 'SELEC', name: 'Selçuk Ecza Deposu', sector: 'Sağlık & Hizmet', bist30: false, dividend: true },

  // GAYRİMENKUL YATIRIM ORTAKLIKLARI (GYO)
  { symbol: 'EKGYO', name: 'Emlak Konut GYO', sector: 'Gayrimenkul (GYO)', bist30: true, dividend: true },
  { symbol: 'TRGYO', name: 'Torunlar GYO', sector: 'Gayrimenkul (GYO)', bist30: false, dividend: true },
  { symbol: 'ISGYO', name: 'İş Gayrimenkul Yatırım Ortaklığı', sector: 'Gayrimenkul (GYO)', bist30: false, dividend: true },
  { symbol: 'AKFGY', name: 'Akfen GYO', sector: 'Gayrimenkul (GYO)', bist30: false, dividend: false },
  { symbol: 'KLGYO', name: 'Kiler GYO', sector: 'Gayrimenkul (GYO)', bist30: false, dividend: false },
  { symbol: 'OZKGY', name: 'Özak GYO', sector: 'Gayrimenkul (GYO)', bist30: false, dividend: true },
  { symbol: 'PSGYO', name: 'Pasifik GYO', sector: 'Gayrimenkul (GYO)', bist30: false, dividend: false },
  { symbol: 'PEKGY', name: 'Peker GYO', sector: 'Gayrimenkul (GYO)', bist30: false, dividend: false },
  { symbol: 'MHRGY', name: 'MHR GYO', sector: 'Gayrimenkul (GYO)', bist30: false, dividend: false },

  // SİGORTACILIK & DİĞER
  { symbol: 'TURSG', name: 'Türkiye Sigorta', sector: 'Bankacılık & Finans', bist30: false, dividend: true },
  { symbol: 'ANSGR', name: 'Anadolu Sigorta', sector: 'Bankacılık & Finans', bist30: false, dividend: true },
  { symbol: 'AKGRT', name: 'Aksigorta', sector: 'Bankacılık & Finans', bist30: false, dividend: true }
];

export const INDICES_CONFIG = [
  { key: 'XU100', symbol: 'XU100.IS', name: 'BIST 100', desc: 'Borsa İstanbul Ulusal 100 Endeksi' },
  { key: 'XU030', symbol: 'XU030.IS', name: 'BIST 30', desc: 'Borsa İstanbul 30 Endeksi' },
  { key: 'XBANK', symbol: 'XBANK.IS', name: 'BIST Banka', desc: 'Bankacılık Sektör Endeksi' },
  { key: 'XUSIN', symbol: 'XUSIN.IS', name: 'BIST Sınai', desc: 'Sınai Şirketler Endeksi' },
  { key: 'XBLSM', symbol: 'XBLSM.IS', name: 'BIST Bilişim', desc: 'Bilişim ve Teknoloji Endeksi' },
  { key: 'XUHZM', symbol: 'XUHZM.IS', name: 'BIST Hizmetler', desc: 'Hizmet Sektörü Endeksi' }
];

export const CURRENCIES_CONFIG = [
  { key: 'USDTRY', symbol: 'USDTRY=X', name: 'Dolar / TL', prefix: '$', unit: 'TL' },
  { key: 'EURTRY', symbol: 'EURTRY=X', name: 'Euro / TL', prefix: '€', unit: 'TL' },
  { key: 'GBPTRY', symbol: 'GBPTRY=X', name: 'Sterlin / TL', prefix: '£', unit: 'TL' }
];

export const COMMODITIES_CONFIG = [
  { key: 'BRENT', symbol: 'BZ=F', name: 'Brent Petrol', unit: 'USD/Varil' },
  { key: 'BITCOIN', symbol: 'BTC-USD', name: 'Bitcoin', unit: 'USD' }
];
