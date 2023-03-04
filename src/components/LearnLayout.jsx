import React from "react";

const LearnLayout = (props) => {
  return (
    <div className="px-[3rem] pt-[9rem] flex pb-[4rem] text-[#16002c]">
      <div className="w-[50%] px-4">
        <p className="w-[90%] text-[1.2rem] font-[700] leading-[1.5rem] mb-4">
          {props.p1}
        </p>
        <h1 className="text-[4.2rem] font-bold leading-[4.2rem] mb-4">
          {props.h1}
        </h1>
        <p className="text-[1.05rem] font-[500] leading-[1.5rem] mb-4">
          {props.p2}
        </p>
      </div>
      <div className="w-[50%]">
        <img className="px-4" src={props.img} alt="" />
      </div>
    </div>
  );
};

export default LearnLayout;
