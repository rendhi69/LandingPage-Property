import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Gallery imports
const rumah1Gallery = Object.values(
  import.meta.glob("../assets/daftar property/rumah/rumah1/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  })
);
const apartemenGallery = Object.values(
  import.meta.glob("../assets/daftar property/apartement/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  })
);
const perumahanGallery = Object.values(
  import.meta.glob("../assets/daftar property/perumahan/perumahan1/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  })
);

// Product data
const products = [
  {
    slug: "perumahan",
    title: "Perumahan",
    types: [
      {
        name: "Tipe A - 60/90",
        price: "Rp 520.000.000",
        desc: "Tipe standar cocok untuk keluarga kecil.",
        lokasi: "Banyuwangi Kota",
        luas: "60 m²",
        kamar: 2,
        toilet: 1,
        fasilitas: ["Taman Depan", "Carport"],
        images: perumahanGallery,
      },
      {
        name: "Tipe B - 80/100",
        price: "Rp 650.000.000",
        desc: "Lebih luas dengan halaman belakang.",
        lokasi: "Banyuwangi Kota",
        luas: "80 m²",
        kamar: 3,
        toilet: 2,
        fasilitas: ["Taman Belakang", "Carport", "Balkon"],
        images: perumahanGallery,
      },
    ],
  },
  {
    slug: "apartemen",
    title: "Apartemen",
    types: [
      {
        name: "Tipe C - 36/72",
        price: "Rp 210.000.000",
        desc: "Rumah sederhana dengan 2 kamar tidur.",
        lokasi: "Glagah, Banyuwangi",
        luas: "36 m²",
        kamar: 2,
        toilet: 1,
        fasilitas: ["Halaman", "Akses Jalan Kampung"],
        images: apartemenGallery,
      },
      {
        name: "Tipe D - 36/72",
        price: "Rp 400.000.000",
        desc: "Rumah sederhana dengan 2 kamar tidur.",
        lokasi: "Glagah, Banyuwangi",
        luas: "36 m²",
        kamar: 2,
        toilet: 1,
        fasilitas: ["Halaman", "Akses Jalan Kampung"],
        images: apartemenGallery,
      },
    ],
  },
  {
    slug: "rumah-pribadi",
    title: "Rumah Pribadi",
    types: [
      {
        name: "Tipe Premium A",
        price: "Rp 950.000.000",
        desc: "Modern Classic Tahap Pembangunan (Free Custom Layout)",
        lokasi: "Genteng, Banyuwangi",
        luas: "79 - 82 m²",
        kamar: 4,
        toilet: 4,
        fasilitas: ["Garasi", "Taman", "Balkon"],
        images: rumah1Gallery,
      },
      {
        name: "Tipe Premium B",
        price: "Rp 1.050.000.000",
        desc: "Rumah Pribadi Tingkat 2 dengan Rooftop View",
        lokasi: "Rogojampi, Banyuwangi",
        luas: "90 m²",
        kamar: 5,
        toilet: 3,
        fasilitas: ["Garasi", "Taman", "Rooftop", "Gudang"],
        images: rumah1Gallery,
      },
    ],
  },
];

export default function DetailProduct() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);
  const [selectedType, setSelectedType] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  if (!product) {
    return (
      <div className="text-white py-24 px-6 text-center bg-[#071b35]">
        <h2 className="text-3xl font-bold mb-4">Tipe rumah tidak ditemukan</h2>
        <Link to="/daftarproduct" className="text-[#f5deb3] underline">
          Kembali ke daftar produk
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-[#071b35] text-white py-20 px-6 md:px-16 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center items-center flex-col mb-12" data-aos="fade-down">
          <h2 className="text-4xl font-extrabold text-white text-center relative inline-block after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[#f5deb3] after:left-1/2 after:-translate-x-1/2 after:-bottom-2">
            {product.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {product.types.map((type, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-[#0f2a4a] rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.03]"
            >
              <div className="group aspect-[16/9] w-full overflow-hidden rounded-t-2xl">
                <img
                  src={type.images[0]}
                  alt={type.name}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-95"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#f5deb3]">{type.name}</h4>
                <p className="text-sm text-gray-300 mt-1">{type.desc}</p>
                <p className="text-xs text-gray-400 mt-1">Lokasi: {type.lokasi}</p>
                <p className="text-lg font-bold mt-4">{type.price}</p>
                <button
                  onClick={() => {
                    setSelectedType(type);
                    setMainImage(type.images[0]);
                  }}
                  className="mt-4 px-4 py-2 bg-[#f5deb3] text-[#071b35] font-semibold rounded-full shadow hover:bg-white transition"
                >
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/daftarproduct"
            className="inline-block px-6 py-2 bg-[#f5deb3] text-[#071b35] font-semibold rounded-full shadow hover:bg-white transition"
          >
            Kembali ke Daftar Produk
          </Link>
        </div>
      </div>

      {selectedType && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4">
          <div className="relative max-w-3xl w-full bg-white rounded-xl shadow-2xl overflow-hidden">
            <button
              className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-red-500 transition"
              onClick={() => setSelectedType(null)}
            >
              &times;
            </button>

            <div className="md:flex">
              <div className="md:w-1/2 p-4 bg-white">
                <div className="aspect-[16/9] w-full overflow-hidden rounded-lg mb-4 shadow-md">
                  <img
                    src={mainImage}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex gap-2 mb-2 flex-wrap">
                  {selectedType.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      onClick={() => setMainImage(img)}
                      className={`h-16 w-24 object-cover rounded cursor-pointer border-2 ${
                        img === mainImage ? "border-[#f5deb3]" : "border-transparent"
                      } hover:scale-105 transition`}
                      alt={`thumb-${i}`}
                    />
                  ))}
                </div>
              </div>

              <div className="md:w-1/2 p-6 bg-[#0f2a4a] text-white rounded-b-xl md:rounded-r-xl md:rounded-bl-none">
                <h4 className="text-2xl font-bold mb-2 text-[#f5deb3]">{selectedType.name}</h4>
                <p className="text-sm mb-3 italic text-gray-300">{selectedType.desc}</p>
                <ul className="text-sm space-y-1">
                  <li><strong>Lokasi:</strong> {selectedType.lokasi}</li>
                  <li><strong>Luas Bangunan:</strong> {selectedType.luas}</li>
                  <li><strong>Kamar:</strong> {selectedType.kamar}</li>
                  <li><strong>Toilet:</strong> {selectedType.toilet}</li>
                  <li><strong>Fasilitas:</strong> {selectedType.fasilitas.join(", ")}</li>
                </ul>

                <p className="text-lg font-bold mt-6 bg-[#f5deb3] inline-block px-4 py-2 rounded-full text-[#071b35]">
                  {selectedType.price}
                </p>

                <div className="mt-4">
                  <Link
                    to="/hubungikami"
                    className="inline-block bg-[#f5deb3] text-[#071b35] px-4 py-2 rounded-full font-semibold hover:bg-white transition"
                  >
                    Hubungi Kami
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
