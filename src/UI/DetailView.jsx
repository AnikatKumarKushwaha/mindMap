import React from "react";

export default function DetailView({ header, top, left, setIsHovering }) {
  return (
    <div
      className="absolute  z-10 bg-slate-200 shadow-lg w-40 h-32  rounded-sm"
      style={{
        top: `${top - 110}px`,
        left: `${left + 122}px`,
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className=" text-[6px] font-bold flex justify-center my-1">
        {header}
      </div>
      <div className="flex gap-2 px-2  items-center">
        <div className=" text-[6px] w-8">Positive</div>
        <div className="w-20 bg-blue-500 h-3"></div>
        <div className=" text-[6px]">13451</div>
      </div>
      <div className="flex gap-2 px-2  items-center mt-1">
        <div className=" text-[6px] w-8">Negative</div>
        <div className="w-14 bg-blue-500 h-3"></div>
        <div className=" text-[6px]">11231</div>
      </div>
      <div className="flex gap-2 px-2  items-center mt-1">
        <div className=" text-[6px] w-8">comments</div>
        <div className="w-16 bg-blue-500 h-3"></div>
        <div className=" text-[6px]">12271</div>
      </div>
      <div className="px-2 mt-2 flex flex-col gap-[3px]">
        <div className="text-[6px]">Total Reviews</div>
        <div className="text-[6px]">Positive Reviews</div>
        <div className="text-[6px]">Negitive Reviews</div>
        <div className="text-[6px]">Comments</div>
      </div>
    </div>
  );
}
