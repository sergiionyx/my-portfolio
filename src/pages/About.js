import React from "react";
import "../styles/about.css";
import img from "../assets/img/full-stack-skills.png";

const About = () => {
  return (
    <div>
      <h1 id="about-h1">About Me</h1>

      <div className="container p-3">
        <img className="" id="img-skills" src={img} alt="skills" />
        <div className="text-div">
          <h3 className="fs-5">
            &nbsp;&nbsp;&nbsp;&nbsp;I am writing to express my strong interest
            in being the Full Stack Developer. With my skills and background, I
            am confident that I will quickly surpass your expectations for this
            role.
            <br></br>&nbsp;&nbsp;During education in bootcamp of the{" "}
            <b>University of North Carolina at Charlotte(UNC)</b> I have been
            developing web applications using all necessary knowledges, skills
            and tools to create quality and complete product.
            <br></br>&nbsp;&nbsp;&nbsp;&nbsp;I have advanced proficiencies in
            <b> HTML, CSS, JavaScript</b>, excellent skills in <b>React</b> and
            am familiar with <b>Git, npm, Jest, Webpack</b>. I also have a solid
            foundation in
            <b> SQLite, MySQL, MongoDB, Mongoose, Express and Node.JS</b>. In
            addition to year of work experience, I hold a Certificate of
            comleted course of Full Stack Web Developer from the UNC of
            Charlotte.
            <br></br>&nbsp;&nbsp;&nbsp;My excellent work ethic has provided me
            with many opportunities to accomplish goals that have earned me
            recognition at work. Some of these accomplishments include: wrote
            numerous unit and API tests, developed web design solutions and
            applications, resolved more than 50 critical bugs to improve
            performance and user experience. I am confident that you will find
            my hands-on experience; qualifications and proficiencies make me an
            excellent candidate for the Full Stack Developer position at any
            company.
            <br></br>&nbsp;&nbsp;&nbsp;Thank you for your time. Please let me
            know if there is anything you need from me by checking the Contact.
            {/* 
    Dear Ms. Elwright, I am writing to express my strong interest in being
    the next Full Stack Developer at Majestic Digital Technologies. With
    my skills and background, I am confident that I will quickly surpass
    your expectations for this role. In my role as Full Stack Developer at
    RSA Consulting, I have been tasked with developing training materials
    including Computer Based Training, developing web applications such as
    front-end user interface, database management, liaising with customers
    and internal team and assisting with help desk tickets. I have the
    required skills outlined in the job description. I have advanced
    proficiencies in HTML, CSS, JavaScript, excellent customer service
    skills and am familiar with SQL. I also have a solid foundation in
    MongoDB, Express, AngularJS, and Node.JS. In addition to four years
    work experience, I hold a Bachelor degree in Computer Science. I have
    obtained TS clearance and have the ability to obtain a SCI if so
    required. My excellent work ethic has provided me with many
    opportunities to accomplish goals that have earned me recognition at
    work. Some of these accomplishments include: Wrote numerous unit and
    API tests Developed web design solutions and applications for clients
    winning past and current employers six-figure contracts Resolved more
    than 250 critical bugs to improve performance and user experience I am
    confident that you will find my hands-on experience; qualifications
    and proficiencies make me an excellent candidate for the Full Stack
    Developer position at Majestic Digital. Thank you for your time and
    consideration. Please let me know if there is anything further you
    need from me. Sincerely Nicholas McGregor */}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
