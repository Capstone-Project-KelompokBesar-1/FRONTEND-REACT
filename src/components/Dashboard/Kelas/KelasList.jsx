import { useDispatch, useSelector } from "react-redux";
import { setEdit, deleteData, fetchDatas } from "../../../redux/gymSlice";
import { Link } from "react-router-dom";
import { useState } from "react";

import { EditIcon, DeleteIcon } from "../../../assets/icons";
import { BiCheckboxSquare, BiCheckbox } from "react-icons/bi";

const KelasList = ({
  id,
  gymClass,
  classType,
  classCategory,
  price,
  description,
  total_meeting,
  trainer,
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
    dispatch(setEdit([]));
    // ntar tambahin swal trs kl Yes pake kode bawah ini
    dispatch(deleteData({ url: "/classes", type: "one", id }));
    setTimeout(() => {
      dispatch(fetchDatas({ url: "/classes", state: "classes" }));
    }, 500);
  };

  return (
    <tbody className="font-avenirHeavy text-web-dark border-t">
      <tr>
        <td className="py-4 px-4 text-3xl">
          <div onClick={checkItem}>
            {edit.includes(id) ? <BiCheckboxSquare /> : <BiCheckbox />}
          </div>
        </td>
        <td className="py-4 px-6 capitalize">{gymClass}</td>
        <td className="py-4 px-6 capitalize">{classType}</td>
        <td className="py-4 px-6 capitalize">{classCategory}</td>
        <td className="py-4 px-6">{price}</td>
        <td className="py-4 px-6 text-center">
          <Link
            to="/kelas/edit"
            className="p-2 bg-info-700 w-10 rounded-[3px] inline-block mr-3"
            onClick={() =>
              dispatch(
                setEdit({
                  id,
                  gymClass,
                  classType,
                  classCategory,
                  price,
                  description,
                  total_meeting,
                  trainer,
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

export default KelasList;
