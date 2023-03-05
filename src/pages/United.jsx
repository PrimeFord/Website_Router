import React from "react";
import NavBar from "../components/NavBar";

const United = () => {
  return (
    <div className="bg-[#5a4ff471] h-[100vh] w-[100%] ">
      <NavBar />
      <div className="w-[100%] h-[100%] flex justify-center items-center pt-[3.5rem]">
        <div className=" w-[45%] h-[70%] bg-[#16002c] flex flex-col items-center m-[auto] gap-[2rem] text-[white] pt-[3.5rem] rounded-[3rem] p-8">
          <h1 className=" text-[1.25rem]">Country & Languages</h1>
          <p className=" text-[1rem]">
            Choose your region and preferred language
          </p>
          <label>
            <select
              className="w-[15rem] h-[2.2rem] rounded-[3rem] text-[white] bg-transparent border-2 border-white text-center font-semibold flex justify-center focus:outline-none"
              name="country"
              id="dropbox"
            >
              <option className="text-[#16002c]" value="select-a-country">
                Select-a-country
              </option>
              <option className="text-[#16002c]" value="united-kingdom">
                United-Kingdom
              </option>
              <option className="text-[#16002c]" value="united-state">
                United-State
              </option>
              <option className="text-[#16002c]" value="nigeria">
                Nigeria
              </option>
              <option className="text-[#16002c]" value="ghana">
                Ghana
              </option>
              <option className="text-[#16002c]" value="japan">
                Japan
              </option>
              <option className="text-[#16002c]" value="uae">
                UAE
              </option>
            </select>
          </label>
          <label>
            <select
              className="w-[15rem] h-[2.2rem] rounded-[3rem] text-[white] bg-transparent border-2 border-white text-center font-semibold flex justify-center focus:outline-none"
              name="language"
              id="dropbox"
            >
              <option className="text-[#16002c]" value="select-a-language">
                Select-a-language
              </option>
              <option className="text-[#16002c]" value="english">
                English
              </option>
              <option className="text-[#16002c]" value="japanese">
                Japanese
              </option>
              <option className="text-[#16002c]" value="spanish">
                Spanish
              </option>
              <option className="text-[#16002c]" value="italian">
                Italian
              </option>
              <option className="text-[#16002c]" value="french">
                French
              </option>
              <option className="text-[#16002c]" value="arabic">
                Arabic
              </option>
            </select>
          </label>
          <button className="w-[15rem] mt-6 py-2 bg-[#594ff4] text-[white] text-[1.15rem] hover:bg-[white] hover:text-[#594ff4] rounded-[6rem]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default United;
