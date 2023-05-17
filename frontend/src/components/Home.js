import React from "react";
import "../style/home.css";
import pypImg from "../img/p-year-papers.jpg";
import noteImg from "../img/note.webp";
import sylImg from "../img/syl.jpg";
import pathImg from "../img/paths.jpg";
import youImg from "../img/youtube.jpg";

// #1976d2

export default function Home() {
  return (
    <div className="home-body">
      <h1>Students Portal</h1>
      <div className="home-links">
        <div className="home-left-links">
          <p className="">
            <a href="/previous-year-paper" style={{ color: "#1976d2" }}>
              <img src={pypImg}></img>
              Past Year Papers
            </a>
          </p>
          <p className="">
            <a href="/notes">
              <img src={noteImg}></img>
              All Subject Notes
            </a>
          </p>
          <p className="">
            <a href="/syllabus">
              <img src={sylImg}></img>
              Subject Syllabus
            </a>
          </p>
        </div>
        <div
          clssName="home-links-divider"
          style={{
            width: "2px",
            height: "auto",
            backgroundColor: "black",
            borderRadius: "10px",
          }}
        >
          |
        </div>
        <div className="home-right-links">
          <p className="">
            {" "}
            <a href="/guided-paths">
              <img src={pathImg}></img>
              Guided Paths
            </a>
          </p>
          <p className="">
            {" "}
            <a href="#">
              <img src={youImg}></img>
              Study From
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
