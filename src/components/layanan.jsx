import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import layanan1 from "../assets/layanan/layanan1.png"; // clean environment
import layanan2 from "../assets/layanan/layanan2.jpg"; // drainage
import layanan3 from "../assets/layanan/layanan3.png"; // access card
import layanan4 from "../assets/layanan/layanan4.png"; // security

import { Leaf, TreePalm, CreditCard, ShieldCheck } from "lucide-react";

export default function Layanan() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const layananList = [
    {
      title: "Clean Environment",
      desc: "HomeLiving Banyuwangi menjaga kebersihan dan keasrian lingkungan. Didukung dengan drainase bawah tanah untuk memastikan kebutuhan air bersih terpenuhi.",
      icon: <Leaf className="text-[#f5deb3] w-10 h-10 mt-1" />,
      image: layanan1,
    },
    {
      title: "Drainage System",
      desc: "Sistem drainase bawah tanah dirancang untuk memberikan kenyamanan saat hujan tanpa gangguan, serta mendukung sanitasi yang baik.",
      icon: <TreePalm className="text-[#f5deb3] w-10 h-10 mt-1" />,
      image: layanan2,
    },
    {
      title: "Access Card",
      desc: "Tersedia akses kartu pintar untuk penghuni terdaftar guna menjaga keamanan dan mencegah tindakan yang tidak diinginkan.",
      icon: <CreditCard className="text-[#f5deb3] w-10 h-10 mt-1" />,
      image: layanan3,
    },
    {
      title: "Secure Environment",
      desc: "Kami menghadirkan sistem keamanan 24 jam dengan petugas siaga dan CCTV untuk menjamin kenyamanan Anda dan keluarga.",
      icon: <ShieldCheck className="text-[#f5deb3] w-10 h-10 mt-1" />,
      image: layanan4,
    },
  ];

  return (
    <section className="bg-[#071b35] text-white py-20 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className="text-3xl md:text-5xl font-bold mb-10 text-[#f5deb3]"
          data-aos="fade-up"
        >
          Layanan Kami
        </h2>

        {layananList.map((item, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-16 items-center mb-20"
            data-aos="fade-up"
          >
            {/* Gambar dengan ukuran seragam */}
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
              <div className="flex items-start gap-4">
                {item.icon}
                <div>
                  <h3 className="text-2xl font-bold text-[#f5deb3] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-300 leading-relaxed">
                    {item.desc}
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
