import React from "react";
import { GoVerified } from "react-icons/go";
import Tag from "./Tag";

interface Props {
  shadow: string;
  showDetails?: () => void;
}

const TitleBox = ({ shadow, showDetails }: Props) => {
  return (
    <div
      className={`relative shadow-[${shadow}] border-2 border-red-500 rounded-lg py-[18px] px-[15px]`}
      onClick={showDetails}
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
