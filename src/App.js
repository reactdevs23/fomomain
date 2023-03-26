import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/global/navbar/footer/Footer";
import Menu from "./components/global/navbar/Navbar";
import Home from "./components/pages/Home/Home";
import BuyMagazine from "./components/pages/BuyMagazine/BuyMagazine";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "swiper/css";
import "swiper/css/pagination";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/buyMagazine" element={<BuyMagazine />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
