import React from "react";

export default function HorizontalLine({
  width = 10,
  top,
  left,
  bottom,
  right,
}) {
  return (
    <div style={{ position: "relative" }}>
      <div
        className="border border-slate-600 inline-block"
        style={{
          width: `${width}px`,
          height: "1px",
          position: "absolute",
          top: `${top}px`,
          left: `${left}px`,

          bottom: `${bottom}px`,
        }}
      ></div>
      {right && (
        <div
          style={{
            position: "absolute",
            top: `${top - 5}px`, // Adjust vertical position of the arrow to be centered
            right: `${right}px`, // Position arrow at the right end of the line
          }}
        >
          <div
            style={{
              width: "0",
              height: "0",
              borderTop: "5px solid transparent",
              borderBottom: "5px solid transparent",
              borderLeft: "5px solid black",
            }}
          ></div>
        </div>
      )}
    </div>
  );
}
