import React from "react";
import "../style/notes.css";
import notes from "../img/note.webp";
import home from "../img/home.png";

export default function Notes() {
  return (
    <div className="notes-body">
      <div className="notesHeading">
        <div className="notesHeading-left">
          <img src={notes}></img>
          <h1>Notes</h1>
        </div>
        <div className="notesHeading-right">
          <a href="/">
            <img src={home}></img>
          </a>
        </div>
      </div>
      <div className="border"></div>
      <div className="notesBody">
        <div className="searchNav">
          <input type="search" placeholder="Search Subject Here..."></input>
        </div>

        <div className="notes"></div>
      </div>
    </div>
  );
}
