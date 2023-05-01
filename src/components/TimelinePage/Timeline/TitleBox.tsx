import React from "react";
import { GoVerified } from "react-icons/go";
import Tag from "./Tag";

const TitleBox = () => {
  return (
    <div
      className={`relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] rounded-lg py-[18px] px-[15px]`}
    >
      <div className="flex pb-2 justify-start items-center">
        <div className="text-sm font-semibold leading-4">Title of Events</div>
        <div className="bg-blue ml-2 text-white px-2 text-[10px] py-[2px] rounded leading-3">
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
  );
};

export default TitleBox;
