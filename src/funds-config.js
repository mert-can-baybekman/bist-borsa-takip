/**
 * TEFAS Mutual Funds Configuration
 * Top investment funds in Turkey covering various investment themes
 */

export const FUNDS_CONFIG = [
  // HİSSE SENEDİ YOĞUN FONLAR
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
    name: 'İş Portföy Emtia Yabancı Fon Sepeti Fonu',
    company: 'İş Portföy Yönetimi A.Ş.',
    category: 'Yabancı & Emtia',
    riskLevel: 6,
    featured: true,
    desc: 'Küresel emtia piyasalarına (enerji, tarım, sanayi metalleri) yabancı fon sepeti yoluyla yatırım.'
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
    name: 'Yapı Kredi Portföy Yabancı Teknoloji Sektörü Hisse Senedi Fonu',
    company: 'Yapı Kredi Portföy Yönetimi A.Ş.',
    category: 'Yabancı & Teknoloji',
    riskLevel: 6,
    featured: false,
    desc: 'Küresel teknoloji devlerine ve yabancı teknoloji şirketlerine yatırım yapan getiri odaklı hisse fonu.'
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
  },

  // EKLENEN TEFAS FONLARI - HİSSE SENEDİ
  {
    code: 'AFA',
    name: 'Ak Portföy Amerika Yabancı Hisse Senedi Fonu',
    company: 'Ak Portföy Yönetimi A.Ş.',
    category: 'Yabancı & Teknoloji',
    riskLevel: 6,
    featured: false,
    desc: 'Amerika Birleşik Devletleri şirketlerinin hisse senetlerine yatırım yapan yabancı hisse fonu.'
  },
  {
    code: 'ALC',
    name: 'Ak Portföy Kar Payı Ödeyen Şirketler Hisse Senedi Fonu',
    company: 'Ak Portföy Yönetimi A.Ş.',
    category: 'Hisse Senedi',
    riskLevel: 6,
    featured: false,
    desc: 'Kar payı dağıtma potansiyeli bulunan Borsa İstanbul şirketlerine yatırım yapar.'
  },
  {
    code: 'AYA',
    name: 'Ata Portföy Kar Payı Ödeyen Hisse Senedi Fonu',
    company: 'Ata Portföy Yönetimi A.Ş.',
    category: 'Hisse Senedi',
    riskLevel: 6,
    featured: false,
    desc: 'Borsa İstanbul\'da kar payı ödeyen şirketlerin hisse senetlerine odaklanır.'
  },
  {
    code: 'AFS',
    name: 'Ak Portföy Sağlık Sektörü Yabancı Hisse Senedi Fonu',
    company: 'Ak Portföy Yönetimi A.Ş.',
    category: 'Yabancı & Teknoloji',
    riskLevel: 6,
    featured: false,
    desc: 'Yurt dışındaki sağlık ve yaşam bilimleri şirketlerine yatırım yapar.'
  },
  {
    code: 'AAV',
    name: 'Ata Portföy İkinci Hisse Senedi Fonu',
    company: 'Ata Portföy Yönetimi A.Ş.',
    category: 'Hisse Senedi',
    riskLevel: 6,
    featured: false,
    desc: 'Ağırlıklı olarak Borsa İstanbul hisse senetlerine yatırım yapar.'
  },
  {
    code: 'ADP',
    name: 'Ak Portföy BIST Banka Endeksi Hisse Senedi Fonu',
    company: 'Ak Portföy Yönetimi A.Ş.',
    category: 'Hisse Senedi',
    riskLevel: 6,
    featured: false,
    desc: 'BIST Banka Endeksi şirketlerinin hisse senetlerine yatırım yapar.'
  },
  {
    code: 'AFV',
    name: 'Ak Portföy Avrupa Yabancı Hisse Senedi Fonu',
    company: 'Ak Portföy Yönetimi A.Ş.',
    category: 'Yabancı & Teknoloji',
    riskLevel: 6,
    featured: false,
    desc: 'Avrupa piyasalarında işlem gören şirketlerin hisse senetlerine yatırım yapar.'
  },
  {
    code: 'AK3',
    name: 'Ak Portföy Hisse Senedi Fonu',
    company: 'Ak Portföy Yönetimi A.Ş.',
    category: 'Hisse Senedi',
    riskLevel: 6,
    featured: false,
    desc: 'Borsa İstanbul şirketlerinin hisse senetlerine yatırım yapan hisse yoğun fon.'
  },
  {
    code: 'AKU',
    name: 'Ak Portföy BIST 30 Endeksi Hisse Senedi Fonu',
    company: 'Ak Portföy Yönetimi A.Ş.',
    category: 'Hisse Senedi',
    riskLevel: 6,
    featured: false,
    desc: 'BIST 30 Endeksi şirketlerinin hisse senetlerine yatırım yapar.'
  },
  {
    code: 'GAF',
    name: 'Inveo Portföy Birinci Hisse Senedi Fonu',
    company: 'Inveo Portföy Yönetimi A.Ş.',
    category: 'Hisse Senedi',
    riskLevel: 6,
    featured: false,
    desc: 'Borsa İstanbul hisse senetlerine aktif portföy yönetimiyle yatırım yapar.'
  },
  {
    code: 'GMR',
    name: 'Inveo Portföy BIST 30 Dışı Şirketler Hisse Senedi Fonu',
    company: 'Inveo Portföy Yönetimi A.Ş.',
    category: 'Hisse Senedi',
    riskLevel: 6,
    featured: false,
    desc: 'BIST 30 Endeksi dışında kalan şirketlerin hisse senetlerine odaklanır.'
  },
  {
    code: 'GSP',
    name: 'Azimut Portföy Kar Payı Ödeyen Hisse Senedi Fonu',
    company: 'Azimut Portföy Yönetimi A.Ş.',
    category: 'Hisse Senedi',
    riskLevel: 6,
    featured: false,
    desc: 'Kar payı ödeme potansiyeli olan Borsa İstanbul şirketlerine yatırım yapar.'
  },
  {
    code: 'GHS',
    name: 'Garanti Portföy Hisse Senedi Fonu',
    company: 'Garanti Portföy Yönetimi A.Ş.',
    category: 'Hisse Senedi',
    riskLevel: 6,
    featured: false,
    desc: 'Borsa İstanbul hisse senetlerinden oluşan aktif yönetilen portföy.'
  },
  {
    code: 'HVS',
    name: 'HSBC Portföy Hisse Senedi Fonu',
    company: 'HSBC Portföy Yönetimi A.Ş.',
    category: 'Hisse Senedi',
    riskLevel: 6,
    featured: false,
    desc: 'Borsa İstanbul şirketlerinin hisse senetlerine yatırım yapar.'
  },
  {
    code: 'HGM',
    name: 'Hedef Portföy İkinci Hisse Senedi Fonu',
    company: 'Hedef Portföy Yönetimi A.Ş.',
    category: 'Hisse Senedi',
    riskLevel: 6,
    featured: false,
    desc: 'Borsa İstanbul\'da işlem gören hisse senetlerine yatırım yapan hisse yoğun fon.'
  },
  {
    code: 'IHK',
    name: 'İş Portföy İş\'te Kadın Hisse Senedi Fonu',
    company: 'İş Portföy Yönetimi A.Ş.',
    category: 'Hisse Senedi',
    riskLevel: 6,
    featured: false,
    desc: 'Kadınların yönetim ve temsilde öne çıktığı şirketlere yatırım yapan tematik fon.'
  },
  {
    code: 'KYA',
    name: 'Kare Portföy Hisse Senedi Fonu',
    company: 'Kare Portföy Yönetimi A.Ş.',
    category: 'Hisse Senedi',
    riskLevel: 6,
    featured: false,
    desc: 'Borsa İstanbul hisse senetlerine yatırım yapan hisse yoğun fon.'
  },
  {
    code: 'KPH',
    name: 'İş Portföy Kar Payı Ödeyen Hisse Senedi Fonu',
    company: 'İş Portföy Yönetimi A.Ş.',
    category: 'Hisse Senedi',
    riskLevel: 6,
    featured: false,
    desc: 'Kar payı ödeme potansiyeli olan yerli şirketlerin hisse senetlerine yatırım yapar.'
  },
  {
    code: 'MPS',
    name: 'Aktif Portföy Katılım Hisse Senedi Fonu',
    company: 'Aktif Portföy Yönetimi A.Ş.',
    category: 'Hisse Senedi',
    riskLevel: 6,
    featured: false,
    desc: 'Katılım finans ilkelerine uygun şirketlerin hisse senetlerine yatırım yapar.'
  },
  {
    code: 'MTH',
    name: 'MT Portföy Birinci Hisse Senedi Fonu',
    company: 'MT Portföy Yönetimi A.Ş.',
    category: 'Hisse Senedi',
    riskLevel: 6,
    featured: false,
    desc: 'Borsa İstanbul hisse senetlerine yatırım yapan hisse yoğun fon.'
  },
  {
    code: 'NNF',
    name: 'Hedef Portföy Birinci Hisse Senedi Fonu',
    company: 'Hedef Portföy Yönetimi A.Ş.',
    category: 'Hisse Senedi',
    riskLevel: 6,
    featured: false,
    desc: 'Borsa İstanbul\'da büyüme potansiyeli bulunan şirketlerin hisse senetlerine yatırım yapar.'
  },

  // YABANCI, TEKNOLOJİ & SEKTÖREL FONLAR
  {
    code: 'DVT',
    name: 'Deniz Portföy Metaverse ve Dijital Yaşam Teknolojileri Değişken Fon',
    company: 'Deniz Portföy Yönetimi A.Ş.',
    category: 'Yabancı & Teknoloji',
    riskLevel: 6,
    featured: false,
    desc: 'Metaverse, dijital yaşam ve yeni nesil teknoloji temalarına yatırım yapar.'
  },
  {
    code: 'IJP',
    name: 'İş Portföy Blockchain Teknolojileri Karma Fon',
    company: 'İş Portföy Yönetimi A.Ş.',
    category: 'Yabancı & Teknoloji',
    riskLevel: 6,
    featured: false,
    desc: 'Blockchain ekosistemi ve bu alandaki şirketlere tematik yatırım sağlar.'
  },
  {
    code: 'IJC',
    name: 'İş Portföy Yarı İletken Teknolojileri Değişken Fon',
    company: 'İş Portföy Yönetimi A.Ş.',
    category: 'Yabancı & Teknoloji',
    riskLevel: 6,
    featured: false,
    desc: 'Yarı iletken ve çip teknolojileri alanındaki şirketlere yatırım yapar.'
  },
  {
    code: 'IJB',
    name: 'İş Portföy Dijital Oyun Sektörü Karma Fon',
    company: 'İş Portföy Yönetimi A.Ş.',
    category: 'Yabancı & Teknoloji',
    riskLevel: 6,
    featured: false,
    desc: 'Dijital oyun sektörü ve oyun ekosistemindeki şirketlere tematik yatırım sağlar.'
  },
  {
    code: 'JET',
    name: 'Ata Portföy Havacılık ve Savunma Teknolojileri Değişken Fon',
    company: 'Ata Portföy Yönetimi A.Ş.',
    category: 'Yabancı & Teknoloji',
    riskLevel: 6,
    featured: false,
    desc: 'Havacılık, uzay ve savunma teknolojileri sektörlerindeki şirketlere yatırım yapar.'
  },
  {
    code: 'OJT',
    name: 'QNB Portföy Teknoloji Fon Sepeti Fonu',
    company: 'QNB Portföy Yönetimi A.Ş.',
    category: 'Yabancı & Teknoloji',
    riskLevel: 6,
    featured: false,
    desc: 'Teknoloji temalı yatırım fonlarından oluşan bir fon sepetidir.'
  },

  // PARA PİYASASI & LİKİT FONLAR
  {
    code: 'BGP',
    name: 'Ak Portföy Üçüncü Para Piyasası Fonu',
    company: 'Ak Portföy Yönetimi A.Ş.',
    category: 'Para Piyasası',
    riskLevel: 1,
    featured: false,
    desc: 'Kısa vadeli ve likit para piyasası araçlarına yatırım yapar.'
  },
  {
    code: 'DLY',
    name: 'Deniz Portföy Para Piyasası Fonu',
    company: 'Deniz Portföy Yönetimi A.Ş.',
    category: 'Para Piyasası',
    riskLevel: 1,
    featured: false,
    desc: 'Kısa vadeli para piyasası araçlarıyla likidite ve düzenli getiri hedefler.'
  },
  {
    code: 'HSL',
    name: 'HSBC Portföy Para Piyasası Fonu',
    company: 'HSBC Portföy Yönetimi A.Ş.',
    category: 'Para Piyasası',
    riskLevel: 1,
    featured: false,
    desc: 'Kısa vadeli, likit para piyasası araçlarına yatırım yapar.'
  },
  {
    code: 'PPN',
    name: 'Nurol Portföy Para Piyasası Fonu',
    company: 'Nurol Portföy Yönetimi A.Ş.',
    category: 'Para Piyasası',
    riskLevel: 1,
    featured: false,
    desc: 'Para piyasası araçlarıyla likiditeyi korumayı ve kısa vadeli getiri sağlamayı amaçlar.'
  },
  {
    code: 'PPI',
    name: 'Yapı Kredi Portföy Üçüncü Para Piyasası Fonu',
    company: 'Yapı Kredi Portföy Yönetimi A.Ş.',
    category: 'Para Piyasası',
    riskLevel: 1,
    featured: false,
    desc: 'Kısa vadeli ve likit para piyasası araçlarından oluşur.'
  },
  {
    code: 'TI1',
    name: 'İş Portföy Para Piyasası Fonu',
    company: 'İş Portföy Yönetimi A.Ş.',
    category: 'Para Piyasası',
    riskLevel: 1,
    featured: false,
    desc: 'Kısa vadeli para piyasası araçlarına yatırım yaparak günlük likidite hedefler.'
  },

  // KIYMETLİ MADENLER & ALTIN FONLARI
  {
    code: 'AFO',
    name: 'Ak Portföy Altın Fonu',
    company: 'Ak Portföy Yönetimi A.Ş.',
    category: 'Kıymetli Madenler',
    riskLevel: 5,
    featured: false,
    desc: 'Altın ve altına dayalı sermaye piyasası araçlarına yatırım yapar.'
  },
  {
    code: 'FIB',
    name: 'Fiba Portföy Altın Fonu',
    company: 'Fiba Portföy Yönetimi A.Ş.',
    category: 'Kıymetli Madenler',
    riskLevel: 5,
    featured: false,
    desc: 'Portföyünü ağırlıklı olarak altın ve altına dayalı varlıklarda değerlendirir.'
  },
  {
    code: 'GTZ',
    name: 'Garanti Portföy Gümüş Fon Sepeti Fonu',
    company: 'Garanti Portföy Yönetimi A.Ş.',
    category: 'Kıymetli Madenler',
    riskLevel: 5,
    featured: false,
    desc: 'Gümüş ve kıymetli maden temalı yatırım fonlarından oluşan fon sepetidir.'
  },
  {
    code: 'KUT',
    name: 'Kuveyt Türk Portföy Kıymetli Madenler Katılım Fonu',
    company: 'Kuveyt Türk Portföy Yönetimi A.Ş.',
    category: 'Kıymetli Madenler',
    riskLevel: 5,
    featured: false,
    desc: 'Katılım finans ilkelerine uygun kıymetli madenlere yatırım yapar.'
  },
  {
    code: 'OJK',
    name: 'QNB Portföy Altın Fonu',
    company: 'QNB Portföy Yönetimi A.Ş.',
    category: 'Kıymetli Madenler',
    riskLevel: 5,
    featured: false,
    desc: 'Altına ve altına dayalı sermaye piyasası araçlarına yatırım yapar.'
  },
  {
    code: 'TTA',
    name: 'İş Portföy Altın Fonu',
    company: 'İş Portföy Yönetimi A.Ş.',
    category: 'Kıymetli Madenler',
    riskLevel: 5,
    featured: false,
    desc: 'Altın ve altına dayalı varlıklara yatırım yaparak altın piyasasını takip eder.'
  },
  {
    code: 'TUA',
    name: 'TEB Portföy Altın Fonu',
    company: 'TEB Portföy Yönetimi A.Ş.',
    category: 'Kıymetli Madenler',
    riskLevel: 5,
    featured: false,
    desc: 'Altın fiyat hareketlerine dayalı uzun vadeli yatırım hedefler.'
  },

  // DEĞİŞKEN & FON SEPETİ FONLARI
  {
    code: 'ACD',
    name: 'İstanbul Portföy İkinci Değişken Fon',
    company: 'İstanbul Portföy Yönetimi A.Ş.',
    category: 'Değişken & Karma',
    riskLevel: 5,
    featured: false,
    desc: 'Piyasa koşullarına göre farklı varlık sınıfları arasında esnek dağılım yapar.'
  },
  {
    code: 'AGC',
    name: 'Ak Portföy İkinci Değişken Fon',
    company: 'Ak Portföy Yönetimi A.Ş.',
    category: 'Değişken & Karma',
    riskLevel: 5,
    featured: false,
    desc: 'Piyasa koşullarına göre çeşitli sermaye piyasası araçlarına yatırım yapar.'
  },
  {
    code: 'BHF',
    name: 'Pardus Portföy Birinci Değişken Fon',
    company: 'Pardus Portföy Yönetimi A.Ş.',
    category: 'Değişken & Karma',
    riskLevel: 5,
    featured: false,
    desc: 'Değişen piyasa koşullarına göre esnek varlık dağılımı uygular.'
  },
  {
    code: 'GMA',
    name: 'Azimut Portföy Birinci Değişken Fon',
    company: 'Azimut Portföy Yönetimi A.Ş.',
    category: 'Değişken & Karma',
    riskLevel: 5,
    featured: false,
    desc: 'Farklı varlık sınıfları arasında aktif ve esnek portföy yönetimi uygular.'
  },
  {
    code: 'GPI',
    name: 'Garanti Portföy İkinci Değişken Fon',
    company: 'Garanti Portföy Yönetimi A.Ş.',
    category: 'Değişken & Karma',
    riskLevel: 5,
    featured: false,
    desc: 'Piyasa beklentilerine göre farklı yatırım araçlarını dengeli biçimde değerlendirir.'
  },
  {
    code: 'HSA',
    name: 'HSBC Portföy Değişken Fon',
    company: 'HSBC Portföy Yönetimi A.Ş.',
    category: 'Değişken & Karma',
    riskLevel: 5,
    featured: false,
    desc: 'Piyasa koşullarına göre hisse, borçlanma ve para piyasası araçlarına yatırım yapar.'
  },
  {
    code: 'HJB',
    name: 'Hedef Portföy Birinci Değişken Fon',
    company: 'Hedef Portföy Yönetimi A.Ş.',
    category: 'Değişken & Karma',
    riskLevel: 5,
    featured: false,
    desc: 'Farklı varlık sınıflarına esnek dağılımla yatırım yapar.'
  },
  {
    code: 'IPB',
    name: 'İstanbul Portföy Birinci Değişken Fon',
    company: 'İstanbul Portföy Yönetimi A.Ş.',
    category: 'Değişken & Karma',
    riskLevel: 5,
    featured: false,
    desc: 'Aktif yönetimle değişen piyasa koşullarına uyum sağlamayı hedefler.'
  },
  {
    code: 'RIK',
    name: 'Re-Pie Portföy İkinci Değişken Fon',
    company: 'Re-Pie Portföy Yönetimi A.Ş.',
    category: 'Değişken & Karma',
    riskLevel: 5,
    featured: false,
    desc: 'Piyasa görünümüne göre farklı finansal araçlara esnek yatırım yapar.'
  },
  {
    code: 'TCD',
    name: 'Tacirler Portföy Değişken Fon',
    company: 'Tacirler Portföy Yönetimi A.Ş.',
    category: 'Değişken & Karma',
    riskLevel: 5,
    featured: false,
    desc: 'Piyasa koşullarına göre hisse senedi ve diğer varlık sınıfları arasında dağılım yapar.'
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
