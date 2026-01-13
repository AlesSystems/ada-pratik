import Link from "next/link";
import { Pill, Zap, Banknote, Bus, Utensils } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Kıbrıs Pratik</h1>
          <p className="text-sm text-gray-600">KKTC Yaşam Asistanınız</p>
        </div>
      </header>

      {/* Main Content - Bento Grid */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Nöbetçi Eczane Card */}
          <Link
            href="/eczane"
            className="group block rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md"
          >
            <div className="mb-4 inline-flex rounded-lg bg-red-100 p-3">
              <Pill className="h-6 w-6 text-red-600" />
            </div>
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              Nöbetçi Eczane
            </h2>
            <p className="mb-2 text-sm text-gray-600">
              7/24 güncel nöbetçi eczane bilgileri
            </p>
            <span className="inline-flex items-center rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-medium text-red-700">
              7/24 Aktif
            </span>
          </Link>

          {/* Elektrik Hesapla Card */}
          <Link
            href="/elektrik"
            className="group block rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md"
          >
            <div className="mb-4 inline-flex rounded-lg bg-yellow-100 p-3">
              <Zap className="h-6 w-6 text-yellow-600" />
            </div>
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              Elektrik Hesapla
            </h2>
            <p className="text-sm text-gray-600">
              Faturanızı tahmin edin
            </p>
          </Link>

          {/* Döviz Kurları Card */}
          <Link
            href="/doviz"
            className="group block rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md"
          >
            <div className="mb-4 inline-flex rounded-lg bg-green-100 p-3">
              <Banknote className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              Döviz Kurları
            </h2>
            <p className="text-sm text-gray-600">
              Güncel piyasa verileri
            </p>
          </Link>

          {/* Dolmuş & Otobüs Card */}
          <Link
            href="/ulasim"
            className="group block rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md"
          >
            <div className="mb-4 inline-flex rounded-lg bg-blue-100 p-3">
              <Bus className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              Dolmuş & Otobüs
            </h2>
            <p className="text-sm text-gray-600">
              Saatler ve Güzergahlar
            </p>
          </Link>

          {/* Bugün Ne Yesem Card */}
          <Link
            href="/yemek"
            className="group block rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md"
          >
            <div className="mb-4 inline-flex rounded-lg bg-purple-100 p-3">
              <Utensils className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              Bugün Ne Yesem?
            </h2>
            <p className="text-sm text-gray-600">
              Yemek önerisi alın
            </p>
          </Link>

        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600">
            Kıbrıs Pratik © 2024 - Açık Kaynak Proje
          </p>
        </div>
      </footer>
    </div>
  );
}
