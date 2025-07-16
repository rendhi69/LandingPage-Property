import { BrowserRouter, Route, Routes } from "react-router-dom";

// Layouts
import PublicLayout from "./layouts/public";

// Pages & Components
import Home from "./pages";
import DaftarProduct from "./components/daftarproduct";
import DetailProduct from "./components/detailproduct";
import Location from "./components/location";
import Layanan from "./components/layanan";
import Promo from "./components/promo";
import HubungiKami from "./components/hubungikami";

// 🆕 (Jika nanti ingin tambah halaman baru seperti About, Contact, dll tinggal import di sini)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Semua halaman publik menggunakan PublicLayout */}
        <Route element={<PublicLayout />}>
          {/* Halaman utama */}
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />

          {/* Halaman daftar dan detail produk */}
          <Route path="/daftarproduct" element={<DaftarProduct />} />
          <Route path="/daftarproduct/:slug" element={<DetailProduct />} />

          {/* Halaman lokasi properti */}
          <Route path="/location" element={<Location />} />
          {/* 🆕 Tambahkan halaman lain di sini jika diperlukan */}
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/promo" element={<Promo />} />
          <Route path="/hubungikami" element={<HubungiKami />} />
        </Route>



        {/* Jika nanti ada halaman login, register, dashboard admin, dsb bisa ditaruh di luar layout */}
        {/* <Route path="/login" element={<Login />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
