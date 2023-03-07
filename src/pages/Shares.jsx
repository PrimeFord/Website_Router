import React from "react";
import NavBar from "../components/NavBar";

const Shares = () => {
  return (
    <div className="bg-[#dfdacd] h-fit w-[100%] ">
      <NavBar />
      <div className="px-[3rem] pt-[10rem] flex pb-[4rem] text-[#16002c]">
        <div className="w-[50%] py-20 px-4">
          <h1 className="text-[5rem] font-bold leading-[5rem] mb-4">
            Invest. Learn. Grow.
          </h1>
          <p className="w-[90%] text-[1.2rem] font-[500] leading-[1.5rem] mb-4">
            Invest in over 1,000 stocks, learn from current investors and grow
            your market knowledge. All in one easy to use app.
          </p>
          <p className="text-[1.3rem] font-[500] leading-[1.5rem] mb-4">
            As with all investing, your capital will be at risk.
          </p>
          <div className="flex items-center h-fit mt-[6rem]">
            <img src="/image/qr.svg" />
            <p className="p-4 w-[60%] text-[1.8rem] font-[800] leading-[2rem]">
              Scan this QR code to download Shares
            </p>
          </div>
        </div>
        <div className="w-[50%]">
          <img src="/image/hero1.avif" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Shares;
