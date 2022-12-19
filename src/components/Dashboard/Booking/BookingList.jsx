import { useDispatch, useSelector } from "react-redux";
import { setEdit, deleteData, fetchDatas } from "../../../redux/gymSlice";
import { useState } from "react";
import { Link } from "react-router-dom";

import { BiCheckbox, BiCheckboxSquare } from "react-icons/bi";
import { EditIcon, DeleteIcon } from "../../../assets/icons";
import Swal from "sweetalert2";
import { NumericFormat } from "react-number-format";

const BookingList = ({ item }) => {
  const statusCheck = () => {
    if (item.status === "tertunda") {
      return "text-warning";
    } else if (item.status === "berhasil") {
      return "text-success-500";
    } else if (item.status === "gagal") {
      return "text-primary-500";
    }
  };

  const dispatch = useDispatch();
  const edit = useSelector((state) => state.gym.edit);
  const [checked, setChecked] = useState(false);

  const checkItem = () => {
    if (edit.includes(item.id)) {
      dispatch(setEdit(edit.filter((item) => item !== item.id)));
    } else {
      dispatch(setEdit([...edit, item.id]));
    }
    setChecked(!checked);
  };

  const handleDelete = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are You Sure?",
        text: "Data yang terhapus tidak dapat dikembalikan",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Delete",
        cancelButtonText: "Cancel",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Deleted",
            "Data yang dipilih telah terhapus!",
            "success"
          );
          dispatch(setEdit([]));
          dispatch(
            deleteData({ url: "/transactions", type: "one", id: item.id })
          );

          setTimeout(() => {
            dispatch(
              fetchDatas({ url: "/transactions", state: "transactions" })
            );
          }, 1000);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Penghapusan data dibatalkan",
            "error"
          );
        }
      });
  };

  return (
    <tbody className="font-avenirHeavy text-web-dark border-t">
      <tr>
        <td className="py-4 px-4 text-3xl">
          <div onClick={checkItem}>
            {edit.includes(item.id) ? <BiCheckboxSquare /> : <BiCheckbox />}
          </div>
        </td>
        <td className="py-4 px-6">{item.id}</td>
        <td className="py-4 px-6 text-center">
          {item.updated_at.toString().substring(0, 10)} <br />{" "}
          {item.updated_at.match(/\d\d:\d\d/)} WIB
        </td>
        <td className="py-4 px-6"><NumericFormat value={item.amount} displayType={'number'} thousandSeparator={true} prefix={'Rp.'}/></td>
        <td className="py-4 px-6 uppercase">{item.payment_method.name}</td>
        <td className={`py-4 px-6 font-avenirBlack ${statusCheck()} uppercase`}>
          {item.status}
        </td>
        <td className="py-4 px-6 text-center">
          <Link
            to="/booking/edit"
            className="p-2 bg-info-700 w-10 rounded-[3px] inline-block mr-3"
            onClick={() => dispatch(setEdit(item))}
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
