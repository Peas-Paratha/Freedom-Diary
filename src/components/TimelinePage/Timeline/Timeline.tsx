import React from "react";
import EventTitle from "./EventTitle";

const Timeline = () => {
  return (
    <div className="relative max-w-6xl mx-0 my-6">
      <div className="py-1 px-5 font-semibold leading-4 bg-gray rounded-md w-fit relative mb-14 left-1/2 -translate-x-1/2 z-20">
        2021
      </div>
      {/*Timeline middle line*/}
      <div className="absolute w-1 bg-gray top-0 bottom-0 left-1/2 -ml-[2px]"></div>
      <EventTitle />
    </div>
  );
};

export default Timeline;
