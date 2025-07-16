import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import rumah1 from "../assets/daftar product/perumahan-kota.jpg";
import rumah2 from "../assets/daftar product/apartement.jpg";
import rumah3 from "../assets/daftar product/foto-rumah.jpg";

const products = [
  {
    id: 1,
    name: "Perumahan",
    slug: "perumahan",
    image: rumah1,
    price: "Mulai Dari 500 jt an",
    desc: "Rumah minimalis 2 lantai, dekat sekolah dan pusat kota.",
  },
  {
    id: 2,
    name: "Apartemen",
    slug: "apartemen",
    image: rumah2,
    price: "Mulai Dari 200 jt an",
    desc: "Hunian Minimalis di Desa, nyaman dengan taman hijau dan jalan lebar.",
  },
  {
    id: 3,
    name: "Rumah Pribadi",
    slug: "rumah-pribadi",
    image: rumah3,
    price: "Mulai Dari 300 jt an",
    desc: "Rumah pribadi modern banyak pilihan, dengan fasilitas lengkap dan asri.",
  },
];

export default function DaftarProduct() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="product" className="py-20 bg-[#071b35] text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:text-[#f5deb3] transition-colors duration-300">
          Daftar Properti
        </h2>
        <p className="mb-12 text-gray-200 max-w-xl mx-auto">
          Pilihan hunian terbaik untuk Anda dan keluarga. Cek daftar properti terbaru kami di bawah ini.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={product.id * 100}
              className="rounded-2xl overflow-hidden bg-[#0f2a4a] text-white shadow-lg transform transition-transform duration-300 hover:scale-[1.03]"
            >
              <div className="group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover transform transition duration-500 group-hover:scale-105 group-hover:brightness-95"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2 text-[#f5deb3]">{product.name}</h3>
                <p className="text-sm text-gray-300 mb-3">{product.desc}</p>
                <p className="text-lg font-bold text-white">{product.price}</p>

                <Link
                  to={`/daftarproduct/${product.slug}`}
                  className="inline-block mt-4 px-4 py-2 bg-[#f5deb3] text-[#071b35] font-semibold rounded-full shadow hover:bg-white hover:scale-105 transition-all duration-300"
                >
                  Lihat Produk
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
