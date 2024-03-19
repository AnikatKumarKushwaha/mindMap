import React from "react";
import { useLocation } from "react-router-dom";

export default function DetailScreen() {
  let { state } = useLocation();
  console.log(state);
  return (
    <div className="h-screen flex justify-center items-center text-3xl font-bold ">
      {state} Screen
    </div>
  );
}
