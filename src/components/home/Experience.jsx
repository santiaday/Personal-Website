import React from 'react';
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";

const Experience = ({ experiences }) => {
  return (
    <Jumbotron id="experiences" className="m-0" style={{backgroundColor: "rgba(255,255,255, 0.6)"}}>
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
        <h2 className="display-2 mb-5 text-center gradientText">
          {experiences.heading}
        </h2>
        <br />
        <br />
        <Row>
          {
            experiences.data.map((data, index) => {
              return <ExperienceCard key={index} data={data} />
            })
          }
        </Row>
      </Jumbotron>

  );
}

export default Experience;