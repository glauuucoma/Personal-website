import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projFront1 from "../assets/img/projects_1.png";
import projFront2 from "../assets/img/projects_2.png";
import projFront3 from "../assets/img/projects_8.png";
import projIOS1 from "../assets/img/projects_3.png";
import projIOS2 from "../assets/img/projects_4.png";
import projPython1 from "../assets/img/projects_5.png";
import projPython2 from "../assets/img/projects_6.png";
import projPython3 from "../assets/img/projects_7.png";

export const Projects = () => {
  /* Front-End - Projects */

  const projectsFront = [
    {
      title: "Netflix Clone",
      description:
        "Full Stack Netflix Clone project, showcasing the use of React, Next.js, Tailwind CSS, Prisma, MongoDB, and NextAuth",
      imgUrl: projFront3,
      url: "https://github.com/glauuucoma/Netflix-Clone",
    },
    {
      title: "Product website",
      description:
        "Multi-page website featuring courses, a form page, and other relevant content. I practiced building complex HTML and CSS layouts while incorporating JavaScript functionalities",
      imgUrl: projFront2,
      url: "https://github.com/glauuucoma/WEB-ProductWebsite",
    },
    {
      title: "Personal website",
      description:
        "Welcome to my portfolio, a dynamic display of my work as a Computer Science student and Software Engineer Intern, meticulously crafted using React, Bootstrap, and the animate.css library",
      imgUrl: projFront1,
      url: "https://github.com/glauuucoma/Personal-website",
    },
  ];

  /* iOS - Projects */

  const projectsIOS = [
    {
      title: "Home screen prototype",
      description:
        "This project is my exploration of mobile interface design, I decided to experiment with the Mobile interface. The home screen features an embedded YouTube video, a sleek carousel for content display, and a side menu",
      imgUrl: projIOS1,
      url: "https://github.com/glauuucoma/Home-Screen-Prototype",
    },
    {
      title: "Coffee Ordering App",
      description:
        "Coffee ordering app created with Swift, SwiftUI, WebKit, and developed using Xcode. The app allows users to easily order their favorite coffee beverages",
      imgUrl: projIOS2,
      url: "https://github.com/glauuucoma/Coffee-Ordering-App",
    },
  ];

  /* Python - Projects */

  const projectsPython = [
    {
      title: "Sort Visualizer",
      description:
        "Sort Visualizer, written in Python with Pygame, visually demonstrates the merge sort and bubble sort algorithms, offering a clear and engaging way to understand how sorting algorithms organize data",
      imgUrl: projPython1,
      url: "https://github.com/glauuucoma/Sort-Visualizer",
    },
    {
      title: "Stock Market Predictor",
      description:
        "Developed in Jupyter Notebook, employs machine learning to predict S&P500 stock price movements. The model aids in identifying favorable market conditions for informed investment decisions",
      imgUrl: projPython2,
      url: "https://github.com/glauuucoma/ML-Market-Prediction",
    },
    {
      title: "Meeting Scheduler (In Development)",
      description:
        "Console app that follows OOP principles, designed to simplify the coordination of meeting schedules. In this beta phase, two users can use the app to discover overlapping available time slots for their meetings",
      imgUrl: projPython3,
      url: "https://github.com/glauuucoma/TimeRange",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Discover a range of my projects, encompassing Front-End Web
              Development, iOS App Design, and Python Programming. Each one
              showcases my skills and dedication to creating functional and
              innovative solutions.
            </p>
            <Tab.Container id="projects-tab" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Front-End</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Python</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">iOS Development</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projectsFront.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projectsPython.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          title={project.title}
                          description={project.description}
                          imgUrl={project.imgUrl}
                          url={project.url}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projectsIOS.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          title={project.title}
                          description={project.description}
                          imgUrl={project.imgUrl}
                          url={project.url}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
