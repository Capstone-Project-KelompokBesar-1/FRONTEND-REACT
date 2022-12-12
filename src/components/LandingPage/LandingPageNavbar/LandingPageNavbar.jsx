import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="container bg-web-webPrimary w-full h-16 fixed -mt-16">
        <ul className="flex mx-14 h-16 items-center">
          <li className="font-avenirHeavy text-primary-500 text-2xl mr-6">
            OurGym
          </li>
          <li className="menu-nav-landing">
            <Link>Beranda</Link>
          </li>
          <li className="menu-nav-landing">
            <Link>Tentang Kami</Link>
          </li>
          <li className="menu-nav-landing">
            <Link>Ulasan</Link>
          </li>
          <li className="menu-nav-landing">
            <Link>Kontak</Link>
          </li>
          <li>
            <Link>
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

export default Navbar;
