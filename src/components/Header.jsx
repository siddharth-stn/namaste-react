import { useState } from "react";
import LogoImg from "../assets/images/logoFood.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export default Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center bg-pink-200 shadow-lg mb-2 overflow-auto">
      <div className="">
        <img className="" src={LogoImg} />
      </div>
      <div className="flex gap-1 items-center font-bold text-red-500 bg-red-500 text-white shadow-lg p-4 ml-4 my-4 rounded">
        <p className="whitespace-nowrap">Network Status:</p>
        <p> {onlineStatus ? "🟢" : "🔴"}</p>
      </div>
      <div>
        <ul className="flex items-center gap-3 p-4">
          <li>
            <Link to="/" className="font-bold text-red-500 hover:text-red-800">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="font-bold text-red-500 hover:text-red-800 whitespace-nowrap"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="font-bold text-red-500 hover:text-red-800"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/grocery"
              className="font-bold text-red-500 hover:text-red-800"
            >
              Grocery
            </Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() =>
                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
              }
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
