// import MainNavScreen from "./Screens/MainNavScreen";
// import Header from "./UI/Header";

// export default function App() {
//   return (
//     <div>
//       <Header />
//       <div className=" overflow-auto mx-6 bg-slate-100">
//         <MainNavScreen />
//       </div>
//     </div>
//   );
// }
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainNavScreen from "./Screens/MainNavScreen";
import Header from "./UI/Header";
import PageNotFound from "./Screens/PageNotFound";
import DetailScreen from "./Screens/DetailScreen";
import AppLayout from "./UI/AppLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="mindmap" />} />
          <Route path="mindmap" element={<MainNavScreen />} />
          <Route path="detail" element={<DetailScreen />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
