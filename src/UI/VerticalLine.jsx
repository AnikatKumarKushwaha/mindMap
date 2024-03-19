import React from "react";

export default function VerticalLine({ height = 7, left, right, bottom, top }) {
  return (
    <div
      className="border border-slate-600 inline-block absolute"
      style={{
        height: `${height}px`,
        top: `${top}px`,
        left: `${left}px`,
        right: `${right}px`,
        bottom: `${bottom}px`,
      }}
    ></div>
  );
}
