import React from "react";
import HorizontalLine from "./HorizontalLine";
import Segment from "./Segment";

export default function OneSegment({
  width = 10,
  top,
  left,
  bottom,
  right,
  color,
  data,
}) {
  return (
    <div className=" absolute">
      <div
        className="relative "
        style={{
          width: `${width}px`,
          top: `${top}px`,
          left: `${left}px`,
          right: `${right}px`,
          bottom: `${bottom}px`,
        }}
      >
        <HorizontalLine top={30} width="84" right={-72} />
        <Segment top={16} left={82} height={30} color={color}>
          {data}
        </Segment>
        <HorizontalLine top={30} width="84" left={210} right={-284} />
      </div>
    </div>
  );
}
