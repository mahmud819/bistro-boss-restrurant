import React from "react";
import SharedContactCard from "../../../../Shared/SharedComponent/SharedContactCard/SharedContactCard";
import { FaClock, FaLocationPin, FaPhone } from "react-icons/fa6";
import SharedTitle from "../../../../Shared/SharedComponent/SharedTitle/SharedTitle";

const ContactCard = () => {
  return (
    <div className="py-8">
        <SharedTitle title={'Our Location'} subTitle={'Visit Us'}></SharedTitle>
      <div className="grid grid-cols-3 gap-2 p-4">
        <SharedContactCard
          icon={<FaPhone></FaPhone>}
          titile={"Phone"}
          paragraph={"+8801125-125436"}
        ></SharedContactCard>
        <SharedContactCard
          icon={<FaLocationPin></FaLocationPin>}
          titile={"Address"}
          paragraph={"Banani,Dhaka,1250"}
        ></SharedContactCard>
        <SharedContactCard
          icon={<FaClock></FaClock>}
          titile={"Working Hours"}
          paragraph={"07:00am to 11:00pm"}
        ></SharedContactCard>
      </div>
    </div>
  );
};

export default ContactCard;
