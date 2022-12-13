import { review1, review2, review3 } from "../../../assets/img";

const TestimonyCard = () => {
  return (
    <>
      <div className="w-88 text-center rounded-lg bg-white mx-3">
        <div className="flex flex-col justify-center items-center">
          <img
            src={review1}
            alt="Avatar"
            className="rounded-full w-36 h-36 mb-4 mt-6"
          />
          <h4 className="font-black text-lg font-avenirHeavy leading-6">
            Syafira Mawar
          </h4>
          <p className="w-88 text-center my-2 mx-2 leading-6 font-avenir p-2">
            “Aplikasi ini sangat membantu saya menurunkan berat badan dan
            membuat saya menjadi semangat untuk berolahraga. Selain itu saya
            juga mendapatkan PT yang sangat membantu saya dalam progres diet
            ini”
          </p>
        </div>
      </div>
      <div className="w- text-center rounded-lg bg-white mx-3">
        <div className="flex flex-col justify-center items-center pb-6">
          <img
            src={review2}
            alt="Avatar"
            className="rounded-full w-36 h-36 mb-4 mt-6"
          />
          <h4 className="font-black text-lg font-avenirHeavy leading-6">
            Saiful Anwar
          </h4>
          <p className="w-88 text-center my-2 mx-2 leading-6 font-avenir p-2">
            “Aplikasinya mempermudah kita yang tidak punya waktu ke gym, sehinga
            kita dapat olahraga kapan saja dan dimanapun sesuai keinginan yang
            kita mau”
          </p>
        </div>
      </div>
      <div className="w-88 text-center rounded-lg bg-white mx-3">
        <div className="flex flex-col justify-center items-center pb-6">
          <img
            src={review3}
            alt="Avatar"
            className="rounded-full w-36 h-36 mb-4 mt-6"
          />
          <h4 className="font-black text-lg font-avenirHeavy leading-6">
            Amrulloh
          </h4>
          <p className="w-88 text-center my-2 mx-2 leading-6 font-avenir p-2">
            “Aplikasi ini sangat membantu saya bisa olahraga dimana saja. sangat
            recomendet bangetttt. ini aplikasi terbaik di 2022 haruss banget di
            instal ”
          </p>
        </div>
      </div>
    </>
  );
};

export default TestimonyCard;