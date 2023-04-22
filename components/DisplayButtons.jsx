import { BiLike, BiUserPlus } from "react-icons/bi";
import { FaMoneyBillAlt, FaExchangeAlt, FaHeart, FaUser, FaUsers } from "react-icons/fa";

const DisplayButtons = () => {
  const data = [
    {
      title: "Total Revenue",
      amount: "$23,567",
      icon: <FaMoneyBillAlt className="text-4xl" />,
      className: "bg-green-100 p-4 rounded-2xl shadow-xl  gap-2 flex flex-col",
    },
    {
      title: "Total Transactions",
      amount: "1,234",
      icon: <FaExchangeAlt className="text-3xl" />,
      className: "bg-yellow-50 p-4 rounded-2xl shadow-xl  gap-2 flex flex-col",
    },
    {
      title: "Total Likes",
      amount: "5,678",
      icon: <BiLike className="text-4xl" />,
      className: "bg-red-100 p-4 rounded-2xl shadow-xl  gap-2 flex flex-col",
    },
    {
      title: "Total Users",
      amount: "10,234",
      icon: <BiUserPlus className="text-4xl" />,
      className: "bg-purple-100 p-4 rounded-2xl shadow-xl  gap-2 flex flex-col",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {data.map((item, index) => (
        <div class={item?.className}>
          <div class="flex justify-end">{item.icon}</div>
          <div class="flex flex-col px-6">
            <h2 class="text-lg font-medium text-gray-800">{item?.title}</h2>
            <p class="text-black font-bold font-opensans text-2xl mt-2">{item?.amount}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayButtons;
