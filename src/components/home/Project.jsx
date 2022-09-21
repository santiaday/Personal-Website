import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";


const Project = ({ repos }) => {



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
<h2 className="display-2 pb-5 text-center gradientText">Recent Work</h2>
<ul class="cards">

 {repos.map((project) => {
  return(
    <ProjectCard name={project.projectName} link={project.projectLink} stack={project.projectStack} image={project.projectImg} color={project.projectColor}/>
  )
 })}
</ul>
</Jumbotron>
  );
};

export default Project;
