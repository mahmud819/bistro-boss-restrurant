import React from "react";
import SharedTitle from "../../../Shared/SharedComponent/SharedTitle/SharedTitle";
import { FaRegPaperPlane } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* title area */}
      <SharedTitle
        title={"Contact Form"}
        subTitle={"Send us a Message"}
      ></SharedTitle>
      <div className="w-[77%] bg-[#f3f3f3] rounded-md shadow-md lg:mb-16">
        <div className="px-6 pt-8">
          <div className="grid grid-cols-2 gap-2 pb-4">
            {/* name input field */}
            <fieldset className="">
              <legend className="pb-2">Name*</legend>
              <input
                type="text"
                className="w-full input outline-none"
                placeholder="Name"
              />
            </fieldset>

            {/* email input field */}
            <fieldset className="">
              <legend className="pb-2">Email*</legend>
              <input
                type="email"
                className="w-full input outline-none"
                placeholder="Email"
              />
            </fieldset>
          </div>

          {/* phone number input area */}
          <fieldset className="">
            <legend className="pb-2">Phone*</legend>
            <input
              type="text"
              className="w-full input outline-none"
              placeholder="Phone Number"
            />
          </fieldset>

          {/* text area  */}
          <fieldset className="fieldset py-4">
            <legend className="fieldset-legend">Message*</legend>
            <textarea
              className="w-full textarea h-24"
              placeholder="Type your messages here"
            ></textarea>
          </fieldset>
          <div className="flex justify-center items-center pt-8 pb-8">
            <button className="btn bg-gradient-to-r from-[#D97902] to-[#D99901] shadow-sm btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Send A Message <FaRegPaperPlane /> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
