import React from "react";
import NavBar from "../components/NavBar";

const United = () => {
  return (
    <div className="bg-[#5a4ff471] h-[100vh] w-[100%] ">
      <NavBar />
      <div className="w-[100%] h-[100%]">
        <div className=" w-[50%] h-[60%] bg-[#16002c] flex flex-col items-center m-[auto] text-[white] pt-[10rem] p-8">
          <h1>Country & Languages</h1>
          <p>Choose your region and preferred language</p>
          <select name="" id=""></select>
          <select name="" id=""></select>
        </div>
      </div>
    </div>
  );
};

export default United;
