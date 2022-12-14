const Transaksi = ({ gymClass, classType, date, userName, status, price }) => {
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
        <td className="py-4 px-6 capitalize">{gymClass}</td>
        <td className="py-4 px-6 capitalize">{classType}</td>
        <td className="py-4 px-6">{date.toString().substring(0, 10)}</td>
        <td className="py-4 px-6 capitalize">{userName}</td>
        <td className={`py-4 px-6 font-avenirBlack ${statusCheck()} uppercase`}>
          {status}
        </td>
        <td className="py-4 px-6">Rp. {price}</td>
      </tr>
    </tbody>
  );
};

export default Transaksi;
