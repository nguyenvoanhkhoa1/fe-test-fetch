import React from "react";
import Card from "../Card";

const Slider = ({ data }) => {
  return (
    <>
      <div className="w-full p-6">
        <h5 className="text-lg font-semibold text-grey01">{data?.title}</h5>
      </div>
      <div className="flex gap-6  overflow-auto -mx-6 px-6 pb-6">
        {data?.items?.length &&
          data?.items?.map((item, index) => <Card data={item} />)}
      </div>
    </>
  );
};

export default Slider;
