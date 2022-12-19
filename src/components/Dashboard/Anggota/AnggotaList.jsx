import { useDispatch, useSelector } from "react-redux";
import { setEdit, deleteData, fetchDatas } from "../../../redux/gymSlice";
import { Link } from "react-router-dom";
import { useState } from "react";

import { EditIcon, DeleteIcon } from "../../../assets/icons";
import { BiCheckbox, BiCheckboxSquare } from "react-icons/bi";
import Swal from "sweetalert2";

const AnggotaList = ({
  id,
  name,
  email,
  phone,
  birth_date,
  gender,
  address,
}) => {
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
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are You Sure?',
      text: "Data yang terhapus tidak dapat dikembalikan",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted',
          'Data yang dipilih telah terhapus!',
          'success'
        )
        dispatch(setEdit([]));
        dispatch(deleteData({ url: "/users", type: "one", id }));
    
        setTimeout(() => {
          dispatch(fetchDatas({ url: "/users", state: "users" }));
        }, 1000);

      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Penghapusan data dibatalkan',
          'error'
        )
      }
    })
  };

  return (
    <tbody className="font-avenirHeavy text-web-dark border-t">
      <tr>
        <td className="py-4 px-4 text-3xl">
          <div onClick={checkItem}>
            {edit.includes(id) ? <BiCheckboxSquare /> : <BiCheckbox />}
          </div>
        </td>
        <td className="py-4 px-6 capitalize">{name}</td>
        <td className="py-4 px-6">{email}</td>
        <td className="py-4 px-6">{phone}</td>
        <td className="py-4 px-6 capitalize">{address}</td>
        <td className="py-4 px-6 text-center">
          <Link
            to="/anggota/edit"
            className="p-2 bg-info-700 w-10 rounded-[3px] inline-block mr-3"
            onClick={() =>
              dispatch(
                setEdit({
                  id,
                  name,
                  email,
                  phone,
                  birth_date,
                  gender,
                  address,
                })
              )
            }
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

export default AnggotaList;
