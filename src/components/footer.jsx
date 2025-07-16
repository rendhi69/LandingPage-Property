import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#071b35] text-white w-full">
      <div className="px-4 pt-16 pb-10 mx-auto max-w-screen-xl md:px-8">
        <div className="grid gap-10 row-gap-8 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Logo & Deskripsi */}
          <div className="sm:col-span-2">
            <a href="/" className="inline-flex items-center">
              <span className="text-2xl font-extrabold tracking-wide text-[#f5deb3]">
                HomeLiving Banyuwangi
              </span>
            </a>
            <div className="mt-6 max-w-md">
              <p className="text-sm text-white">
                HomeLiving Banyuwangi menghadirkan hunian modern yang nyaman, aman, dan strategis di pusat kota. Didesain untuk keluarga masa kini.
              </p>
              <p className="mt-4 text-sm text-white">
                Didukung fasilitas lengkap serta lingkungan hijau yang asri untuk meningkatkan kualitas hidup Anda.
              </p>
            </div>
          </div>

          {/* Kontak */}
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-[#f5deb3]">Kontak Kami</p>
            <div className="flex">
              <span className="mr-1 text-white">Phone:</span>
              <a href="tel:081234567890" className="hover:text-[#f5deb3] transition">0812-3456-7890</a>
            </div>
            <div className="flex">
              <span className="mr-1 text-white">Email:</span>
              <a href="mailto:info@homelivingbanyuwangi.id" className="hover:text-[#f5deb3] transition">info@homelivingbanyuwangi.id</a>
            </div>
            <div className="flex">
              <span className="mr-1 text-white">Alamat:</span>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f5deb3] transition"
              >
                Jl. Damai Indah No. 88, Banyuwangi
              </a>
            </div>
          </div>

          {/* Sosial Media */}
          <div>
            <p className="text-base font-bold tracking-wide text-[#f5deb3]">Ikuti Kami</p>
            <div className="flex items-center mt-3 space-x-4">
              <a href="/" className="text-white hover:text-[#f5deb3] transition text-lg">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="text-white hover:text-[#f5deb3] transition text-lg">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/" className="text-white hover:text-[#f5deb3] transition text-lg">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <p className="mt-4 text-sm text-white">
              Ikuti media sosial kami untuk update informasi dan promo menarik lainnya.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col-reverse justify-between border-t border-white/20 pt-5 md:flex-row">
          <p className="text-sm text-white">
            © {new Date().getFullYear()} HomeLiving Banyuwangi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
