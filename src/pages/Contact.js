import React, { useState } from "react";
import "../styles/contact.css";
import { validateEmail } from "../utils/helpers";
import { AiFillGithub } from "react-icons/ai";
import { GrSend } from "react-icons/gr";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillTwitterCircle, AiOutlineMail } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdPhonelinkRing } from "react-icons/md";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  };

  return (
    <section id="contact">
      <h1 data-testid="h1tag" className="section-header">
        Contact me
      </h1>
      <div className="contact-wrapper">
        <form
          id="contact-form"
          className="form-horizontal"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <div className="col-sm-12">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                onBlur={handleChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <label htmlFor="email">Email address:</label>
              <input
                type="email"
                name="email"
                defaultValue={email}
                onBlur={handleChange}
                className="form-control"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              rows="5"
              defaultValue={message}
              onBlur={handleChange}
              className="form-control"
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button
            data-testid="button"
            className="btn btn-primary send-button"
            type="submit"
          >
            <div className="alt-send-button">
              <GrSend className="filter-white" />
              <span className="send-text">SEND</span>
            </div>
          </button>
        </form>

        <div className="direct-contact-container">
          <ul className="contact-list contact-text">
            <li className="list-item">
              <FaMapMarkerAlt/>
                <span className=" place">Charlotte, NC</span>
            </li>

            <li className="list-item">
              <MdPhonelinkRing/>
                <span className=" phone">
                  <a href="tel:1-980-254-1990" title="Give me a call">
                    (980) 254-1990
                  </a>
                </span>

            </li>

            <li className="list-item">
              <AiOutlineMail/>
                <span className=" gmail">
                  <a
                    href="mailto:onyshchenkosergii@gmail.com"
                    title="Send me an email"
                  >
                    onyshchenkosergii@gmail.com
                  </a>
                </span>
            </li>
          </ul>

          <hr />
          <ul className="social-media-list">
            <li>
              <a
                href="https://github.com/sergiionyx"
                target="_blank"
                rel="noreferrer"
                className="contact-icon"
              >
                <AiFillGithub style={{ fontSize: "3em" }} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sergii-onyshchenko/"
                target="_blank"
                rel="noreferrer"
                className="contact-icon"
              >
                <TiSocialLinkedinCircular style={{ fontSize: "3em" }} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/Illusion0fReal"
                target="_blank"
                rel="noreferrer"
                className="contact-icon"
              >
                <AiFillTwitterCircle style={{ fontSize: "3em" }} />
              </a>
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </section>
  );
}

export default Contact;
