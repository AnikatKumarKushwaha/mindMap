import React from "react";
import FirstSection from "./FirstSection";
import TwoSegments from "../UI/TwoSegments";

export default function SecondSection() {
  return (
    <div>
      <FirstSection />
      <TwoSegments
        left={378}
        top={-20}
        showEndArrow={true}
        color="1"
        data1="External"
        data2="Internal"
      />
      <TwoSegments left={378} top={60} color="2" data1="PRD" data2="Specs" />
      <TwoSegments
        left={378}
        top={140}
        color="3"
        data1="Hardware"
        data2="Software"
      />
      <TwoSegments
        left={378}
        top={220}
        color="4"
        data1="Material"
        data2="Production"
      />
      <TwoSegments
        left={378}
        top={300}
        color="5"
        data1="Online"
        data2="Dealership"
      />
    </div>
  );
}
