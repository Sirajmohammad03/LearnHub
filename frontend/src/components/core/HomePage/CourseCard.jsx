import React from "react";
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";


const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  const isActive = currentCard === cardData?.heading;
  return (
    <div
      className={`w-[360px] lg:w-[30%] 
        ${isActive
        ? "bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[10px_10px_0_0] shadow-blue-300"
        : "bg-richblack-800"
        }  text-richblack-300 h-[300px] box-border border-[1px] rounded-3xl cursor-pointer transition-all duration-300 ease-in-out`}
      onMouseOver={() => {setCurrentCard(cardData?.heading)}}
    >
      <div className="border-b-[2px] border-richblack-100 border-dotted h-[80%] p-6 flex flex-col gap-6">
        <div className={` ${currentCard === cardData?.heading ? "text-white" : "text-richblack-3  00"} font-semibold text-[20px]`}
        >
          {cardData?.heading}
        </div>

        <div className={`${currentCard === cardData?.heading ? "text-white" : "text-richblack-400"}`}>{cardData?.description}</div>
      </div>

      <div
        className={`flex justify-between ${currentCard === cardData?.heading ? "text-white" : "text-richblack-300"
          } px-6 py-3 font-medium`}
      >
        {/* Level */}
        <div className="flex items-center gap-2 text-[16px]">
          <HiUsers />
          <p>{cardData?.level}</p>
        </div>

        {/* Flow Chart */}
        <div className="flex items-center gap-2 text-[16px]">
          <ImTree />
          <p>{cardData?.lessionNumber} Lession</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;