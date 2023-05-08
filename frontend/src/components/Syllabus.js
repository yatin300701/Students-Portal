import React from "react";
import "../style/syl.css";
import sylImg from "../img/syl.jpg";
import home from "../img/home.png";

export default function Syllabus() {
  return (
    <div className="sylBody">
      <div className="sylHeading">
        <div className="sylHeading-left">
          <img src={sylImg}></img>
          <h1>Syllabus</h1>
        </div>
        <div className="sylHeading-right">
          <a src="#">
            <img src={home}></img>
          </a>
        </div>
      </div>
      <div className="border"></div>
      <div className="sylBody">
        <div className="searchNav">
          <input type="search" placeholder="Search Subject Here..."></input>
        </div>

        <div className="syl"></div>
      </div>
    </div>
  );
}
