import React from "react";
import "../style/body.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Pyp from "./Pyp";
import Notes from "./Notes";
import Syllabus from "./Syllabus";

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
            <Route path="/previous-year-paper" element={<Pyp />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/syllabus" element={<Syllabus />} />
            {/* <Route component={NotFound} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
