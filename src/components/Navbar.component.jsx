import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/" },
    { name: "Portfolio", path: "/" },
    { name: "About", path: "/" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ✅ Scroll effect using window.scrollY
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 z-50 transition-all duration-500 py-8 md:py-8 ${
        isScrolled ? "bg-white/70 shadow-md backdrop-blur-md" : ""
      }`}
    >
      {/* Logo */}
      <a href="/" className="flex items-center gap-2">
        <div className="font-cursive text-[18px] font-normal">
          <span className={`${isScrolled ? "text-black" : "text-white"}`}>
            Soft
          </span>
          <span className="font-bold text-green-500">Flames</span>
        </div>
      </a>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8 text-black">
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            // className="group flex flex-col gap-0.5 text-[16px] text-gray-700 hover:text-gray-800 font-medium uppercase font-outfit"
            className={`group flex flex-col gap-0.5 text-[16px]  font-medium uppercase font-outfit ${
              isScrolled ? "text-gray-700 hover:text-gray-800" : "text-white"
            }`}
          >
            {link.name}
            <div className="bg-black h-0.5 w-0 group-hover:w-full transition-all duration-300" />
          </a>
        ))}
        <button
          className={`border  px-4 py-1 text-[14px] font-normal rounded-full cursor-pointer transition-all  ${
            isScrolled ? "border-black text-black" : "border-white text-white"
          }`}
        >
          New Launch
        </button>
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-6">
        <FaInstagram
          size={24}
          className={`cursor-pointer hover:text-gray-600 font-bold  ${
            isScrolled ? "text-black" : " text-white"
          }`}
        />
        <FaFacebook
          size={24}
          className={`cursor-pointer hover:text-gray-600 font-bold  ${
            isScrolled ? "text-black" : " text-white"
          }`}
        />
        <FaYoutube
          size={24}
          className={`cursor-pointer hover:text-gray-600 font-bold  ${
            isScrolled ? "text-black" : " text-white"
          }`}
        />
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="h-6 w-6 text-black cursor-pointer"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-black text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium transition-transform duration-500 ease-in-out z-40 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-6 w-6 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="text-black text-[16px]"
          >
            {link.name}
          </a>
        ))}

        <button className="border border-black px-4 py-1 text-[14px] font-medium rounded-full cursor-pointer transition-all">
          New Launch
        </button>

        <div className="flex items-center gap-6 pt-20">
          <FaInstagram
            size={24}
            className="cursor-pointer hover:text-gray-600 font-bold"
          />
          <FaFacebook
            size={24}
            className="cursor-pointer hover:text-gray-600 font-bold"
          />
          <FaYoutube
            size={24}
            className="cursor-pointer hover:text-gray-600 font-bold"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
