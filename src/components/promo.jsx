import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Gambar bisa diganti sesuai kebutuhan
import promo1 from "../assets/promo/promo1.png";
import promo2 from "../assets/promo/promo1.png";
import promo3 from "../assets/promo/promo1.png";
import promo4 from "../assets/promo/promo1.png";
import promo5 from "../assets/promo/promo1.png";
import promo6 from "../assets/promo/promo1.png";

const promoData = [
  {
    id: 1,
    title: "June Special Promo! Potongan Harga Puluhan Juta Rupiah!",
    date: "24 June 2025",
    image: promo1,
    detail: (
      <>
        <p>
          Amazing June! Khusus bulan ini, beli tipe apapun, potongan harga puluhan juta! Berlaku untuk semua tipe rumah!
        </p>
        <ul className="list-disc list-inside mt-3">
          <li>Open House: 29 Juni 2025</li>
          <li>Jam: 9 AM – 5 PM</li>
          <li>Tempat: Marketing Office HomeLiving Banyuwangi</li>
        </ul>
      </>
    )
  },
  {
    id: 2,
    title: "Limited Units! Dapatkan Promo Potongan Harga Puluhan Juta!",
    date: "9 June 2025",
    image: promo2,
    detail: "Promo terbatas! Segera miliki unit impian Anda dengan potongan harga khusus hanya bulan ini."
  },
  {
    id: 3,
    title: "Visit Lokasi UC Square! Open House Stone Gate Park",
    date: "18 May 2025",
    image: promo3,
    detail: "Kunjungi lokasi UC Square dan dapatkan penawaran menarik hanya saat Open House!"
  },
  {
    id: 4,
    title: "Limited Time Offer! Manfaatkan Harga Launching Terakhir!",
    date: "24 April 2025",
    image: promo4,
    detail: "Nikmati harga launching terakhir dan dapatkan berbagai benefit menarik."
  },
  {
    id: 5,
    title: "Launching Moissanite di Cluster Crystal Golf!",
    date: "5 April 2025",
    image: promo5,
    detail: "Rumah modern dengan sirkulasi udara dan pencahayaan alami di Cluster Crystal Golf."
  },
  {
    id: 6,
    title: "Berkah Ramadan! Promo Free PPN 100% dan Biaya KPR!",
    date: "17 March 2025",
    image: promo6,
    detail: "Khusus bulan Ramadan, dapatkan kemudahan KPR dan diskon besar."
  }
];

export default function Promo() {
  const [selectedPromo, setSelectedPromo] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-[#071b35] text-white py-20 px-6 md:px-16 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Judul */}
        <div className="flex justify-center items-center flex-col mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center relative inline-block after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[#f5deb3] after:left-1/2 after:-translate-x-1/2 after:-bottom-2">
            Promo Terbaru HomeLiving
          </h2>
        </div>

        {/* Daftar Promo */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {promoData.map((promo, index) => (
            <div
              key={promo.id}
              onClick={() => setSelectedPromo(promo)}
              className="cursor-pointer bg-[#0f2a4a] rounded-2xl overflow-hidden shadow-lg hover:shadow-[#f5deb3]/30 transition-transform duration-300 hover:scale-[1.02]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-full h-40 overflow-hidden bg-white">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <div className="p-4">
                <h4 className="text-sm font-semibold text-[#f5deb3] mb-1 line-clamp-2">{promo.title}</h4>
                <p className="text-xs text-gray-400">{promo.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Detail Promo */}
      {selectedPromo && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4">
          <div className="relative max-w-3xl w-full bg-white rounded-xl shadow-2xl overflow-hidden">
            <button
              className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-red-500 transition"
              onClick={() => setSelectedPromo(null)}
            >
              &times;
            </button>

            <div className="md:flex">
              {/* Gambar Promo */}
              <div className="md:w-1/2 p-4 bg-white">
                <img
                  src={selectedPromo.image}
                  alt="Preview"
                  className="w-full h-64 object-contain rounded-lg mb-4 bg-white"
                />
              </div>

              {/* Detail */}
              <div className="md:w-1/2 p-6 bg-[#0f2a4a] text-white rounded-b-xl md:rounded-r-xl md:rounded-bl-none">
                <h4 className="text-xl font-bold text-[#f5deb3] mb-2">{selectedPromo.title}</h4>
                <p className="text-xs text-gray-400 mb-4">{selectedPromo.date}</p>
                <div className="text-sm text-gray-200 leading-relaxed">
                  {selectedPromo.detail}
                </div>
                <a
                  href="#hubungi"
                  className="inline-block mt-6 px-5 py-2.5 rounded-full bg-yellow-500 text-[#071b35] font-bold shadow hover:bg-white transition"
                >
                  Dapatkan Promo Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
