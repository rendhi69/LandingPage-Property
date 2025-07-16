import React from "react";
import Hero from "../components/hero";
import About from "../components/about";
import Review from "../components/review";

export default function Home() {
  return (
    <div className="bg-[#071b35]">
      {/* Tambahkan jarak dari header (tinggi header = 80px → pt-20) */}
      <div className="pt-13">
        <Hero />
        <About />
        <Review />
      </div>
    </div>
  );
}
