import "./testimony.css";

const TestimonyCard = () => {
  return (
    <div className="w-88 text-center rounded-lg bg-white mx-3">
      <div className="flex flex-col justify-center items-center pb-6">
        <img
          src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
          alt="Avatar"
          className="rounded-full w-36 h-36 mb-4 mt-6"
        />
        <h4 className="font-black text-lg font-avenirHeavy text-gr leading-6">
          Syafira Mawar
        </h4>
        <p className="w-88 text-center my-2 mx-2 leading-5 font-inter">
          “Aplikasi ini sangat membantu saya menurunkan berat badan dan membuat
          saya menjadi semangat untuk berolahraga. Selain itu saya juga
          mendapatkan PT yang sangat membantu saya dalam progres diet ini”
        </p>
      </div>
    </div>
  );
};

export default TestimonyCard;
