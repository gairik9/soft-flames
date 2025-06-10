import React from "react";

const Footer = () => {
  return (
    <footer className="mt-40 px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div className="md:max-w-[40rem]">
          <a href="/" className="flex items-center gap-2">
            <div className="font-cursive text-[18px] font-normal">
              <span className="text-black">Soft</span>
              <span className="font-bold text-green-500">Flames</span>
            </div>
          </a>
          <p className="mt-6 text-[14px] font-outfit">
            At SoftFlames, we believe in crafting more than just candles — we
            create moments of calm, comfort, and connection. Each product is
            hand-poured with care, using premium ingredients and unique
            fragrances to turn any space into a sanctuary. Light up your
            everyday with warmth and intention.
          </p>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-gray-800 text-[16px]">
              Company
            </h2>
            <ul className="text-[14px] space-y-2 font-medium">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5 text-gray-800 text-[16px]">
              Get in touch
            </h2>
            <div className="text-[14px] space-y-2 font-medium">
              <p>+91-7896190684</p>
              <p>softflames@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-[14px] space-y-2 font-medium pb-5">
        Copyright 2025 © SoftFlames. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
