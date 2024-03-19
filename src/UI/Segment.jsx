import React, { useState } from "react";
import DetailView from "./DetailView";
import { Link } from "react-router-dom";

export default function Segment({
  color,
  children,
  top,
  left,
  right,
  bottom,
  height,
}) {
  const [isHovering, setIsHovering] = useState(false);
  if (color === "1") {
    return (
      <>
        <Link
          to="/detail"
          state={children}
          className={` px-3 py-2  absolute w-32 bg-blue-900 flex justify-center items-center text-blue-50 text-sm hover:border-2 hover:border-blue-900 hover:bg-blue-50 hover:text-blue-900 hover:shadow-xl cursor-pointer shadow-md rounded-sm transition-all duration-300 hover:-translate-y-1`}
          style={{
            height: `${height}px`,
            top: `${top}px`,
            left: `${left}px`,
            right: `${right}px`,
            bottom: `${bottom}px`,
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {children}
        </Link>
        {isHovering && (
          <DetailView
            header={children}
            top={top}
            left={left}
            setIsHovering={setIsHovering}
          />
        )}
      </>
    );
  } else if (color === "2") {
    return (
      <>
        <Link
          to="/detail"
          state={children}
          className={` px-3 py-2  absolute w-32 bg-sky-600 flex justify-center items-center text-sm text-sky-50 hover:border-2 hover:border-sky-600 hover:bg-sky-50 hover:text-sky-600 cursor-pointer shadow-md rounded-sm transition-all duration-300 hover:-translate-y-1`}
          style={{
            height: `${height}px`,
            top: `${top}px`,
            left: `${left}px`,
            right: `${right}px`,
            bottom: `${bottom}px`,
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {children}
        </Link>
        {isHovering && (
          <DetailView
            header={children}
            top={top}
            left={left}
            setIsHovering={setIsHovering}
          />
        )}
      </>
    );
  } else if (color === "3") {
    return (
      <>
        <Link
          to="/detail"
          state={children}
          className={`px-3 py-2 absolute w-32 bg-orange-600 flex justify-center items-center text-sm text-orange-50 hover:border-2 hover:border-orange-400 hover:bg-orange-50 hover:text-orange-400 cursor-pointer shadow-md rounded-sm transition-all duration-300 hover:-translate-y-1`}
          style={{
            height: `${height}px`,
            top: `${top}px`,
            left: `${left}px`,
            right: `${right}px`,
            bottom: `${bottom}px`,
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {children}
        </Link>
        {isHovering && (
          <DetailView
            header={children}
            top={top}
            left={left}
            setIsHovering={setIsHovering}
          />
        )}
      </>
    );
  } else if (color === "4") {
    return (
      <>
        <Link
          to="/detail"
          state={children}
          className={` px-3 py-2  absolute w-32 bg-pink-400 flex justify-center items-center text-sm text-pink-50 hover:border-2 hover:border-pink-400 hover:bg-pink-50 hover:text-pink-400 cursor-pointer shadow-md rounded-sm transition-all duration-300 hover:-translate-y-1`}
          style={{
            height: `${height}px`,
            top: `${top}px`,
            left: `${left}px`,
            right: `${right}px`,
            bottom: `${bottom}px`,
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {children}
        </Link>
        {isHovering && (
          <DetailView
            header={children}
            top={top}
            left={left}
            setIsHovering={setIsHovering}
          />
        )}
      </>
    );
  } else {
    return (
      <>
        <Link
          to="/detail"
          state={children}
          className={` px-3 py-2  absolute w-32 bg-violet-400 flex justify-center items-center text-sm text-violet-50 hover:border-2 hover:border-violet-400 hover:bg-violet-50 hover:text-violet-400 cursor-pointer shadow-md rounded-sm transition-all duration-300 hover:-translate-y-1`}
          style={{
            height: `${height}px`,
            top: `${top}px`,
            left: `${left}px`,
            right: `${right}px`,
            bottom: `${bottom}px`,
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {children}
        </Link>
        {isHovering && (
          <DetailView
            header={children}
            top={top}
            left={left}
            setIsHovering={setIsHovering}
          />
        )}
      </>
    );
  }
}
