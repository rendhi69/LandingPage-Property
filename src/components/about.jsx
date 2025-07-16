import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import about1 from '../assets/about/about1.jpg';
import about2 from '../assets/about/about2.jpg';
import about3 from '../assets/about/about3.png';

const slides = [
  {
    image: about1,
    title: "Tentang Kami",
    desc: "HomeLiving Banyuwangi mengusung konsep hunian yang bebas dari polusi, lebih sehat, dan lebih asri sehingga setiap penghuni merasakan kesejukan dan kenyamanan yang diberikan HomeLiving Banyuwangi."
  },
  {
    image: about2,
    title: "Kenyamanan & Fasilitas",
    desc: "Dengan fasilitas lengkap seperti taman hijau, playground, dan sistem keamanan 24 jam, kami hadirkan tempat tinggal ideal untuk keluarga Anda."
  },
  {
    image: about3,
    title: "Lokasi Strategis",
    desc: "Berlokasi di jantung kota Banyuwangi, dekat dengan sekolah, pusat belanja, dan akses transportasi utama."
  }
];

export default function About() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="about" className="bg-[#071b35] text-white py-24 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT: TITLE & DESCRIPTION */}
        <div data-aos="fade-right">
          <h4 className="text-sm tracking-widest text-[#f5deb3] mb-2 uppercase">
            Who We Are
          </h4>
          <h2 className="text-3xl md:text-5xl font-semibold leading-snug mb-6 text-[#f5deb3]">
            HomeLiving Banyuwangi <br />
            Living In A Modern <br /> International City
          </h2>
          <p className="text-white text-base leading-relaxed mb-10 max-w-xl">
            Sebuah kota modern di masa depan dengan hunian berkualitas, fasilitas lengkap dan lokasi paling strategis di Banyuwangi.
          </p>
        </div>

        {/* RIGHT: STATISTICS */}
        <div
          className="grid grid-cols-2 gap-x-6 gap-y-10 text-center lg:text-left"
          data-aos="fade-left"
        >
          {[
            { label: 'Total Pengembangan', value: '2,500', unit: 'Ha' },
            { label: 'Telah Dikembangkan', value: '1,100', unit: 'Ha' },
            { label: 'Cluster', value: '43' },
            { label: 'Kepala Keluarga', value: '13,000' },
          ].map((item, idx) => (
            <div key={idx}>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#f5deb3]">
                {item.value}{item.unit && <sup className="text-sm">{item.unit}</sup>}
              </h3>
              <p className="text-sm text-white mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CAROUSEL SECTION */}
      <div className="max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Gambar Fade */}
        <div className="relative w-full h-[300px] md:h-[400px]" data-aos="fade-up">
          {slides.map((slide, i) => (
            <img
              key={i}
              src={slide.image}
              alt={slide.title}
              className={`absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg transition-opacity duration-700 ease-in-out ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            />
          ))}
        </div>

        {/* Deskripsi + Tombol Vertikal */}
        <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4" data-aos="fade-left">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[#f5deb3]">{slides[index].title}</h3>
            <p className="text-white text-sm leading-relaxed mt-2">
              {slides[index].desc}
            </p>
          </div>

          {/* Tombol Next/Prev */}
          <div className="flex flex-col space-y-2 justify-center">
            <button
              onClick={handleNext}
              className="w-10 h-10 bg-[#c7ad8e] text-white rounded-sm text-lg hover:opacity-90 transition"
              aria-label="Next"
            >
              &gt;
            </button>
            <button
              onClick={handlePrev}
              className="w-10 h-10 bg-[#c7ad8e] text-white rounded-sm text-lg hover:opacity-90 transition"
              aria-label="Previous"
            >
              &lt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
