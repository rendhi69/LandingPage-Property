import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/logo.png";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/home" || location.pathname === "/";

  const linkBase = "transition hover:text-[#f5deb3] cursor-pointer";
  const activeClass = "text-[#f5deb3] font-bold";

  return (
    <header className="fixed top-0 left-0 right-0 text-white bg-[#071b35] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">

        {/* Menu kiri */}
        <nav className="flex items-center space-x-6 text-base font-semibold">
          {isHome ? (
            <>
              <ScrollLink to="home" spy smooth offset={-80} duration={500} className={linkBase} activeClass={activeClass}>Home</ScrollLink>
              <ScrollLink to="about" spy smooth offset={-80} duration={500} className={linkBase} activeClass={activeClass}>Tentang Kami</ScrollLink>
              <ScrollLink to="review" spy smooth offset={-80} duration={500} className={linkBase} activeClass={activeClass}>Testimoni</ScrollLink>
            </>
          ) : (
            <>
              <Link to="/home" className={`${linkBase} ${location.pathname === "/home" ? activeClass : ""}`}>Home</Link>
              <Link to="/home#about" className={linkBase}>Tentang Kami</Link>
              <Link to="/home#review" className={linkBase}>Testimoni</Link>
            </>
          )}
          <Link to="/daftarproduct" className={`${linkBase} ${location.pathname === "/daftarproduct" ? activeClass : ""}`}>Produk</Link>
        </nav>

        {/* Logo tengah */}
        <div className="absolute left-1/2 transform -translate-x-[42%] flex flex-col items-center space-y-1">
          {isHome ? (
            <ScrollLink to="home" smooth offset={-80} duration={500} className="flex flex-col items-center cursor-pointer">
              <img src={logo} alt="Logo" className="h-10 w-10 object-cover rounded-full shadow-md" />
              <span className="text-xs font-light tracking-wide mt-1 text-[#f5deb3]">HomeLiving Banyuwangi</span>
            </ScrollLink>
          ) : (
            <Link to="/home" className="flex flex-col items-center">
              <img src={logo} alt="Logo" className="h-10 w-10 object-cover rounded-full shadow-md" />
              <span className="text-xs font-light tracking-wide mt-1 text-[#f5deb3]">HomeLiving Banyuwangi</span>
            </Link>
          )}
        </div>

        {/* Menu kanan */}
        <nav className="flex items-center space-x-6 text-base font-semibold">
          <Link to="/location" className={`${linkBase} ${location.pathname === "/location" ? activeClass : ""}`}>Lokasi</Link>
          <Link to="/promo" className={`${linkBase} ${location.pathname === "/promo" ? activeClass : ""}`}>Promo</Link>
          <Link to="/layanan" className={`${linkBase} ${location.pathname === "/layanan" ? activeClass : ""}`}>Layanan</Link>
          <Link
            to="/hubungikami"
            className="px-4 py-1.5 rounded-full bg-[#f5deb3] text-[#071b35] font-semibold shadow-md hover:bg-white transition"
          >
            Hubungi Kami
          </Link>
        </nav>
      </div>
    </header>
  );
}
