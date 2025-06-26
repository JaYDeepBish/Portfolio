import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Ai-Trip-Planner"
              description="An AI trip planner uses artificial intelligence to design customized travel plans. It analyzes user preferences, budget, and timing to suggest destinations, activities, and accommodations, simplifying and speeding up the travel planning process"
              ghLink="https://github.com/JaYDeepBish/ai-trip-planner-web"
              demoLink="https://ai-trip-planner-web-77ai.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Multiple Disease Prediction"
              description="A multiple disease prediction system built using Python and machine learning can analyze user input symptoms to predict potential diseases like diabetes, heart disease, and cancer. It enhances early diagnosis by leveraging trained models for accurate, fast results"
              ghLink="https://github.com/JaYDeepBish/Multiple_Disease_Prediction.git"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="NewsWeb"
              description="A new web application using React offers a fast, responsive user experience by building UI with reusable components. React's virtual DOM ensures efficient rendering, making it ideal for single-page apps like dashboards, e-commerce sites, or social platforms."
              ghLink="https://github.com/JaYDeepBish/NewWeb.git"
              demoLink="https://new-web-pied.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Portfolio using javascript"
              description="A portfolio using JavaScript showcases personal projects, skills, and contact info with interactive features like dark mode, form validation, and smooth scrolling. JavaScript enhances user experience and adds dynamic behavior to the website"
              ghLink="https://github.com/JaYDeepBish/Port.git"
              demoLink="https://port-six-rose.vercel.app/"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
