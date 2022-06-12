import React from "react";
import { general_data } from "./general_data";
import "./Contact.css";
function Contact() {
  return (
    <section id="contact">
      <h3 className="heading">Contact Me</h3>
      <p>
        Check out my{" "}
        <a href={general_data.links.github} target="_blank">
          <strong>GitHub</strong>
        </a>
        , let's be friends on{" "}
        <a href={general_data.links.linkedIn} target="_blank">
          <strong>LinkedIn</strong>,{" "}
        </a>
        or just send me an{" "}
        <a href={`mailto:${general_data.links.email}`}>
          {" "}
          <strong>Email</strong>
        </a>
        .
      </p>
      <div className="contact__links">
        <a href={general_data.links.github} target="_blank">
          {general_data.icons.github}
        </a>
        <a href={general_data.links.linkedIn} target="_blank">
          {general_data.icons.linkedIn}
        </a>
        <a href={`mailto:${general_data.links.email}`}>
          {general_data.icons.email}
        </a>
      </div>
    </section>
  );
}

export default Contact;
