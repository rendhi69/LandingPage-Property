import React, { useEffect, useState } from "react";
import hero1 from "../assets/patung.jpeg";
import hero2 from "../assets/taman.jpg";
import hero3 from "../assets/view-rumah.jpg";

const slides = [
  {
    image: hero1,
    title: "Welcome To HomeLiving Banyuwangi",
    desc: "A place where modern living meets natural beauty.",
  },
  {
    image: hero2,
    title: "Konsep Dan Fasilitas Lengkap",
    desc: "Menyediakan Hunian yang Asri, Aman dan Nyaman Dengan Banyak Pilihan",
  },
  {
    image: hero3,
    title: "Lokasi Strategis",
    desc: "Tersebar di Jantung Kota Banyuwangi, Dekat dengan Sekolah, Pusat Belanja dan Akses Transportasi Utama.",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setFade(true);
      }, 300);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section
      id="home"
      className="relative w-full h-screen pt-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background Gambar */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={`slide-${index}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-[2000ms] ease-in-out 
              ${index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-100"}
            `}
          />
        ))}
        <div className="absolute inset-0 bg-[#071b35]/70" />
      </div>

      {/* Konten Teks */}
      <div className="relative z-10 w-full max-w-5xl px-4 text-center text-white transition-all duration-700">
        <h1
          className={`mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl leading-tight transition-all duration-700 
            ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        >
          {currentSlide.title}
        </h1>
        <p
          className={`mx-auto mb-8 max-w-2xl text-lg transition-all duration-700
            ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        >
          {currentSlide.desc}
        </p>
      </div>

      {/* Ikon Scroll */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <a href="#about" className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white hover:text-[#f5deb3] transition"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
