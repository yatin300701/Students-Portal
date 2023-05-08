import React from "react";
import "../style/pyp.css";
import ppyimg from "../img/p-year-papers.jpg";
import home from "../img/home.png";

export default function Pyp() {
  return (
    <div className="pypBody">
      <div className="pypHeading">
        <div className="pypHeading-left">
          <img src={ppyimg}></img>
          <h1>Past Year Papers</h1>
        </div>
        <div className="pypHeading-right">
          <a src="#">
            <img src={home}></img>
          </a>
        </div>
      </div>
      <div className="border"></div>
      <div className="pypBody">
        <div className="searchNav">
          <input type="search" placeholder="Search Subject Here..."></input>
        </div>

        <div className="papers"></div>
      </div>
    </div>
  );
}
