import React from "react";
import { CgChevronUpO } from "react-icons/cg";
import "./About.css";

function About() {
  const aboutImg = "./avatar copy.jpg";
  window.addEventListener("scroll", () =>
    document
      .querySelector(".go_to_top")
      .classList.toggle("active", window.scrollY > 500)
  );
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="about" />
          </div>
          <div className="col__2">
            <h3 className="heading">About Me</h3>
            <div>
              <p>
                I am passionate about web development and creating intuitive,
                dynamic user experiences. I build websites and web applications
                with HTML, CSS, and JavaScript (ES6/ES7).
              </p>
              <p>
                My framework of choice is React. I have experience working with
                React Hooks, React Router, Functional Components, Contex API and
                Redux. For UI styling I use Saas, Less, Styled Components,
                Material UI and Bootstrap.
              </p>
              <p>
                In terms of backend provisioning I prefer Firebase
                (Authentication, Firestore, Cloud Function, Hosting). At the
                same time I am a certified AWS Cloud Practitioner and have basic
                knowledge of the Amazon Cloud too. I have experience with GitHub
                and build processes and am familiar with server-side
                technologies like Node.js (Express), relational databases
                (MongoDB) and REST APIs.
              </p>
              <p>
                I am a well organized, responsible and easy to work with person.
                Always enjoying to working on finding the best solution and
                optimizing processes.
              </p>
            </div>
            <div className="button_group">
              <a href="./Artsiom_Babarykin_CV.pdf" download>
                Download CV
              </a>
              <a href="#contact">Contact Me</a>
            </div>
          </div>
        </div>
        <a href="#home">
          <CgChevronUpO className="go_to_top" />
        </a>
      </div>
    </section>
  );
}

export default About;
