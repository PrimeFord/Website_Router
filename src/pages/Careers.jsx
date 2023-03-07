import React from "react";
import CareerLayout from "../Components/CareerLayout";
import NavBar from "../components/NavBar";

const Careers = () => {
  return (
    <div className="bg-[#e4dfff] h-fit w-[100%] ">
      <NavBar />
      <CareerLayout
        p1="Careers"
        h1="Ready to make investing social with us?"
        p2="We’re on a mission to give every human fair access to the stock market and the social connectedness and support to build a strong financial future – in community.
    "
        img="/image/hero4.avif"
      />
    </div>
  );
};

export default Careers;
