import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div>
      <Header />
      <main className=" overflow-scroll mx-6 bg-slate-100">
        <Outlet />
      </main>
    </div>
  );
}
