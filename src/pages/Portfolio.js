import React from "react";
import "../styles/portfolio.css";

const Portfolio = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Portfolio</h1>
      <div className="container" style={{ textAlign: "center" }}>
        {/* 1col 1row */}
        <div className="col">
          <p>
            <a
              href="https://joshuad1590.github.io/national-park-picker/"
              style={{ textDecoration: "none" }}
            >
              check App
            </a>
            &nbsp; or &nbsp;
            <a
              href="https://github.com/joshuad1590/national-park-picker"
              style={{ textDecoration: "none" }}
            >
              Code
            </a>
          </p>
          <div className="card-container">
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="card">
              <h4>Trucked Up</h4>
              <p>
                MERN project for interactions inside company between dispatcher
                and company drivers, creating assignments, adding projects
              </p>
            </div>
          </div>

          {/* 1col 2 row */}
          <p>
            <a href="./" style={{ textDecoration: "none" }}>
              check App
            </a>
            &nbsp; or &nbsp;
            <a
              href="https://github.com/willjduncan/trucked-up"
              style={{ textDecoration: "none" }}
            >
              Code
            </a>
          </p>
          <div className="card-container">
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="card">
              <h4>Pizza Maker</h4>
              <p>
                An app where users can create their favorite pizzas with
                whatever toppings they wish and can comment on the creations of
                others.
              </p>
            </div>
          </div>
          {/* 3.1
         <div className="card-container">
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="card">
              <h4>
                NASA Finds Ancient Organic Material, Mysterious Methane on Mars
              </h4>
              <span className="chev">&rsaquo;</span>
            </div>
          </div> */}
        </div>

        {/* 2col 1row */}
        <div className="col">
          <p>
            <a
              href="https://joshuad1590.github.io/national-park-picker/"
              style={{ textDecoration: "none" }}
            >
              check App
            </a>
            &nbsp; or &nbsp;
            <a
              href="https://github.com/sergiionyx/national-park-picker"
              style={{ textDecoration: "none" }}
            >
              Code
            </a>
          </p>
          <div className="card-container">
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="card">
              <h4>National Park Picker</h4>
              <p>
                National Park Picker is a platform made to explore and plan
                visits to National Parks within the USA
              </p>
            </div>
          </div>

          {/* 2col 2row */}
          <p>
            <a
              href="https://ancient-lake-89166.herokuapp.com/notes"
              style={{ textDecoration: "none" }}
            >
              check App
            </a>
            &nbsp; or &nbsp;
            <a
              href="https://github.com/sergiionyx/note-taker"
              style={{ textDecoration: "none" }}
            >
              Code
            </a>
          </p>
          <div className="card-container">
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="card">
              <h4>Note Tacker</h4>
              <p>
                Note Taker is a program that allows a user to write, keep, and
                delete notes.
              </p>
            </div>
          </div>

          {/* <div className="card-container">
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="card">
              <h4>Astronomers Spot a Distant and Lonely Neutron Star</h4>
              <span className="chev">&rsaquo;</span>
            </div>
          </div> */}
        </div>

        {/* 3col 1row */}
        <div className="col">
          <p>
            <a
              href="https://nerdblog1.herokuapp.com/"
              style={{ textDecoration: "none" }}
            >
              check App
            </a>
            &nbsp; or &nbsp;
            <a
              href="https://github.com/sergiionyx/nerd-blog"
              style={{ textDecoration: "none" }}
            >
              Code
            </a>
          </p>
          <div className="card-container">
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="card">
              <h4>Nerd Blog</h4>
              <p>
                This Full Stack Blog allows developers to read, post, and manage
                their posts revolving around the world of technology.
              </p>
            </div>
          </div>

          {/* 3col 3 row */}
          <p>
            <a
              href="https://radiant-headland-82458.herokuapp.com/"
              style={{ textDecoration: "none" }}
            >
              check App
            </a>
            &nbsp; or &nbsp;
            <a
              href="https://github.com/sergiionyx/personal-accounter-pwa"
              style={{ textDecoration: "none" }}
            >
              Code
            </a>
          </p>
          <div className="card-container">
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="card">
              <h4>Personal Accounter PWA</h4>
              <p>
                {" "}
                This app make the user be able to track my withdrawals and
                deposits with or without a data/internet connection.
              </p>
            </div>
          </div>

          {/* <div className="card-container">
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="card">
              <h4>
                Tiny Asteroid Discovered Saturday Disintegrates Hours Later Over
                Southern Africa
              </h4>
              <span className="chev">&rsaquo;</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
