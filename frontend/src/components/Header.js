import React from "react";
import "../style/header.css";

export default function Header() {
  return (
    <>
      <div className="navbar">
        <img src="../img/home.png" width="120px" height="120px" alt="bb" />

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
