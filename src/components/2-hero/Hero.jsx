import "./hero.css";
import Lottie from "lottie-react";
import webdev from "../../../public/animation/Animation - 1712669223779.json";

const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <img src="./me.jpg" className="avatar" alt="Avatar" />
          <div className="icon-verified"></div>
        </div>

        <h1 className="title">
          Amoura Sidali <br />
          Full Stack Developer
        </h1>
        <p className="sub-title">
          <p className="sub-title">
            Hello, I’m Amoura Sidali, a Full Stack Developer and freelance
            developer with 5 years of experience. I specialize in web
            development with HTML, CSS, ReactJS, and GitHub, and I have
            expertise in data analysis using Python as a trained data scientist.
          </p>
        </p>

       
        <br />
        <br />

        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github">
            <a
              href="https://github.com/sidaliam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>

      <div>
        <Lottie style={{ height: 220 }} animationData={webdev} />
      </div>
    </section>
  );
};

export default Hero;
