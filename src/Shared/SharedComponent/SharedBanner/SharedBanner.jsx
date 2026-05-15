import React from "react";

const SharedBanner = ({title,paragraph}) => {
  return (
    <div className="w-2/3 h-3/5 bg-[rgba(0,0,0,0.55)] text-white flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-4 uppercase">{title}</h1>
      <p className="text-center w-[90%]">
        {paragraph}
      </p>
    </div>
  );
};

export default SharedBanner;
