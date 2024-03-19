import VerticalLine from "./VerticalLine";
import HorizontalLine from "./HorizontalLine";
import Segment from "./Segment";

export default function TwoSegments({
  showEndArrow,
  top,
  left,
  bottom,
  right,
  color,
  data1,
  data2,
}) {
  return (
    <div
      className="relative"
      style={{
        top: `${top}px`,
        left: `${left}px`,
        right: `${right}px`,
        bottom: `${bottom}px`,
      }}
    >
      <VerticalLine height="40" />
      <HorizontalLine top={0} width="84" right={-72} />
      <HorizontalLine top={40} width="84" right={-72} />
      <Segment top={-14} left={82} height={30} color={color}>
        {data1}
      </Segment>
      <Segment top={26} left={82} height={30} color={color}>
        {data2}
      </Segment>
      {showEndArrow && (
        <HorizontalLine top={0} width="84" left={210} right={-283} />
      )}
    </div>
  );
}
