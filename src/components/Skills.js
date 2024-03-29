import skill1 from "../assets/img/skills-react.png";
import skill2 from "../assets/img/skills-python.png";
import skill3 from "../assets/img/skills-git.png";
import skill4 from "../assets/img/skills-swift.png";
import skill5 from "../assets/img/skills-html.png";
import skill6 from "../assets/img/skills-css.png";
import skill7 from "../assets/img/skills-javascript.png";
import skill8 from "../assets/img/skills-mongodb.png";
import skill9 from "../assets/img/skills-tailwindcss.svg";
import skill10 from "../assets/img/skills-nodejs.svg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I have a solid background in Front End and iOS development,
                specializing in crafting user-friendly interfaces. Currently,
                I'm expanding my skill set by delving into Python, while also
                diving into TypeScript, Next.js, and Node.js to further enhance
                my programming skills
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={skill9} alt="Skill" />
                  <h5>Tailwind CSS</h5>
                </div>
                <div className="item">
                  <img src={skill10} alt="Skill" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={skill1} alt="Skill" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={skill2} alt="Skill" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={skill8} alt="Skill" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={skill3} alt="Skill" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={skill4} alt="Skill" />
                  <h5>Swift</h5>
                </div>
                <div className="item">
                  <img src={skill5} alt="Skill" />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img src={skill6} alt="Skill" />
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <img src={skill7} alt="Skill" />
                  <h5>JavaScript</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
