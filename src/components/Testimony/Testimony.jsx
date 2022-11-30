import TestimonyCard from "./TestimonyCard";

import { phone1, phone2 } from "../../assets/pics";

const Testimony = () => {
  return (
    <div className="dark pb-28">
      <h1 className="pt-16 text-white font-black text-center p-8 text-3xl font-avenirHeavy">
        Ulasan Pengguna
      </h1>
      <div className="flex my-6 justify-center">
        <TestimonyCard />
        <TestimonyCard />
        <TestimonyCard />
      </div>

      {/* Mobile App  */}
      <div className="w-8/12 bg-white frame px-16 mx-auto flex">
        <div className="w-3/5">
          <h1 className="w-11/12 text-primary-500 font-righteous text-5xl pt-20 mb-7 mr-0">
            Unduh Aplikasi OurGym Jalani Olahraga Impianmu
          </h1>
          <p className="w-10/12 text-primary-500 text-xl font-light mb-9 mr-0 font-sourceSansPro">
            Aplikasi ini memberikan beberapa pilihan Kelas Olahraga terbaik
            dengan Pelatih yang profesional dan peralatan terbaik. Dapatkan
            informasi menarik lainnya dalam aplikasi kami.
          </p>

          {/* Button Download */}
          <div className="flex ml-10 gap-6">
            <button className="appbtn flex bg-primary-500 text-white px-6 py-2">
              <i className="w-5 h-6 p-5">A</i>
              <div>
                <h6 className="text-xs text-start">Unduh di</h6>
                <h4 className="font-semibold">Apple Store</h4>
              </div>
            </button>

            <button className="appbtn flex text-primary-500 border-2 border-primary-500 px-6 py-2">
              <i className="w-5 h-6 p-5">G</i>
              <div>
                <h6 className="text-xs text-start">Dapatkan dari</h6>
                <h4 className="font-semibold">Google Play</h4>
              </div>
            </button>
          </div>
        </div>

        {/* Phone */}
        <div className="flex">
          <img
            src={phone2}
            alt="OurGym Mobile App"
            className="w-60 object-contain relative top-14 left-5"
          />
          <img
            src={phone1}
            alt="OurGym Mobile App"
            className="w-60 object-contain relative top-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimony;
