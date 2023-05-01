import React from "react";
import { GoVerified } from "react-icons/go";
import Tag from "./Tag";
import TitleBox from "./TitleBox";

type Props = {
  positionRight?: boolean;
};

const EventTitle = ({ positionRight }: Props) => {
  return (
    <div
      className={`px-4 sm:px-7 relative mb-16 left-9 w-[calc(100%-44px)] ${
        positionRight ? "sm:left-1/2" : ""
      }`}
    >
      <TitleBox />
      <div
        className={`absolute w-5 h-5 bg-white border-gray border-[5px] top-0 rounded-full z-10 -left-[7.5px] -translate-y-1/2 ${
          positionRight
            ? "sm:left-0 sm:-translate-x-1/2"
            : "sm:right-0 sm:translate-x-1/2"
        }`}
      ></div>
      <div
        className={`absolute bottom-[calc(100%+7px)] w-max text-[10px] ${
          positionRight
            ? "sm:right-[calc(100%+28px)]"
            : "sm:left-[calc(100%+28px)]"
        }`}
      >
        DD MM YYYY
      </div>
    </div>
  );
};

export default EventTitle;
