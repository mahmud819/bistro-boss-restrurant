import React from "react";
import SharedBanner from "../SharedBanner/SharedBanner";

const SharedBackground = ({bgImage,title,paragraph}) => {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <SharedBanner title={title} paragraph={paragraph}></SharedBanner>
    </div>
  );
};

export default SharedBackground;
