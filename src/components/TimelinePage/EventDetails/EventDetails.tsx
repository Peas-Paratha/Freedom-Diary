import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import TitleBox from "../Timeline/TitleBox";

const EventDetails = () => {
  return (
    <div className="absolute left-0 right-0 bg-[#F5F5F5] z-20 -top-[46px] bottom-0">
      <div className="text-lg mb-[18px]">
        <FiArrowLeft />
      </div>
      <TitleBox />
      <div className="text-sm leading-[16px] mb-7">
        Source : https://thisisthesourceinlinkversion.com
      </div>
      <div className="text-sm leading-[17px] text-justify mb-[38px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae
        accumsan risus. Curabitur pulvinar, enim vitae finibus vehicula, erat
        nunc feugiat diam, eu sollicitudin turpis nunc a lacus. Integer quis
        felis ac magna eleifend elementum ut nec massa. Integer eu lorem ut
        metus malesuada aliquet. Phasellus ut turpis consequat, vulputate dui
        sed, aliquam mauris. Sed ut ex mattis, dictum mi quis, mattis magna.
        Aenean sit amet velit massa. Praesent condimentum, odio id euismod
        rutrum, justo enim hendrerit neque, et ornare nulla quam auctor mauris.
        Morbi vel rutrum libero. Fusce ullamcorper et dolor nec rhoncus. Nullam
        et ultrices neque. Fusce sagittis est vel ex luctus, dignissim feugiat
        quam ultrices. Nunc placerat, nulla eget lobortis porttitor, lectus
        lorem mollis lectus, vel gravida nunc dui a nunc. Curabitur consequat in
        libero vel dignissim. Nulla rutrum hendrerit neque eget laoreet.
      </div>
      <div>
        <div className="mb-2 ml-[6px] text-sm leading-[16px] font-semibold">
          Evidence
        </div>
        <div className="flex gap-2">
          <img
            src="https://s3-alpha-sig.figma.com/img/8f22/7bda/06f68cbacf6fcf3f06edc25dfcc56408?Expires=1684108800&Signature=mkDkUXTNxVoeDTuqA5MeX5lnWeJIX5-D5dLeboL~dui1jZc15zqoIHd1BByUj51lhLZXqRIAYkAgQPb-bArLXSA~mRcJjdmGVdLmPQhrGzMxGd-135Qa5sC2NUrVepAIBHuUd4zeC6aV9udVpj9uZlutimKyAbUTHFlbKqS5yBGt4vV~-GGPYQj9VgqKfJ-oV~GPwvT5~8iAwSSTrtISzG9l2kDrzwGrGqeFKwdLds-GN1GXF0F3NzH3kPxQ72~torfCWz1sFljYm6tCSlMnwypHwYE2-O7L8rT4uv5shmHprhAzOmxStlxs1sPT6mn7V7kpQrOVm2k5qh3jiAbFmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            className="w-[109px]"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/8f22/7bda/06f68cbacf6fcf3f06edc25dfcc56408?Expires=1684108800&Signature=mkDkUXTNxVoeDTuqA5MeX5lnWeJIX5-D5dLeboL~dui1jZc15zqoIHd1BByUj51lhLZXqRIAYkAgQPb-bArLXSA~mRcJjdmGVdLmPQhrGzMxGd-135Qa5sC2NUrVepAIBHuUd4zeC6aV9udVpj9uZlutimKyAbUTHFlbKqS5yBGt4vV~-GGPYQj9VgqKfJ-oV~GPwvT5~8iAwSSTrtISzG9l2kDrzwGrGqeFKwdLds-GN1GXF0F3NzH3kPxQ72~torfCWz1sFljYm6tCSlMnwypHwYE2-O7L8rT4uv5shmHprhAzOmxStlxs1sPT6mn7V7kpQrOVm2k5qh3jiAbFmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            className="w-[109px]"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/8f22/7bda/06f68cbacf6fcf3f06edc25dfcc56408?Expires=1684108800&Signature=mkDkUXTNxVoeDTuqA5MeX5lnWeJIX5-D5dLeboL~dui1jZc15zqoIHd1BByUj51lhLZXqRIAYkAgQPb-bArLXSA~mRcJjdmGVdLmPQhrGzMxGd-135Qa5sC2NUrVepAIBHuUd4zeC6aV9udVpj9uZlutimKyAbUTHFlbKqS5yBGt4vV~-GGPYQj9VgqKfJ-oV~GPwvT5~8iAwSSTrtISzG9l2kDrzwGrGqeFKwdLds-GN1GXF0F3NzH3kPxQ72~torfCWz1sFljYm6tCSlMnwypHwYE2-O7L8rT4uv5shmHprhAzOmxStlxs1sPT6mn7V7kpQrOVm2k5qh3jiAbFmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            className="w-[109px]"
          />
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
