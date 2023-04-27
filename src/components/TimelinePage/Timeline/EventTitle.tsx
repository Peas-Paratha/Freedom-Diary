import React from "react";
import { GoVerified } from "react-icons/go";
import Tag from "./Tag";

const EventTitle = () => {
  return (
    <div className="px-7 relative w-1/2 left-0 mb-8">
      <div className="relative shadow-[0px_4px_4px_0px_#0000000D] rounded-lg p-[18px]">
        <div className="flex pb-1 justify-start items-center">
          <div className="text-sm font-semibold">Title of Events</div>
          <div className="bg-blue ml-2 text-white px-2 text-[10px] py-[1px] rounded leading-3">
            verified
          </div>
          <div className="text-blue text-lg ml-1">
            <GoVerified />
          </div>
        </div>
        <div className="flex gap-2 flex-wrap items-center">
          <Tag />
          <Tag />
        </div>
      </div>
      <div className="absolute w-5 h-5 right-0 translate-x-1/2 bg-white border-gray border-[5px] top-0 rounded-full z-10"></div>
      <div className="absolute left-[calc(100%+28px)] top-0 w-max text-[10px]">
        DD MM YYYY
      </div>
    </div>
  );
};

export default EventTitle;
