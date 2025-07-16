import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';

const KontakKami = () => {
  return (
    <div className="bg-[#0A1A2F] text-white px-6 py-16 space-y-20">
      {/* Alamat & Map */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-x-8 gap-y-12 items-start">
        {/* Informasi Kontak */}
        <div className="w-full md:w-1/2 space-y-6">
          <h3 className="text-2xl font-bold leading-tight text-[#f5deb3]">
            Kunjungi<br />Kantor Marketing Kami
          </h3>

          <div className="text-sm text-gray-300 space-y-4">
            <div>
              <p><strong>HomeLiving Banyuwangi</strong></p>
              <p>
                ID Lokasi: BYW1320132020T004<br />
                Rogojampi, Kec. Rogojampi<br />
                Kab. Banyuwangi, Jawa Timur
              </p>
            </div>
            <div>
              <p>Email:</p>
              <a href="mailto:homelivingbwi@example.com" className="underline">
                homelivingbwi@example.com
              </a>
            </div>

            {/* Ikon Sosial Media */}
            <div className="flex space-x-4 pt-2">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-[#f5deb3]">
                <FaWhatsapp />
              </a>
              <a href="https://instagram.com/homelivingbwi" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-[#f5deb3]">
                <FaInstagram />
              </a>
              <a href="https://facebook.com/homelivingbwi" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-[#f5deb3]">
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps?q=ADI+MAS+ROGOJAMPI,+Banyuwangi,+Indonesia&output=embed"
            width="100%"
            height="350"
            className="border-0 w-full rounded-md shadow-md"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Home Living Banyuwangi"
          ></iframe>
        </div>
      </div>

      {/* Formulir Kontak */}
      <div className="max-w-4xl mx-auto pt-12">
        <h5 className="text-xs tracking-widest text-[#f5deb3] uppercase mb-2">Leave a Message</h5>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">We Love to Hear from You</h2>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-[#112340] text-white border border-white focus:border-[#f5deb3] focus:ring-[#f5deb3] focus:ring-1 rounded-md placeholder:text-white/60"
          />
          <input
            type="text"
            placeholder="Nomor Telephone"
            className="w-full p-3 bg-[#112340] text-white border border-white focus:border-[#f5deb3] focus:ring-[#f5deb3] focus:ring-1 rounded-md placeholder:text-white/60"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-[#112340] text-white border border-white focus:border-[#f5deb3] focus:ring-[#f5deb3] focus:ring-1 rounded-md placeholder:text-white/60"
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="w-full p-3 bg-[#112340] text-white border border-white focus:border-[#f5deb3] focus:ring-[#f5deb3] focus:ring-1 rounded-md placeholder:text-white/60"
          ></textarea>

          <button
            type="submit"
            className="bg-[#f5deb3] text-[#071b35] px-6 py-2 rounded-full font-semibold uppercase text-sm hover:bg-white transition"
          >
            Submit →
          </button>
        </form>
      </div>
    </div>
  );
};

export default KontakKami;
