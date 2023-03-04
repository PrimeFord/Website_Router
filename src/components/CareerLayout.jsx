import React from "react";

const CareerLayout = (props) => {
  return (
    <div className="px-[3rem] pt-[3rem] flex flex-col items-center text-center pb-[4rem] text-[#16002c]">
      <div className="w-[70%] flex flex-col items-center pt-[8em] px-4">
        <p className="w-[90%] text-[1.2rem] font-[800] leading-[1.5rem] mb-4">
          {props.p1}
        </p>
        <h1 className="text-[4.2rem] font-bold leading-[4.2rem] mb-4">
          {props.h1}
        </h1>
        <p className="w-[60%] text-[1.05rem] font-[500] leading-[1.5rem] mb-4">
          {props.p2}
        </p>
      </div>
      <button className="px-[2rem] py-4 mt-6 bg-[#594ff4] text-[white] text-[1.15rem] rounded-[6rem]">
        See available roles
      </button>
      <div className="w-[80%]">
        <img className="px-4" src={props.img} alt="" />
      </div>
    </div>
  );
};

export default CareerLayout;
