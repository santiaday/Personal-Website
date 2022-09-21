import React from "react";
import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';
import { Jumbotron } from "./migration";
import { BsFillArrowDownCircleFill } from "react-icons/bs"
import "./styles.css";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: "transparent",
          backgroundSize: "1200% 1200%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="background" style={{maxHeight: "0px", maxWidth: "0px"}}>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
        <Container className="text-center">
          <h1 ref={ref} className="display-1" style={{fontWeight: "400"}}>
            {title}
          </h1>
          <Typist>
            <div className="lead typist" style={{fontWeight: "400"}}>
              {message}
            </div>
          </Typist>
          <div className="p-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i className={`fab ${icon.image}  fa-3x socialicons`} />
              </a>
            ))}
          </div>
          <button class="btn btn-primary customAboutMeBtn about-me-send-button" id="transparentBackgroundId resumeBtnTex" onClick={() => document.getElementById('aboutme').scrollIntoView()}>
        <div class="altAboutMeButton" id="transparentBackgroundId">
        <span class="about-me-send-text" style={{paddingBottom: "4px", transform: "translateY(-7px)"}}><a href="#aboutMe" download style={{textDecoration: "none", color: "white"}}>More About Me</a></span><BsFillArrowDownCircleFill id="arrowId"></BsFillArrowDownCircleFill>
        </div>
      </button>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
