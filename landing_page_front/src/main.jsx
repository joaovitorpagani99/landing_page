import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/HomePage";
import ContactPage from "./pages/Contact/ContactPage";

import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import PageLoader from "./components/Loading/PageLoader";

import "./index.css";
import Sobre from "./pages/Sobre/Sobre";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <PageLoader>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
        <Footer />
      </PageLoader>
    </BrowserRouter>
  </StrictMode>
);
