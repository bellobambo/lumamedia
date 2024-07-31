import React from "react";

const Navbar = () => {
  return (
    <div className="text-white pt-12 px-24">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img
            className="w-[62px] h-[62px] mr-2"
            src="/NetFlix.png"
            alt="NetFlix Logo"
          />
          <span className="font-bold text-[32px] font-inter">
            My Streaming Platform
          </span>
        </div>
        <div className="flex items-center">
          <div className="space-x-3 flex">
            <button className="flex items-center py-2 border-[#353535] border-2 rounded-[15px] px-4 space-x-1">
              <span>En</span>
              <Arrow />
            </button>
            <button className="border-[#00FF99] py-2 border-2 rounded-[15px] px-8 font-normal text-[15px] text-[#FFFFFF]">
              Login
            </button>
          </div>
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
