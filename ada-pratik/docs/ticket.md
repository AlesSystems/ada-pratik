# Modül 1: Nöbetçi Eczane ve WhatsApp

## 🧠 Neden İlk Sırada?

**Sağlık beklemez.**  
Gece yarısı acil ilaç ihtiyacı ortaya çıkabilir ve insanlar panikle Google’da “nöbetçi eczane” aramak zorunda kalır.

Mevcut siteler:
- UI/UX olarak karışıktır
- Kullanımı zor
- Nöbetçi eczanelerin **doğru konumunu** vermekte yetersiz
- Harita verileri yanlış veya güncel değil

Bu modül, kullanıcıların **hızla doğru eczaneyi bulup iletişime geçmesini sağlar.**

---

## 🚀 Kazanma Stratejisi

Sadece nöbetçi eczane listesi vermek yeterli değildir. Kullanıcıların acil ihtiyaçlarına *anında çözüm* üretmek gerekir.

Bu modülde:
✔️ **Tek Tuşla Konum**  
✔️ **Tek Tuşla Eczaneye WhatsApp**

özellikleri olacak.

### 🎯 Kullanıcı Problemleri & Çözümler

| Problem | Çözüm |
|---------|-------|
| “Hangi eczane açık?” | Anlık nöbetçi eczane listesi |
| “Adres karışıyor, hızlı bulamıyorum” | GPS ile **tek tuşla konum** |
| “İlaç stoğu var mı?” | **Tek tuşla WhatsApp** mesajı |

---

## 📱 Özellikler

### 1. Nöbetçi Eczane Listesi
- İl / ilçe seçimi
- Güncel nöbetçi eczane verisi
- Sıralama: adres uzaklığına göre

### 2. Konum Özelliği
☝️ Kullanıcı “Konumumu Göster” dediğinde:
- En yakın nöbetçi eczaneler listelenir
- Her satırda “Haritada Göster” butonu

📍 Butona tıklandığında:
- Kullanıcı harita açılır (Google/Apple Maps)
- Eczanenin tam koordinatı gösterilir

### 3. WhatsApp Mesajı Özelliği
💬 Nöbetçi eczanenin yanında:
**“WhatsApp ile Sor”** butonu olacak.

Butona tıklandığında:
- Hazır mesaj otomatik olarak açılır
- Kullanıcı tek tıkla şu mesajı gönderebilir:

Merhaba, acil olarak bir ilaç soracağım:
📌 İlaç adı:
📍 Mevcut musunuz?

yaml
Copy code

Bu sayede kullanıcı:
✅ Hızla iletişim kurar  
✅ İlaç stoğunu sormadan yola çıkmaz

---

## 🧩 UI/UX Akışı

1. Kullanıcı ana sayfada il/ilçe seçer
2. Sistem anlık nöbetçi eczaneleri listeler
3. Kullanıcı:
   - Haritaya bakar
   - Ya da WhatsApp mesajı açar
4. Kullanıcı en yakın eczaneye yönlenir veya mesajla iletişim kurar

---

## 📌 Neden Bu Modül Tek Başına Bile Çekici?

- Aciliyet ihtiyacına cevap veriyor
- Sade, hızlı, pratik
- Kullanıcıyı *gereksiz sekmelerden* kurtarıyor
- Sadece “liste” değil, **etkileşimli çözüm** sunuyor

---

## 🛠️ Teknik Gereksinimler

### Backend
- Nöbetçi eczane API’si (güncel veri)
- WhatsApp tıklanabilir link (API değil, `wa.me`)

### Frontend
- Mobil/Responsive tasarım
- Harita entegrasyonu (Google Maps / OpenStreetMaps)

---

## 📍 Sonuç

Bu modül:
✔️ Kullanıcının en temel acil ihtiyaçlarına odaklanır  
✔️ Kullanımı kolay, pratik çözümler sunar  
✔️ Trafik ve kullanıcı bağlılığı yaratır  

💡 **Kazanma stratejimiz:** Listelemek *yetmez* — **tek tıkla konum + tek tıkla WhatsApp** ile *anında çözüm* sağla.

---
