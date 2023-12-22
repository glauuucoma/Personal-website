import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col lg={4} md={6} sm={12}>
      <a href={url} target="_blank" rel="noopener noreferrer"> {/* Add anchor tag here */}
        <div className="proj-imgbx">
          <img src={imgUrl} alt="project pic"/>
          <div className="proj-txt">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};