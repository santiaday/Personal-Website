import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import styled, { css } from 'styled-components'



const ProjectCard = ({ value , image, color }) => {

  const Card = styled.div.attrs((color) => ({tabIndex: 0}))`
  
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
    <li >
      <Card color={color}>
    <a href=""> 
      <img src={image} class="card__image" alt=""  />
    </a>      
    </Card>
  </li>
  );
};

export default ProjectCard;
