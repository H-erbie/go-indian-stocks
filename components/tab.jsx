import React from "react";

const Tab = ({activeTab, setActiveTab}) => {
  return (
    <div className="w-full sm:w-3/4 mx-auto mb-6 text-white lg:hidden">
      <button
        className={`
          p-2 w-1/2 h-10  
          ${
            activeTab === "discussion forum"
              ? "bg-[#072644] border-b-4 border-red-500"
              : "bg-[#093967]"
          }
        `}
        onClick={() => setActiveTab("discussion forum")}
      >
        Discussion Forum
      </button>
      <button
        className={`
          p-2 w-1/2 h-10 
          ${
            activeTab === "market stories"
              ? "bg-[#072644] border-b-4 border-red-500"
              : "bg-[#093967]"
          }
        `}
        onClick={() => setActiveTab("market stories")}
      >
        Market Stories
      </button>
    </div>
  );
};

export default Tab;
