import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDatas } from "../../../redux/gymSlice";
import APIClient from "../../../apis/APIClient";

import { Link, useNavigate } from "react-router-dom";
import { TambahDataRed } from "../../../assets/icons";
import Swal from "sweetalert2";
import moment from "moment";

const CreateKelas = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categories = useSelector((state) => state.gym.categories);
  // console.log(categories[0].name);

  const baseData = {
    name: "",
    type: "",
    category_id: "",
    price: "",
    description: "",
    total_meeting: "",
    thumbnail: "https://",
  };
  const [data, setData] = useState(baseData);

  useEffect(() => {
    console.log(data);
    setData(baseData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEdit = (e) => {
    setData((data) => {
      return { ...data, [e.target.name]: e.target.value };
    });
  };

  const handleNumberEdit = (e) => {
    setData((data) => {
      return { ...data, [e.target.name]: parseInt(e.target.value) };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !data.name ||
      !data.type ||
      !data.category_id ||
      !data.price ||
      !data.description ||
      !data.total_meeting
    ) {
      return Swal.fire("Incomplete", "Lengkapi seluruh data terlebih dahulu sebelum melakukan submit!", "warning");
    } else {
      try {
        // add content-type json & charset=UTF-8 to header
        await APIClient.post(`/classes`, data);
        Swal.fire("Submitted", "Data kelas baru berhasil dibuat!", "success");
        dispatch(fetchDatas({ url: "/classes", state: "classes" }));
        navigate("/kelas");
      } catch (error) {
        console.log(error);
      }
    }
  };
  console.log(data);

  return (
    <form className="ml-[292px] pt-[124px] mr-9" onSubmit={handleSubmit}>
      <div>
        <h1 className="font-avenirBlack text-black text-[40px]">
          TAMBAH KELAS BARU
        </h1>
        <div className="flex justify-between mb-6">
          <p>Kelas &gt; Ubah Data</p>
          <p>{moment().format("dddd[,] D MMMM YYYY")}</p>
        </div>

        <div className="border rounded-2xl px-4 py-6">
          {/* Label, Input, & img */}
          <div className="main flex">
            <div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="name">Nama Kelas</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="type">Jenis Kelas</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="category_id">Kategori Kelas</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="price">Harga</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-[105px]">
                <label htmlFor="description">Deskripsi</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="meet">Jumlah Pertemuan</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="trainer">Pelatih</label>
              </div>
            </div>

            <div className="flex flex-col">
              <input
                id="name"
                type="text"
                name="name"
                className="w-[523px] h-12 ml-12 mb-2 border rounded-lg p-2"
                value={data.name}
                onChange={handleEdit}
              />
              <select
                id="type"
                type="text"
                name="type"
                className="w-[523px] h-12 ml-12 mb-2 border rounded-lg p-2"
                value={data.type}
                onChange={handleEdit}
              >
                <option value="">-- Pilih Jenis Kelas --</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>

              <select
                id="category_id"
                type="number"
                name="category_id"
                className="w-[523px] h-12 ml-12 mb-2 border rounded-lg p-2 capitalize"
                value={data.category_id}
                onChange={handleNumberEdit}
              >
                <option value="">-- Pilih Kategori Kelas --</option>
                {categories.map((item) => (
                  <option value={item.id} className="capitalize">
                    {item.name}
                  </option>
                ))}
              </select>

              <input
                id="price"
                type="text"
                pattern="[0-9]*"
                name="price"
                className="w-[523px] h-12 ml-12 mb-2 border rounded-lg p-2"
                value={data.price}
                onChange={handleNumberEdit}
              />
              <textarea
                id="description"
                type="text"
                name="description"
                className="w-[523px] h-[145px] ml-12 mb-2 border rounded-lg p-2 resize-none"
                value={data.description}
                onChange={handleEdit}
              />
              <input
                id="meet"
                type="number"
                name="total_meeting"
                className="w-[523px] h-12 ml-12 mb-2 border rounded-lg p-2"
                value={data.total_meeting}
                onChange={handleNumberEdit}
              />

              <select
                id="trainer"
                name="trainer_id"
                className="w-[523px] h-12 ml-12 mb-2 border rounded-lg p-2"
                value={data.gender}
                onChange={handleNumberEdit}
              >
                <option value="">-- Pilih Trainer --</option>
                <option value={1}>Randi</option>
                <option value={2}>Rian</option>
                <option value={3}>Milla</option>
              </select>
            </div>

            <div className="flex flex-col ml-10">
              <label htmlFor="meet" className="font-avenirHeavy mb-3">
                Thumbnail
              </label>
              <button className="text-primary-500 border-[3px] border-primary-500 w-[318px] h-[40px] flex py-4 px-8 font-avenirBlack items-center justify-center rounded-lg">
                <TambahDataRed className="w-3 h-3 inline-block mr-3" />{" "}
                Tambahkan File
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-20 flex justify-end">
            <Link to="/kelas">
              <button className="w-28 h-14 bg-white text-primary-500 font-avenirBlack rounded-lg mr-4 border border-primary-500 shadow-md">
                Batal
              </button>
            </Link>
            <button
              className="w-52 h-14 bg-primary-500 text-white font-avenirBlack rounded-lg shadow-md"
              type="submit"
            >
              Simpan Perubahan
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateKelas;
