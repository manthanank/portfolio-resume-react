import React from "react";

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    var internship = data.internship.map(function (internship) {
      return (
        <div key={internship.company}>
          <h3>{internship.company}</h3>
          <p className="info">
            {internship.title}
            <span>&bull;</span> <em className="date">{internship.years}</em>
          </p>
          <p>{internship.description}</p>
        </div>
      );
    });
    var training = data.training.map(function (training) {
      return (
        <div key={training.company}>
          <h3>{training.company}</h3>
          <p className="info">
            {training.title}
            <span>&bull;</span> <em className="date">{training.years}</em>
          </p>
          <p>{training.description}</p>
        </div>
      );
    });
    var skills = data.skills.map(function (skills) {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row internship">
        <div className="three columns header-col">
          <h1>
            <span>internship</span>
          </h1>
        </div>

        <div className="nine columns main-col">{internship}</div>
      </div>

      <div className="row training">
        <div className="three columns header-col">
          <h1>
            <span>training</span>
          </h1>
        </div>

        <div className="nine columns main-col">{training}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
