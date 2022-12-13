import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

const LandingNavbar = () => {
  return (
    <div>
      <nav className="darkbg w-full h-16 fixed -mt-16 z-10 flex justify-between">
        <div className="flex">
          <AnchorLink
            href="#hero"
            className="font-avenirBlack text-primary-500 text-2xl mx-6 text-center flex justify-center items-center"
          >
            OurGym
          </AnchorLink>
          <ul className="flex mx-14 h-16 items-center">
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
          </ul>
        </div>

        <Link to="/login">
          <button className="bg-primary-500 text-white h-9 text-sm w-24 rounded mt-4 mr-16">
            Masuk
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default LandingNavbar;
