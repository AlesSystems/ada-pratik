'use client';

import { useState, useEffect } from 'react';
import { MapPin, MessageCircle, Navigation, Phone, Clock } from 'lucide-react';
import Link from 'next/link';

interface Pharmacy {
  id: number;
  name: string;
  address: string;
  phone: string;
  city: string;
  district: string;
  lat: number;
  lng: number;
}

const cities = [
  { value: 'lefkosa', label: 'Lefkoşa' },
  { value: 'gazimagusa', label: 'Gazimağusa' },
  { value: 'girne', label: 'Girne' },
  { value: 'guzelyurt', label: 'Güzelyurt' },
  { value: 'iskele', label: 'İskele' },
  { value: 'lefke', label: 'Lefke' },
];

// Sample data - In production, this would come from an API
const samplePharmacies: Pharmacy[] = [
  {
    id: 1,
    name: 'Merkez Eczanesi',
    address: 'Şehit Salahi Şevket Sokak No:12, Lefkoşa',
    phone: '+905338123456',
    city: 'lefkosa',
    district: 'Merkez',
    lat: 35.1856,
    lng: 33.3823,
  },
  {
    id: 2,
    name: 'Sağlık Eczanesi',
    address: 'Bedrettin Demirel Caddesi No:45, Lefkoşa',
    phone: '+905338234567',
    city: 'lefkosa',
    district: 'Küçük Kaymaklı',
    lat: 35.1976,
    lng: 33.3547,
  },
  {
    id: 3,
    name: 'Salamis Eczanesi',
    address: 'İsmet İnönü Bulvarı No:78, Gazimağusa',
    phone: '+905338345678',
    city: 'gazimagusa',
    district: 'Merkez',
    lat: 35.1264,
    lng: 33.9452,
  },
  {
    id: 4,
    name: 'Girne Eczanesi',
    address: 'Ziya Rızkı Caddesi No:23, Girne',
    phone: '+905338456789',
    city: 'girne',
    district: 'Merkez',
    lat: 35.3417,
    lng: 33.3186,
  },
];

export default function EczanePage() {
  const [selectedCity, setSelectedCity] = useState('');
  const [pharmacies, setPharmacies] = useState<Pharmacy[]>([]);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [locationError, setLocationError] = useState('');

  useEffect(() => {
    if (selectedCity) {
      // Filter pharmacies by selected city
      const filtered = samplePharmacies.filter(p => p.city === selectedCity);
      setPharmacies(filtered);
    }
  }, [selectedCity]);

  const requestLocation = () => {
    setLoading(true);
    setLocationError('');

    if (!navigator.geolocation) {
      setLocationError('Tarayıcınız konum servisini desteklemiyor');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setUserLocation(location);
        
        // Sort pharmacies by distance
        const sorted = [...samplePharmacies].sort((a, b) => {
          const distA = calculateDistance(location.lat, location.lng, a.lat, a.lng);
          const distB = calculateDistance(location.lat, location.lng, b.lat, b.lng);
          return distA - distB;
        });
        
        setPharmacies(sorted);
        setSelectedCity('');
        setLoading(false);
      },
      (error) => {
        setLocationError('Konumunuza erişilemiyor. Lütfen tarayıcı ayarlarınızı kontrol edin.');
        setLoading(false);
      }
    );
  };

  const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number) => {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const getDistance = (pharmacy: Pharmacy) => {
    if (!userLocation) return null;
    const dist = calculateDistance(userLocation.lat, userLocation.lng, pharmacy.lat, pharmacy.lng);
    return dist.toFixed(1);
  };

  const openInMaps = (pharmacy: Pharmacy) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile && /iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      // iOS - Apple Maps
      window.open(`maps://maps.apple.com/?q=${pharmacy.lat},${pharmacy.lng}&ll=${pharmacy.lat},${pharmacy.lng}`, '_blank');
    } else {
      // Android & Desktop - Google Maps
      window.open(`https://www.google.com/maps/search/?api=1&query=${pharmacy.lat},${pharmacy.lng}`, '_blank');
    }
  };

  const openWhatsApp = (pharmacy: Pharmacy) => {
    const message = encodeURIComponent(
      `Merhaba ${pharmacy.name},\n\nAcil olarak bir ilaç soracağım:\n📌 İlaç adı: \n📍 Mevcut musunuz?`
    );
    const phone = pharmacy.phone.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const callPharmacy = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
                ← Ana Sayfa
              </Link>
              <h1 className="mt-2 text-2xl font-bold text-gray-900">Nöbetçi Eczane</h1>
              <p className="text-sm text-gray-600">7/24 Güncel Nöbetçi Eczane Bilgileri</p>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2">
              <Clock className="h-5 w-5 text-red-600" />
              <span className="text-sm font-medium text-red-700">7/24 Aktif</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Search Controls */}
        <div className="mb-6 rounded-lg bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">Eczane Bul</h2>
          
          <div className="flex flex-col gap-4 sm:flex-row">
            {/* City Selection */}
            <div className="flex-1">
              <label htmlFor="city" className="mb-2 block text-sm font-medium text-gray-700">
                İl Seçin
              </label>
              <select
                id="city"
                value={selectedCity}
                onChange={(e) => {
                  setSelectedCity(e.target.value);
                  setUserLocation(null);
                }}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
              >
                <option value="">İl seçin...</option>
                {cities.map((city) => (
                  <option key={city.value} value={city.value}>
                    {city.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Button */}
            <div className="flex items-end">
              <button
                onClick={requestLocation}
                disabled={loading}
                className="flex items-center gap-2 rounded-lg bg-red-600 px-6 py-2 font-medium text-white transition-colors hover:bg-red-700 disabled:bg-gray-400"
              >
                <Navigation className="h-5 w-5" />
                {loading ? 'Konumunuz Alınıyor...' : 'Konumumu Göster'}
              </button>
            </div>
          </div>

          {locationError && (
            <div className="mt-4 rounded-lg bg-red-50 p-4">
              <p className="text-sm text-red-700">{locationError}</p>
            </div>
          )}
        </div>

        {/* Info Box */}
        {userLocation && (
          <div className="mb-6 rounded-lg bg-blue-50 p-4">
            <p className="text-sm text-blue-700">
              📍 Konumunuz alındı! Eczaneler size olan uzaklığa göre sıralandı.
            </p>
          </div>
        )}

        {/* Pharmacies List */}
        <div className="space-y-4">
          {pharmacies.length === 0 ? (
            <div className="rounded-lg bg-white p-12 text-center shadow-sm">
              <MapPin className="mx-auto mb-4 h-12 w-12 text-gray-400" />
              <p className="text-gray-600">
                {selectedCity || userLocation 
                  ? 'Nöbetçi eczane bulunamadı'
                  : 'Nöbetçi eczaneleri görüntülemek için il seçin veya konumunuzu açın'}
              </p>
            </div>
          ) : (
            pharmacies.map((pharmacy) => {
              const distance = getDistance(pharmacy);
              return (
                <div
                  key={pharmacy.id}
                  className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <div className="mb-2 flex items-start gap-3">
                        <div className="rounded-lg bg-red-100 p-2">
                          <MapPin className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{pharmacy.name}</h3>
                          <p className="mt-1 text-sm text-gray-600">{pharmacy.address}</p>
                          <p className="mt-1 text-sm text-gray-500">{pharmacy.district}</p>
                          {distance && (
                            <p className="mt-2 inline-flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                              <Navigation className="h-3 w-3" />
                              {distance} km uzaklıkta
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 sm:min-w-[200px]">
                      {/* Map Button */}
                      <button
                        onClick={() => openInMaps(pharmacy)}
                        className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                      >
                        <MapPin className="h-4 w-4" />
                        Haritada Göster
                      </button>

                      {/* WhatsApp Button */}
                      <button
                        onClick={() => openWhatsApp(pharmacy)}
                        className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
                      >
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp ile Sor
                      </button>

                      {/* Call Button */}
                      <button
                        onClick={() => callPharmacy(pharmacy.phone)}
                        className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                      >
                        <Phone className="h-4 w-4" />
                        Ara
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Info Section */}
        <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
          <h3 className="mb-3 text-lg font-semibold text-gray-900">Nasıl Kullanılır?</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>✅ <strong>İl seçin</strong> - Bulunduğunuz ili seçerek o bölgedeki nöbetçi eczaneleri görün</p>
            <p>✅ <strong>Konumunuzu gösterin</strong> - Size en yakın nöbetçi eczaneleri mesafe sırasına göre listeleyin</p>
            <p>✅ <strong>Haritada göster</strong> - Eczanenin tam konumunu haritada açın ve yol tarifi alın</p>
            <p>✅ <strong>WhatsApp ile sorun</strong> - İlaç stoğunu kontrol etmek için hazır mesaj gönderin</p>
            <p>✅ <strong>Arayın</strong> - Telefon ile doğrudan eczaneyi arayın</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600">
            Kıbrıs Pratik © 2024 - Nöbetçi eczane bilgileri düzenli olarak güncellenmektedir
          </p>
        </div>
      </footer>
    </div>
  );
}
