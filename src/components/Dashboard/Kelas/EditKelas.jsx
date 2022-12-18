import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDatas, setEdit } from "../../../redux/gymSlice";
import APIClient from "../../../apis/APIClient";

import { Link, useNavigate } from "react-router-dom";
import { TambahDataRed } from "../../../assets/icons";

const EditKelas = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.gym.edit);
  const categories = useSelector((state) => state.gym.categories);
  const navigate = useNavigate();

  const baseData = {
    name: state.gymClass,
    type: state.classType,
    category_id: state.classCategory,
    price: state.price,
    description: state.description,
    total_meeting: state.total_meeting,
    thumbnail: "https://",
  };
  const [data, setData] = useState(baseData);

  useEffect(() => {
    setData(baseData);

    return () => {
      dispatch(setEdit([]));
    };
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
    if (
      !data.name ||
      !data.type ||
      !data.category_id ||
      !data.price ||
      !data.description ||
      !data.total_meeting ||
      !data.thumbnail
    ) {
      alert("Data tidak boleh kosong");
    } else {
      try {
        e.preventDefault();
        // add content-type json & charset=UTF-8 to header
        await APIClient.put(`/classes/${state.id}`, data);

        dispatch(fetchDatas({ url: "/classes", state: "classes" }));
        dispatch(setEdit([]));
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
          PERUBAHAN DATA KELAS
        </h1>
        <div className="flex justify-between mb-6">
          <p>Kelas &gt; Ubah Data</p>
          <p>Rabu, 30 November 2022</p>
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
                <label htmlFor="category">Kategori Kelas</label>
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
                id="type"
                type="number"
                name="category_id"
                className="w-[523px] h-12 ml-12 mb-2 border rounded-lg p-2 capitalize"
                value={data.category_id}
                onChange={handleNumberEdit}
              >
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
                value={data.trainer_id}
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
              <button
                className="w-28 h-14 bg-white text-primary-500 font-avenirBlack rounded-lg mr-4 border border-primary-500 shadow-md"
                onClick={() => dispatch(setEdit([]))}
              >
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

export default EditKelas;
