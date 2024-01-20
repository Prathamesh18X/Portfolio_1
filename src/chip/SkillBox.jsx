import React from "react";

const SkillBox = ({ logo, bgColor, textColor, skill }) => {
  return (
    <div
    data-aos="zoom-in" data-aos-duration="1000"
      className={
        "box w-[11rem] h-[11rem] rounded-lg bg-" +
        bgColor +
        " text-" +
        textColor +
        " shadow-xl flex flex-col items-center justify-center gap-4 p-1 sm:w-[7.2rem] sm:h-[7.2rem] exsm:w-[6.5rem] exsm:h-[6.5rem]"
      }
    >
      <div
        className={
          "box w-[75px] h-[75px] bg-" + bgColor + " text-" + textColor + " flex flex-col items-center justify-center gap-4 p-1 md:w-[35px] md:h-[35px]"
        }
      >
        <img src={logo} alt={skill}  />
      </div>
      <p className="font-semibold exsm:text-sm">{skill}</p>
    </div>
  );
};

export default SkillBox;
