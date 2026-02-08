import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-white px-6 text-center font-sans">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#00AAFF]/20 rounded-full blur-3xl -z-10" />

      <h1 className="text-9xl font-extrabold bg-gradient-to-r from-[#00AAFF] to-[#1100FF] bg-clip-text text-transparent mb-4">
        404
      </h1>

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Halaman Tidak Ditemukan</h2>

      <p className="text-lg text-gray-600 mb-10 max-w-lg mx-auto leading-relaxed">
        Maaf, halaman yang Anda tuju mungkin belum tersedia atau sedang dalam tahap pengembangan
        oleh tim kami.
      </p>

      <Link href="/">
        <Button className="bg-black text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105 px-8 py-6 rounded-md font-bold shadow-lg hover:shadow-xl">
          Kembali ke Beranda
        </Button>
      </Link>
    </div>
  );
}
