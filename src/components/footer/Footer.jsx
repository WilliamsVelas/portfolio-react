import React from "react";
import "./footer.css";
//! ICONS
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

function Footer() {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#experience">Experience</a>
        </li>

        <li>
          <a href="#services">Services</a>
        </li>

        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="">
          <FiInstagram />
        </a>

        <a href="">
          <FaFacebookF />
        </a>

        <a href="">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Williams Velasquez. Todos los derechos reservados.</small>
      </div>
    </footer>
  );
}

export default Footer;
