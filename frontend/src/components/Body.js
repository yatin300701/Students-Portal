import React from "react";
import "../style/body.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Pyp from "./Pyp";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pyp",
    element: <Pyp />,
  },
];

export default function Body() {
  //   const route = useRoutes(routes);
  return (
    <>
      <div className="main-body">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<Pyp />} />
            {/* <Route component={NotFound} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
