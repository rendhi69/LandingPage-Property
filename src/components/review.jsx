import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import user1 from '../assets/daftar review/user1.jpg';
import user2 from '../assets/daftar review/user2.jpg';
import user3 from '../assets/daftar review/user3.jpg';

// Data review
const reviews = [
  {
    name: 'Andi Prasetyo',
    photo: user1,
    comment:
      'Hunian ini benar-benar nyaman dan strategis. Anak-anak betah dan akses ke fasilitas umum sangat mudah.',
  },
  {
    name: 'Sinta Dewi',
    photo: user2,
    comment:
      'Desain rumahnya modern dan fungsional. Cocok sekali untuk keluarga muda seperti kami.',
  },
  {
    name: 'Budi Santoso',
    photo: user3,
    comment:
      'Proses pembelian sangat mudah dan developer sangat membantu. Recommended!',
  },
];

export default function Review() {
  // Inisialisasi AOS saat komponen dimount
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="review"
      className="bg-[#071b35] text-white py-24 px-6 md:px-16 font-sans"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2
          className="text-3xl md:text-5xl font-semibold text-[#f5deb3] mb-4"
          data-aos="fade-down"
        >
          Apa Kata Mereka
        </h2>
        <p
          className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto"
          data-aos="fade-up"
        >
          Beberapa testimoni dari pelanggan kami yang telah menemukan hunian impian mereka bersama kami.
        </p>
      </div>

      {/* Review Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {reviews.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#122b4d] rounded-lg p-8 text-center shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay={idx * 150}
          >
            <img
              src={item.photo}
              alt={item.name}
              className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-[#f5deb3] mb-4 transition-transform duration-300 hover:rotate-3"
            />
            <h4 className="text-lg font-semibold text-[#f5deb3] mb-2">
              {item.name}
            </h4>
            <p className="text-sm text-gray-300 italic">"{item.comment}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
