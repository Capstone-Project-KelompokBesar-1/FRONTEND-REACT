import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

const LandingNavbar = () => {
  return (
    <div>
      <nav className="container darkbg w-full h-16 fixed -mt-16 z-10">
        <ul className="flex mx-14 h-16 items-center">
          <li className="font-avenirHeavy text-primary-500 text-2xl mr-6">
            <AnchorLink href="#hero">OurGym</AnchorLink>
          </li>
          <li className="menu-nav-landing">
            <AnchorLink href="#hero">Beranda</AnchorLink>
          </li>
          <li className="menu-nav-landing">
            <AnchorLink href="#aboutus">Tentang Kami</AnchorLink>
          </li>
          <li className="menu-nav-landing">
            <AnchorLink href="#testimony">Ulasan</AnchorLink>
          </li>
          <li className="menu-nav-landing">
            <AnchorLink href="#contact">Kontak</AnchorLink>
          </li>
          <li>
            <Link to="/login">
              <button className="bg-primary-500 text-white h-9 text-sm w-24 rounded absolute right-16 top-4">
                Masuk
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LandingNavbar;
