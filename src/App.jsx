import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Provmanu from "./components/Provmanu";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoUrl =
    "https://dummyimage.com/120x40/2563eb/ffffff&text=WANG+TECH";

  return (
    <div className="font-sans text-slate-800">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/wang-technology-logo.png"
              alt="Wang Technology Logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-lg font-medium">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#product-manu" className="hover:text-blue-600">
              Product Manu
            </a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-sm">
            <nav className="flex flex-col px-4 py-4 space-y-3 text-sm font-medium">
              <a href="#home" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
              <a href="#services" onClick={() => setIsMenuOpen(false)}>
                Services
              </a>
              <a href="#provide-manu" onClick={() => setIsMenuOpen(false)}>
                Product Manu
              </a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* ================= MAIN SECTIONS ================= */}
      <main>
        <Home />
        <About />
        <Services />
        <Provmanu />
        <Contact />
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-800 text-slate-300 py-6 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center text-center md:justify-between md:text-left gap-4">
          {/* Left: Logo */}
          <div className="flex justify-center items-center">
            <img
              src="/wang-technology-logo.png"
              alt="Wang Technology Logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Right: Copyright */}
          <p className="text-lg text-slate-300">
            © {new Date().getFullYear()} Wang Technology. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}


