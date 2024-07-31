import React from "react";

const Navbar = () => {
  return (
    <div className="text-white pt-6 px-6 sm:px-12 md:px-24 lg:px-32">
      <div className="flex flex-col items-center sm:items-start sm:flex-row sm:justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
          <img
            className="w-[48px] h-[48px] sm:w-[62px] sm:h-[62px] mr-2"
            src="/NetFlix.png"
            alt="NetFlix Logo"
          />
          <span className="font-bold text-[24px] sm:text-[32px] font-inter">
            My Streaming Platform
          </span>
        </div>
        <div className="flex items-center space-x-3 mt-4 sm:mt-0">
          <button className="flex items-center py-2 border-[#353535] border-2 rounded-[10px] sm:rounded-[15px] px-3 sm:px-4 space-x-1 text-[12px] sm:text-[15px]">
            <span>En</span>
            <Arrow />
          </button>
          <button className="border-[#00FF99] py-2 border-2 rounded-[10px] sm:rounded-[15px] px-4 sm:px-8 font-normal text-[12px] sm:text-[15px] text-[#FFFFFF]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

function Arrow() {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.5 1.25L6 6.75L11.5 1.25" stroke="#DCDCDC" />
    </svg>
  );
}
