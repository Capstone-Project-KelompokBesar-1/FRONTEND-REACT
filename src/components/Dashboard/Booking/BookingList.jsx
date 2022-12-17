import { useDispatch, useSelector } from "react-redux";
import { setEdit, deleteData, fetchDatas } from "../../../redux/gymSlice";
import { useState } from "react";
import { Link } from "react-router-dom";

import { EditIcon, DeleteIcon } from "../../../assets/icons";
import { BiCheckboxSquare, BiCheckbox } from "react-icons/bi";

const BookingList = ({ id, date, amount, method, status }) => {
  const statusCheck = () => {
    if (status === "tertunda") {
      return "text-warning";
    } else if (status === "berhasil") {
      return "text-success-500";
    } else if (status === "gagal") {
      return "text-primary-500";
    }
  };

  // Kode Paujul //

  const dispatch = useDispatch();
  const edit = useSelector((state) => state.gym.edit);
  const [checked, setChecked] = useState(false);

  const checkItem = () => {
    if (edit.includes(id)) {
      dispatch(setEdit(edit.filter((item) => item !== id)));
    } else {
      dispatch(setEdit([...edit, id]));
    }
    setChecked(!checked);
  };

  const handleDelete = () => {
    dispatch(setEdit([]));
    // ntar tambahin swal trs kl Yes pake kode bawah ini
    dispatch(deleteData({ url: "/transactions", type: "one", id }));

    setTimeout(() => {
      dispatch(fetchDatas({ url: "/transactions", state: "transactions" }));
    }, 1000);
  };

  // Kode Paujul end //

  return (
    <tbody className="font-avenirHeavy text-web-dark border-t">
      <tr>
        <td className="py-4 px-4 text-3xl">
          <div onClick={checkItem}>
            {edit.includes(id) ? <BiCheckboxSquare /> : <BiCheckbox />}
          </div>
        </td>
        <td className="py-4 px-6">{id}</td>
        <td className="py-4 px-6 text-center">
          {date.toString().substring(0, 10)} <br /> {date.match(/\d\d:\d\d/)}{" "}
          WIB
        </td>
        <td className="py-4 px-6">Rp{amount}</td>
        <td className="py-4 px-6 capitalize">{method}</td>
        <td className={`py-4 px-6 font-avenirBlack ${statusCheck()} uppercase`}>
          {status}
        </td>
        <td className="py-4 px-6 text-center">
          <Link
            to="/booking/edit"
            className="p-2 bg-info-700 w-10 rounded-[3px] inline-block mr-3"
          >
            <EditIcon className="w-6 h-6 inline-block" fill="white" />
          </Link>
          <div
            className="p-2 bg-primary-700 w-10 rounded-[3px] inline-block hover:cursor-pointer"
            onClick={handleDelete}
          >
            <DeleteIcon className="w-5 h-6 inline-block" />
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default BookingList;
