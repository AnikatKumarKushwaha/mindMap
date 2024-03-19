import React from "react";
import VerticalLine from "./VerticalLine";
import HorizontalLine from "./HorizontalLine";
import Segment from "./Segment";

export default function B2C({ top, left, bottom, right }) {
  return (
    <div
      className="relative "
      style={{
        top: `${top}px`,
        left: `${left}px`,
        right: `${right}px`,
        bottom: `${bottom}px`,
      }}
    >
      <VerticalLine height="120" />
      <HorizontalLine top={0} width="84" right={-72} />
      <HorizontalLine top={40} width="84" right={-72} />
      <HorizontalLine top={80} width="84" right={-72} />
      <HorizontalLine top={120} width="84" right={-72} />
      <Segment top={-14} left={82} height={30} color="1">
        Online
      </Segment>
      <Segment top={26} left={82} height={30} color="1">
        Interview
      </Segment>
      <Segment top={66} left={82} height={30} color="1">
        Public data
      </Segment>
      <Segment top={106} left={82} height={30} color="1">
        Health
      </Segment>
      <HorizontalLine top={0} left={210} width="84" />
      <HorizontalLine top={120} left={210} width="84" />
      <VerticalLine height="122" left={294} />
      <HorizontalLine top={61} left={294} width="84" right={-373} />
    </div>
  );
}
