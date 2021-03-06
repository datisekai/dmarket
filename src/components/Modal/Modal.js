import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../assets/css/index.css";
import { useSideBar } from "../../store/displayBar";

const Modal = () => {
  const sidebar = useSideBar((state) => state.sidebar);
  const setSidebar = useSideBar((state) => state.setSidebar);
  const userInfo = useSelector((state) => state.user);
  const { type } = useSelector((state) => state.type);

  return (
    <div className={`w-full h-full ${sidebar ? "block" : "hidden"}`}>
      <div
        className="fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.3)] z-50"
        onClick={() => setSidebar(false)}
      ></div>
      <div className="fixed right-0 bottom-0 rounded-md top-0 z-[60] bg-[#2a2a2a] w-[50%] p-5">
        <div className="flex justify-between border-b border-[#007BFF] pb-5">
          <h1 className="uppercase underlined-blue text-xl text-gray-100">
            MENU
          </h1>
          <i
            className="text-xl text-gray-100 hover:text-gray-400 cursor-pointer transition-all fa-solid fa-xmark"
            onClick={() => setSidebar(false)}
          ></i>
        </div>

        <ul className="mt-3">
          <NavLink
            activeclassname="active"
            className={"block"}
            to={"/"}
            onClick={() => setSidebar(false)}
          >
            {" "}
            <li className="block text-gray-200 uppercase py-2">
              <i className="fa-solid fa-house"></i> Home
            </li>
          </NavLink>
          <NavLink
            activeclassname="active"
            className={"block"}
            to={"/products"}
            onClick={() => setSidebar(false)}
          >
            {" "}
            <li className="text-gray-200 uppercase py-2">
              <i className="fa-brands fa-product-hunt"></i> Products
            </li>
          </NavLink>

          <NavLink
            activeclassname="active"
            className={"block"}
            to={"/cart"}
            onClick={() => setSidebar(false)}
          >
            <li className="text-gray-200 uppercase py-2">
              <i className="fa-solid fa-cart-shopping"></i> Cart
            </li>
          </NavLink>
          {userInfo && userInfo.user && (
            <NavLink
              activeclassname="active"
              className={"block"}
              to={"/history-order"}
              onClick={() => setSidebar(false)}
            >
              <li className="text-gray-200 uppercase py-2">
                <i className="fa-brands fa-jedi-order"></i> Order
              </li>
            </NavLink>
          )}
          <NavLink
            activeclassname="active"
            className={"block"}
            to={"/contact"}
            onClick={() => setSidebar(false)}
          >
            <li className="text-gray-200 uppercase py-2">
              <i className="fa-solid fa-address-card"></i> Contact
            </li>
          </NavLink>
          {userInfo && !userInfo.user && (
            <Link to={"/login"} onClick={() => setSidebar(false)}>
              {" "}
              <li className="text-red-400 uppercase py-2">
                <i className="fa-solid fa-right-to-bracket"></i> Login
              </li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
