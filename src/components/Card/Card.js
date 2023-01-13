import React from "react";
import { LCoin } from "../../assets/icons";

const Card = ({ data }) => {
  return (
    <div className=" w-[200px] h-60 shrink-0 border border-solid border-grey08 shadow-shadowLow rounded">
      <img
        className=" w-[200px] h-[100px] object-center object-cover rounded-t"
        src={data?.imagePath}
        alt=""
      />
      <div className="pt-4 px-4">
        <h6
          className={`${
            data?.insufficient ? "text-grey03" : "text-blueDark"
          } text-base font-semibold leading-6 flex items-center`}
        >
          {data?.insufficient && <LCoin className="mr-1" />}
          {data?.title}
        </h6>
        <p className="mt-2 text-base font-normal text-grey04">
          {data?.content}
        </p>
      </div>
    </div>
  );
};

export default Card;
