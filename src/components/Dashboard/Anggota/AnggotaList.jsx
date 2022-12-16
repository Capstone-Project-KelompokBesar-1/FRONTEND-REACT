import { EditIcon, DeleteIcon } from "../../../assets/icons";
import { BiCheckboxSquare } from "react-icons/bi";
import { Link } from "react-router-dom";

const AnggotaList = ({ name, phone, email, address }) => {
  return (
    <tbody className="font-avenirHeavy text-web-dark border-t">
      <tr>
        <td className="py-4 px-4 text-3xl">
          <BiCheckboxSquare />
        </td>
        <td className="py-4 px-6 capitalize">{name}</td>
        <td className="py-4 px-6">{email}</td>
        <td className="py-4 px-6">{phone}</td>
        <td className="py-4 px-6 capitalize">{address}</td>
        <td className="py-4 px-6 text-center">
          <Link
            to="/anggota/edit"
            className="p-2 bg-info-700 w-10 rounded-[3px] inline-block mr-3"
          >
            <EditIcon className="w-6 h-6 inline-block" fill="white" />
          </Link>
          <div className="p-2 bg-primary-700 w-10 rounded-[3px] inline-block">
            <DeleteIcon className="w-5 h-6 inline-block" />
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default AnggotaList;
