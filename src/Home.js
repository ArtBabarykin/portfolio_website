import React, { useState } from "react";
import { general_data } from "./general_data";
import "./Home.css";

function Home() {
  window.addEventListener("scroll", () =>
    document
      .querySelector("header")
      .classList.toggle("active", window.scrollY > 0)
  );

  const [menuOpen, setMenuOpen] = useState(false);

  function toggle() {
    const burgerMenu = document.querySelector(".header__burger");
    const nav = document.querySelector(".navbar");
    const nav__items = document.querySelectorAll(".nav__item");

    if (!menuOpen) {
      burgerMenu.classList.add("open");
      nav.classList.add("open");
      setMenuOpen(true);
    } else {
      burgerMenu.classList.remove("open");
      nav.classList.remove("open");
      setMenuOpen(false);
    }

    nav__items.forEach((element) => {
      element.addEventListener("click", () => {
        burgerMenu.classList.remove("open");
        nav.classList.remove("open");
        setMenuOpen(false);
      });
    });
  }

  return (
    <section id="home">
      <video autoPlay loop muted>
        <source src="./hero_video.mp4" type="video/mp4" />
      </video>
      <header>
        <div className="header__links">
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
        <nav>
          <ul className="navbar">
            <li className="nav__item">
              <a href="#home">Home </a>
            </li>

            <li className="nav__item">
              <a href="#about">About </a>
            </li>

            <li className="nav__item">
              <a href="#skills">Skills </a>
            </li>

            <li className="nav__item">
              <a href="#projects">Projects </a>
            </li>

            <li className="nav__item">
              <a href="#contact">Contact </a>
            </li>
          </ul>
        </nav>
        <div className="header__burger" onClick={toggle}>
          <div className="header__burger__lines"></div>
        </div>
      </header>

      <div className="container">
        <div className="home__content">
          <h2>Welcome to my Portfolio</h2>
          <h1>Art Babarykin</h1>
          <h3>Front-End Developer</h3>.
        </div>
      </div>
    </section>
  );
}

export default Home;
