import React from "react";
import HorizontalLine from "../UI/HorizontalLine";
import VerticalLine from "../UI/VerticalLine";
import OneSegment from "../UI/OneSegment";

export default function FirstSection({ width = 10, top, left, bottom, right }) {
  return (
    <div
      className=" relative "
      style={{
        width: `${width}px`,
        top: `${top}px`,
        left: `${left}px`,
        right: `${right}px`,
        bottom: `${bottom}px`,
      }}
    >
      <HorizontalLine top="160" width="84" right={-72} />
      <VerticalLine height="320" left="84" />
      <OneSegment top={-30} left={84} color="1" data="Research" />
      <OneSegment top={50} left={84} color="2" data="Planning" />
      <OneSegment top={130} left={84} color="3" data="Designing" />
      <OneSegment top={210} left={84} color="4" data="Manufacturing" />
      <OneSegment top={290} left={84} data="Sales/Marketing" />
    </div>
  );
}
