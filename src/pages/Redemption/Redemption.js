import React from "react";
import { Slider } from "../../components";
import { CARD_DATA } from "../../configs/constants";

const Redemption = () => {
  return (
    <>
      <div className="block sm:hidden w-full pt-[60px] px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-[428px] bg-grey01"></div>
        <div className="z-10 relative">
          <button className="w-10 h-10 flex justify-center items-center shrink-0 bg-white rounded-full">
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <h3 className="mt-4 text-[32px] font-semibold leading-10 text-white">
            Silver Tier
          </h3>
          <p className="mt-2 text-base font-normal leading-6 text-grey05 tracking-[-0.005em]">
            In Silver Tier, every $1 in rental fee paid, you get 2 coins to
            redeem exclusive rewards.
          </p>
        </div>
        <div className="relative -mx-2 mt-10 bg-white w-auto shadow-shadowLow p-6 rounded-lg border border-solid border-grey09 bg-card-texture">
          <div>
            <span className="text-sm font-semibold leading-6 text-grey05">
              Available Coin balance
            </span>
            <h1 className="text-5xl font-normal leading-[56px] text-grey01">
              340
            </h1>
          </div>
          <div className="mt-6 w-full h-6 flex items-center">
            <div className="w-full bg-grey07 h-[5px] rounded-sm">
              <div className="w-48 h-full bg-blueDark rounded-sm" />
            </div>
          </div>
          <p className="text-base font-normal leading-6 text-grey04">
            You have paid rental fee for $1,200.
            <br />
            Pay more $800 to achieve Gold Tier.
          </p>
          <a className="mt-4 text-blueDark text-base font-normal flex" href=".">
            View tier benefits
            <span className="h-6 w-6 flex items-center justify-center">
              <i class="fa-solid fa-chevron-right"></i>
            </span>
          </a>
          <button className="mt-6 bg-grey01 h-[60px] w-full text-lg font-semibold text-white rounded">
            My Coupons
          </button>
          <p className="mt-4 text-sm font-normal text-grey05 text-center">
            Updated : 02/11/2021
          </p>
        </div>
        {CARD_DATA.map((item, index) => (
          <Slider data={item} />
        ))}
      </div>
      <div className="hidden sm:flex justify-center items-center h-screen uppercase text-5xl">
        View on mobile screen only
      </div>
    </>
  );
};

export default Redemption;
