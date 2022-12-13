import TestimonyCard from "./TestimonyCard";
import { phone1, phone2 } from "../../../assets/img";
import { AppleIcon, GooglePlay } from "../../../assets/icons";

const Testimony = () => {
  return (
    <div id="testimony">
      <div className="darkbg pb-28">
        <h1 className="pt-16 text-white font-black text-center p-8 text-[32px] font-avenirBlack">
          Ulasan Pengguna
        </h1>
        <div className="flex my-6 justify-center">
          <TestimonyCard />
        </div>

        {/* Mobile App  */}
        <div className="flex w-[1202px] bg-white rounded-[64px] px-16 mx-auto mt-28">
          <div className="w-[700px]">
            <h1 className="w-[683px] text-primary-500 font-avenirBlack font-black text-5xl pt-20 mb-7 mr-0">
              Unduh Aplikasi OurGym Jalani Olahraga Impianmu
            </h1>
            <p className="w-[560px] text-primary-500 text-xl font-light mb-9 mr-0 font-avenir">
              Aplikasi ini memberikan beberapa pilihan Kelas Olahraga terbaik
              dengan Pelatih yang profesional dan peralatan terbaik. Dapatkan
              informasi menarik lainnya dalam aplikasi kami.
            </p>

            {/* Button Download */}
            <div className="flex ml-10 gap-6">
              <button className="flex bg-primary-500 text-white px-6 py-1 items-center rounded-[50px]">
                <AppleIcon className="mb-1 mr-2" />
                <div>
                  <h6 className="text-[11px] text-start font-avenir">Unduh di</h6>
                  <h4 className="font-avenirHeavy">Apple Store</h4>
                </div>
              </button>

              <button className="flex text-primary-500 border-2 border-primary-500 px-6 py-1 items-center rounded-[50px]">
                <GooglePlay className="w-7 mr-3" />
                <div>
                  <h6 className="text-[11px] text-start font-avenir">
                    Dapatkan dari
                  </h6>
                  <h4 className="font-avenirHeavy">Google Play</h4>
                </div>
              </button>
            </div>
          </div>

          {/* Phone */}
          <div className="flex">
            <img
              src={phone2}
              alt="OurGym Mobile App"
              className="w-60 object-contain relative top-14"
            />
            <img
              src={phone1}
              alt="OurGym Mobile App"
              className="w-60 object-contain relative top-14 right-5"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimony