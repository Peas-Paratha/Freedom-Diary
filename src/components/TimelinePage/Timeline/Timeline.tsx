import React from "react";
import EventTitle from "./EventTitle";

const Timeline = () => {
  return (
    <div className="relative max-w-6xl">
      <div className="py-1 px-5 font-semibold leading-4 bg-gray rounded-md w-fit relative mb-14 sm:left-1/2 sm:-translate-x-1/2 z-20">
        2021
      </div>
      {/*Timeline middle line*/}
      <div className="absolute w-1 bg-gray top-0 bottom-0 left-9 ml-[1px] sm:left-1/2 sm:-ml-[2px]"></div>
      {new Array(5).fill(1).map((i, index) => {
        return <EventTitle key={index} positionRight={index % 2 === 0} />;
      })}
    </div>
  );
};

export default Timeline;
