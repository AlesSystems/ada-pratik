# AdaPratik

KKTC'de yaşayanlar için nöbetçi eczane, elektrik faturası hesaplama ve döviz kurları gibi günlük araçları tek çatı altında toplayan açık kaynaklı platform ve daha fazlası.

## 📋 Proje Özeti

AdaPratik, Kuzey Kıbrıs Türk Cumhuriyeti (TRNC/KKTC) vatandaşları için geliştirilmiş, modüler yapıda bir Next.js React uygulamasıdır. Kullanıcılar ana dashboard üzerinden farklı modüllere erişerek günlük ihtiyaçlarını karşılayabilirler.

## 🏗️ Mimari Yapı

### Modüler Bundle Yaklaşımı

Uygulama, merkezi bir dashboard etrafında organize edilmiş bağımsız modüllerden oluşur:

```
┌─────────────────────────────────┐
│      Ana Dashboard (Main)       │
│  ┌──────┐ ┌──────┐ ┌──────┐    │
│  │ Mod1 │ │ Mod2 │ │ Mod3 │    │
│  └──────┘ └──────┘ └──────┘    │
│  ┌──────┐ ┌──────┐ ┌──────┐    │
│  │ Mod4 │ │ Mod5 │ │ Mod6 │    │
│  └──────┘ └──────┘ └──────┘    │
└─────────────────────────────────┘
```

Her modül:
- Bağımsız olarak geliştirilebilir
- Kendi state yönetimine sahiptir
- Dashboard üzerinden erişilebilir
- Ortak UI bileşenlerini kullanır

## 🛠️ Teknoloji Stack'i

- **Framework**: Next.js (App Router)
- **UI Library**: React 18+
- **Language**: TypeScript
- **Styling**: (CSS Modules / Tailwind CSS / Styled Components - seçilecek)
- **State Management**: (Context API / Zustand / Redux - seçilecek)
- **Form Handling**: React Hook Form
- **HTTP Client**: Axios / Fetch API
- **Testing**: Jest + React Testing Library
- **Package Manager**: npm / yarn / pnpm

## 📁 Proje Yapısı

```
adapratik/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Ana dashboard sayfası
│   ├── dashboard/                # Dashboard layout
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── modules/                  # Modül sayfaları
│       ├── eczane/               # Nöbetçi Eczane modülü
│       │   └── page.tsx
│       ├── elektrik/             # Elektrik Faturası modülü
│       │   └── page.tsx
│       ├── doviz/                # Döviz Kurları modülü
│       │   └── page.tsx
│       └── [module-name]/        # Diğer modüller
│           └── page.tsx
├── components/                    # Paylaşılan bileşenler
│   ├── ui/                       # Temel UI bileşenleri
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Modal/
│   │   └── ...
│   ├── dashboard/                # Dashboard özel bileşenleri
│   │   ├── ModuleCard/
│   │   ├── Navigation/
│   │   └── ...
│   └── layout/                   # Layout bileşenleri
│       ├── Header/
│       ├── Footer/
│       └── Sidebar/
├── modules/                       # Modül mantığı ve bileşenleri
│   ├── eczane/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   └── utils/
│   ├── elektrik/
│   ├── doviz/
│   └── shared/                   # Modüller arası paylaşılan kod
├── lib/                          # Yardımcı fonksiyonlar
│   ├── api/
│   ├── utils/
│   └── constants/
├── hooks/                        # Global React hooks
├── types/                        # Global TypeScript tipleri
├── styles/                       # Global stiller
├── public/                       # Statik dosyalar
├── tests/                        # Test dosyaları
├── .env.local                    # Ortam değişkenleri
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## 🎯 Modüller

### Mevcut Modüller

1. **Nöbetçi Eczane (On-Duty Pharmacy)**
   - Günlük nöbetçi eczane listesi
   - Konum bazlı arama
   - İletişim bilgileri

2. **Elektrik Faturası Hesaplama (Electricity Bill Calculator)**
   - Tüketim bazlı fatura hesaplama
   - Tarife bilgileri
   - Geçmiş fatura karşılaştırma

3. **Döviz Kurları (Currency Exchange Rates)**
   - Güncel döviz kurları
   - Döviz çevirici
   - Kur geçmişi grafikleri

### Gelecek Modüller (Örnek)

- Su Faturası Hesaplama
- Belediye Hizmetleri
- Toplu Taşıma Bilgileri
- Acil Servisler
- Resmi Tatiller
- İş İlanları

## 🎨 Dashboard Tasarımı

### Ana Dashboard Özellikleri

- **Modül Kartları**: Her modül için görsel kart gösterimi
- **Hızlı Erişim**: Sık kullanılan modüllere hızlı erişim
- **Arama**: Modül arama özelliği
- **Kategoriler**: Modüllerin kategorilere göre gruplandırılması
- **Responsive Design**: Mobil ve desktop uyumlu tasarım

### Dashboard Layout

```
┌─────────────────────────────────────────┐
│           Header (Navigation)           │
├─────────────────────────────────────────┤
│                                         │
│  ┌──────────┐  ┌──────────┐           │
│  │  Modül 1 │  │  Modül 2 │           │
│  └──────────┘  └──────────┘           │
│                                         │
│  ┌──────────┐  ┌──────────┐           │
│  │  Modül 3 │  │  Modül 4 │           │
│  └──────────┘  └──────────┘           │
│                                         │
│           [Diğer Modüller...]          │
│                                         │
├─────────────────────────────────────────┤
│              Footer                     │
└─────────────────────────────────────────┘
```

## 🚀 Geliştirme Kurulumu

### Gereksinimler

- Node.js 18+ 
- npm / yarn / pnpm
- Git

### Kurulum Adımları

```bash
# Projeyi klonlayın
git clone [repository-url]
cd AdaPratik

# Bağımlılıkları yükleyin
npm install
# veya
yarn install
# veya
pnpm install

# Geliştirme sunucusunu başlatın
npm run dev
# veya
yarn dev
# veya
pnpm dev
```

Uygulama `http://localhost:3000` adresinde çalışacaktır.

### Ortam Değişkenleri

`.env.local` dosyası oluşturun:

```env
# API Endpoints
NEXT_PUBLIC_API_URL=https://api.example.com

# Feature Flags
NEXT_PUBLIC_ENABLE_MODULE_ECZANE=true
NEXT_PUBLIC_ENABLE_MODULE_ELEKTRIK=true
NEXT_PUBLIC_ENABLE_MODULE_DOVIZ=true

# Analytics (opsiyonel)
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 📝 Geliştirme Rehberi

### Yeni Modül Ekleme

1. **Modül Klasörü Oluştur**
   ```bash
   mkdir -p modules/[module-name]/{components,hooks,services,types,utils}
   ```

2. **Modül Sayfası Oluştur**
   ```bash
   mkdir -p app/modules/[module-name]
   touch app/modules/[module-name]/page.tsx
   ```

3. **Modül Kaydı**
   - `lib/constants/modules.ts` dosyasına modül bilgilerini ekle
   - Dashboard'da görünmesi için modül kartı ekle

4. **Modül Yapısı Örneği**
   ```typescript
   // modules/[module-name]/types/index.ts
   export interface ModuleNameData {
     // Modül veri tipleri
   }

   // modules/[module-name]/services/api.ts
   export const fetchModuleNameData = async () => {
     // API çağrıları
   }

   // modules/[module-name]/components/ModuleNameCard.tsx
   export const ModuleNameCard = () => {
     // Modül UI bileşeni
   }
   ```

### Kod Standartları

- **TypeScript**: Tüm dosyalar TypeScript ile yazılmalı
- **Component Naming**: PascalCase (örn: `ModuleCard.tsx`)
- **Hook Naming**: `use` prefix ile başlamalı (örn: `useModuleData.ts`)
- **File Structure**: Her modül kendi klasöründe organize edilmeli
- **Code Formatting**: ESLint + Prettier kullanılmalı

### Commit Mesajları

```
feat: Yeni modül eklendi (eczane)
fix: Elektrik faturası hesaplama hatası düzeltildi
docs: README güncellendi
style: Dashboard kartları stil güncellemesi
refactor: Modül yapısı yeniden düzenlendi
test: Eczane modülü için testler eklendi
```

## 🧪 Test

```bash
# Tüm testleri çalıştır
npm run test

# Test coverage
npm run test:coverage

# E2E testler (eğer varsa)
npm run test:e2e
```

## 📦 Build ve Deploy

```bash
# Production build
npm run build

# Production sunucusunu başlat
npm start
```

### Deploy Önerileri

- **Vercel**: Next.js için optimize edilmiş
- **Netlify**: Alternatif hosting
- **Docker**: Containerization için

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-module`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: amazing module'`)
4. Branch'inizi push edin (`git push origin feature/amazing-module`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje açık kaynaklıdır. Detaylar için `LICENSE` dosyasına bakın.

## 📞 İletişim

- **GitHub Issues**: Sorunlar ve öneriler için
- **Email**: [email adresi]

## 🗺️ Yol Haritası

### Faz 1: Temel Altyapı
- [ ] Next.js proje kurulumu
- [ ] Dashboard layout
- [ ] Modül sistemi altyapısı
- [ ] Temel UI bileşenleri

### Faz 2: Mevcut Modüller
- [ ] Nöbetçi Eczane modülü
- [ ] Elektrik Faturası modülü
- [ ] Döviz Kurları modülü

### Faz 3: Gelişmiş Özellikler
- [ ] Kullanıcı authentication
- [ ] Favori modüller
- [ ] Bildirimler
- [ ] Offline desteği

### Faz 4: Optimizasyon
- [ ] Performance optimizasyonu
- [ ] SEO iyileştirmeleri
- [ ] Accessibility (a11y)
- [ ] PWA desteği

---

**Not**: Bu dokümantasyon geliştirme süreci boyunca güncellenecektir.
