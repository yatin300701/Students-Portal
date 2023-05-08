import React from "react";
import "../style/header.css";
import gu from "../img/gu.jfif";

export default function Header() {
  return (
    <>
      <div className="navbar">
        <img src={gu} width="120px" height="120px" alt="bb" />

        <div
          className="head"
          style={{ backgroundColor: "black", color: "white" }}
        >
          Gurugram University
        </div>
      </div>
    </>
  );
}
