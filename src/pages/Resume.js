import React from "react";
import resume from "../assets/docs/Sergii-Onyshchenko-Resume.pdf";
import "../styles/resume.css";

function Resume() {
  return (
    <section id="resume">
      <h1 className="m-4">Resume</h1>
      <h3 className="resume-link">
        Download my resume(.pdf){" "}
        <a href={resume} target="_blank" rel="noreferrer" download="Sergii-Onyshchenko-Resume">
          here.
        </a>
      </h3>
      <div>
        <embed src={resume} type="application/pdf" width="60%" height="600px" />
      </div>
    </section>
  );
}

export default Resume;
