import React from "react";
import SecondSection from "./SecondSection";
import B2C from "../UI/B2C";
import TwoSegments from "../UI/TwoSegments";

export default function ThirdSection({ top, left, bottom, right }) {
  return (
    <div
      className="absolute pt-20 "
      style={{
        top: `${top}px`,
        left: `${left}px`,
        right: `${right}px`,
        bottom: `${bottom}px`,
      }}
    >
      <SecondSection />
      <TwoSegments
        left={672}
        top={-40}
        showEndArrow={true}
        color="1"
        data1="B2C"
        data2="B2C"
      />
      <B2C left={964} top={-100} />
    </div>
  );
}
