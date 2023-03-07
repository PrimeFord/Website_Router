import React from "react";
import LearnLayout from "../Components/LearnLayout";
import NavBar from "../components/NavBar";

const Learnn = () => {
  return (
    <div>
      <NavBar />
      <LearnLayout
        p1="Featured"
        h1="What is earning season and why should you care?"
        p2="Ever heard the saying `I'm yearning for earnings season`? No? Well, that's probably because i just made it up. But earning season is definitely one of those periods that savvy traders will look forward to with giddy pleasures ."
        img="/image/hero5.png"
      />
    </div>
  );
};

export default Learnn;
