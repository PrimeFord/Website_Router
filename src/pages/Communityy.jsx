import React from "react";
import CommunityLayout from "../Components/CommunityLayout";
import NavBar from "../components/NavBar";

const Communityy = () => {
  return (
    <div className="bg-[#e4dfff] h-fit w-[100%]">
      <NavBar />
      <CommunityLayout
        p1="Welcome to"
        h1="Connect, share and learn with your crew"
        p2="Whether you’re new to investing or been around the block, level up your money moves with Communities. Speak your mind and ask those burning questions, in a safe space where everybody’s welcome.
    "
        img="/image/hero3.avif"
      />
    </div>
  );
};

export default Communityy;
