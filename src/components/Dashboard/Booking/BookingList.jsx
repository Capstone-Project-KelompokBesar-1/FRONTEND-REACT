import { EditIcon, DeleteIcon } from "../../../assets/icons";
import { BiCheckboxSquare } from "react-icons/bi";
import { Link } from "react-router-dom";

const BookingList = ({ bookingId, date, amount, method, status }) => {
  const statusCheck = () => {
    if (status === "tertunda") {
      return "text-warning";
    } else if (status === "berhasil") {
      return "text-success-500";
    } else if (status === "gagal") {
      return "text-primary-500";
    }
  };
  return (
    <tbody className="font-avenirHeavy text-web-dark border-t">
      <tr>
        <td className="py-4 px-4 text-3xl">
          <BiCheckboxSquare />
        </td>
        <td className="py-4 px-6">{bookingId}</td>
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
            to="/dashboard/booking/edit"
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

export default BookingList;
