"use client";
import React, { useState } from "react";
import { MdPlayArrow } from "react-icons/md";
import { HiUser } from "react-icons/hi2";
import { BiMessageDetail } from "react-icons/bi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const menuItems = [
    { name: "Discussion Forum", icon: <BiMessageDetail />, more: <TiArrowSortedDown/> }, 
    { name: "Market Stories", icon: <RiMoneyDollarCircleFill /> }, 
    { name: "Sentiment" },
    { name: "Market" },
    { name: "Sector" },
    { name: "Watchlist" },
    { name: "Events" },
    { name: "News/Interview" },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen); 

  return (
    <nav
      className={`
         text-white h-screen fixed lg:relative items-center flex w-max
        ${isOpen ? "bg-gray-100" : ""}
      `}
    >
      <div
        className={`
          h-full transition-all bg-[#093967] 
          ${isOpen ? "w-[300px]" : "w-0 overflow-hidden"}
        `}
      >
        <div className="flex items-center justify-between p-5 border-gray-400 border-b">
          <span className="flex gap-x-2 items-center capitalize">
            <HiUser className="text-2xl" />
            <span>Hello, User</span>
          </span>
          <span className="text-2xl relative">
            <FaBell />
            <div className="h-2 w-2 rounded-[100%] absolute top-0 right-0 bg-red-600"></div>
          </span>
        </div>
        <ul className="list-none py-2">
          {menuItems.map((item, index) => (
            <li key={index} className="mb-2  cursor-pointer flex items-center gap-x-2 p-2 hover:bg-[#072644]">
              <span className="text-2xl">{item.icon}</span>
              {item.name}
              <span className="ml-auto">{item.more}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={toggleSidebar}
        className="border-none py-9 pl-2 bg-[#093967] text-white"
      >
        <MdPlayArrow />
      </button>
    </nav>
  );
};

export default Sidebar;
