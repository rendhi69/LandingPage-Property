import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import lokasi1 from "../assets/lokasi/location1.jpg";
import lokasi2 from "../assets/lokasi/location2.webp";
import fasilitas1 from "../assets/lokasi/fas1.jpg";
import fasilitas2 from "../assets/lokasi/fas2.jpg";
import fasilitas3 from "../assets/lokasi/fas3.jpg";
import fasilitas4 from "../assets/lokasi/fas4.webp";

import {
  MapPin,
  Building2,
  Bike,
  Leaf,
  ShieldCheck,
  Home,
} from "lucide-react";

export default function Location() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const data = [
    {
      title: "Lokasi Strategis",
      text: "Properti kami tersebar di lokasi strategis Banyuwangi, dekat dengan sekolah, rumah sakit, pusat perbelanjaan, dan akses transportasi utama.",
      icon: <MapPin className="text-[#f5deb3] w-10 h-10 mt-1" />,
      image: lokasi1,
    },
    {
      title: "Fasilitas Lengkap",
      text: "Kami menyediakan properti dengan fasilitas terbaik seperti taman, keamanan 24 jam, akses jalan utama, dan kemudahan ke fasilitas umum.",
      icon: <Building2 className="text-[#f5deb3] w-10 h-10 mt-1" />,
      image: lokasi2,
    },
    {
      title: "Fasilitas Publik",
      text: "Berbagai fasilitas publik tersedia mulai dari taman bermain, jalur sepeda, hingga tempat ibadah. Cocok untuk gaya hidup sehat dan aktif.",
      icon: <Bike className="text-[#f5deb3] w-10 h-10 mt-1" />,
      image: fasilitas1,
    },
    {
      title: "Hunian Bebas Polusi",
      text: "Lingkungan asri dan rindang mendukung kehidupan yang lebih sehat, dengan infrastruktur ramah lingkungan.",
      icon: <Leaf className="text-[#f5deb3] w-10 h-10 mt-1" />,
      image: fasilitas2,
    },
    {
      title: "Keamanan 24 Jam",
      text: "Kami menyediakan sistem keamanan 24 jam yang profesional untuk memastikan kenyamanan dan ketenangan Anda.",
      icon: <ShieldCheck className="text-[#f5deb3] w-10 h-10 mt-1" />,
      image: fasilitas3,
    },
    {
      title: "Hunian Nyaman",
      text: "Menyediakan berbagai tipe properti dari standar hingga premium, dirancang untuk kenyamanan dan gaya hidup modern.",
      icon: <Home className="text-[#f5deb3] w-10 h-10 mt-1" />,
      image: fasilitas4,
    },
  ];

  return (
    <section
      id="location"
      className="bg-[#071b35] text-white py-20 px-6 md:px-16 font-sans scroll-smooth"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#f5deb3]" data-aos="fade-up">
          HomeLiving Banyuwangi
        </h2>
        <p
          className="mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Kami terletak di Banyuwangi dan menyediakan properti di seluruh wilayah Banyuwangi,
          dengan berbagai pilihan lokasi strategis dan fasilitas yang lengkap.
        </p>

        {data.map((item, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-16 items-center mb-20"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Gambar dengan ukuran tetap */}
            <div
              className={`${index % 2 === 0 ? "" : "md:order-2"}`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="w-full h-[300px] overflow-hidden rounded-lg shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Teks */}
            <div
              className={`text-left ${index % 2 === 0 ? "" : "md:order-1"}`}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            >
              <div className="flex items-start gap-4 mb-4">
                {item.icon}
                <div>
                  <h3 className="text-2xl font-bold text-[#f5deb3] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-300 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
