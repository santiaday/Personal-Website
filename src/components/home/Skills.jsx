import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import styled, { css } from 'styled-components'

const Skills = React.forwardRef(({ heading, skills1, skills2, skills3 }, ref) => {
  const skillsTabRef = React.useRef(null);
  //const navbarDimensions = useResizeObserver(navbarMenuRef);

  const Skill = styled.div.attrs((color) => ({tabIndex: 0}))`
  
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  border-radius: calc(var(--curve) * 1px);
  overflow: hidden;
  text-decoration: none;
  transition: transform 0.3s, box-shadow 0.3s;
  border: none !important;
  border-color: transparent !important;
  &:hover {
    box-shadow: 10px 10px 42px 6px ${props => "#" + props.color};
-webkit-box-shadow: 10px 10px 42px 6px ${props => "#" + props.color};
-moz-box-shadow: 10px 10px 42px 6px ${props => "#" + props.color};
    transform: translateY(-2px);
    transition: transform 0.2s, box-shadow 0.2s;
  }
`


  return (
    <Jumbotron id="experiences" className="m-0" style={{backgroundColor: "rgba(255,255,255, 0.6)"}}>
        <h2 ref={skillsTabRef} className="display-2 pb-5 text-center gradientText">
          {heading}
        </h2>
        <br />

 <div class="slider">
	<div class="slide-track">

  {skills1.map((skill) => {
      return (
        <div class="slide">
        <img src={skill.link} height="100" width="250" alt="" />
      </div>
  )
    })}




	</div>
</div>
<br />
<br />
<br />
<br />
<div class="slider-alt">
	<div class="slide-track">
  {skills2.map((skill) => {
      return (
        <div class="slide">
        <img src={skill.link} height="100" width="250" alt="" />
      </div>
  )
    })}
	</div>
</div>

<br />
<br />
<br />
<br />

<div class="slider">
	<div class="slide-track">
  {skills3.map((skill) => {
      return (
        <div class="slide">
        <img src={skill.link} height="100" width="250" alt="" />
      </div>
  )
    })}
	</div>
</div>

    </Jumbotron>
  );
});

export default Skills;
