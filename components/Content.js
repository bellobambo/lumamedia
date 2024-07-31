import React from "react";

const Content = () => {
  return (
    <div className="pt-12 px-24">
      <span className="md:flex md:items-center md:justify-between sm:grid sm:grid-rows-4 sm:grid-flow-col sm:gap-4">
        <span className="font-bold text-[36px] sm:text-[48px] md:text-[54px] lg:text-[60px] w-full sm:w-[623px] leading-tight sm:leading-[65.35px] h-auto sm:h-[130px]">
          Get Instant Access to Endless Entertainment.
        </span>

        <span className="items-center flex flex-col">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5251F6] to-[#00FF99] font-bold text-[36px]">
            Welcome!
          </span>

          <span className="mb-8">Join the Streaming Paradise!</span>

          <input
            placeholder="E-mail"
            className="bg-[#1C1C1C] w-[328px] rounded-[10px] px-[10px] h-[50px] mb-4 placeholder-[#5A5A5A]"
          />

          <input
            placeholder="Password"
            className="bg-[#1C1C1C] w-[328px] rounded-[10px] px-[10px] h-[50px] mb-4 placeholder-[#5A5A5A]"
          />

          <input
            placeholder="Full name"
            className="bg-[#1C1C1C] w-[328px] rounded-[10px] px-[10px] h-[50px] mb-4 placeholder-[#5A5A5A]"
          />

          <span className="mr-20">
            <span className="space-x-3 flex flex-row ">
              <input type="radio" />
              <span className="text-[#414141] font-normal text-[13px]">
                By signing up, you agree to X's <br />
                <span className="text-[#757575] underline">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-[#757575] underline">Privacy Policy</span>
              </span>
            </span>
            <span className="space-x-3 flex flex-row mt-6">
              <input type="radio" />
              <span className="text-[#414141] font-normal text-[13px]">
                I accept the communication policies.
              </span>
            </span>
          </span>

          <button className="bg-[#00FF99] w-[327px] rounded-[10px] px-[10px] h-[55px] mb-4 placeholder-[#c5a7a7] text-black mt-6 font-semibold text-[16px]">
            Sign up
          </button>

          <span className="mt-6">
            <span className="flex flex-row items-center space-x-3">
              <Line />
              <span className="text-[#747474] font-semibold text-[13px]">
                or continue with
              </span>
              <Line />
            </span>
          </span>

          <span className="mt-6">
            <span className="flex justify-between space-x-12">
              <img className="w-[43px] h-[44px]" src="/Google.png" />
              <img className="w-[43px] h-[44px]" src="/Facebook.png" />
              <img className="w-[43px] h-[44px]" src="/Facebook.png" />
            </span>
          </span>

          <span className="mt-6">
            <span className="font-medium text-[13px]">
              <span className="text-[#5A5A5A]"> Already have an account? </span>{" "}
              <span className="text-[#05955C]">Login</span>
            </span>
          </span>
        </span>
      </span>
    </div>
  );
};

export default Content;

function Line() {
  return (
    <svg
      width="84"
      height="1"
      viewBox="0 0 84 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="4.37114e-08" y1="0.5" x2="84" y2="0.500007" stroke="#5A5A5A" />
    </svg>
  );
}
