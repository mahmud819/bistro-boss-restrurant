import React from "react";
import SharedTitle from "../../../Shared/SharedComponent/SharedTitle/SharedTitle";
import bgImage from "../../../assets/home/featured.jpg";

const HomeFeatured = () => {
  return (
    <div className="relative  bg-[rgba(0,0,0,0.65)]">
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="h-screen bg-cover bg-center  blur-[4px] opacity-[0.9] bg-[rgba(0,0,0,0.71)]"
      ></div>

      <div className="text-white absolute top-10">
        <SharedTitle
          subTitle={"Check It Out"}
          title={"From Our Menu"}
        ></SharedTitle>
        <div className="flex justify-center items-center px-16">
            <div className="w-1/2">
                <img src={bgImage} alt="" />
            </div>
            <div className="w-1/2 pl-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptas, enim minima repellendus aliquam repudiandae cum accusamus, fugiat deserunt dolorem vitae officiis, labore provident error distinctio nam eius qui tenetur?</p>
                <button className="mt-6 font-bold px-4 py-2 rounded-lg border-b-4 border-gray ">
                    Read More
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatured;
