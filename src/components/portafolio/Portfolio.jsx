import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "SPARTAN MOBILE",
    gitHub: "",
    demo: "",
  },
  {
    id: 2,
    image: IMG2,
    title: "REACT-WEATHER",
    gitHub: "https://github.com/WilliamsVelas/react-weather",
    demo: "https://williamsvelas.github.io/react-weather/",
  },
  {
    id: 3,
    image: IMG3,
    title: "PORTFOLIO 3",
    gitHub: "",
    demo: "",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, gitHub, demo }) => {
          return (
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>

              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={gitHub} target="_blank" className="btn">
                  Github
                </a>
                <a href={demo} target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
