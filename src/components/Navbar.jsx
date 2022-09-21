import React, { useState, useMemo, useEffect, useRef } from "react";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  mainBody,
  repos,
  about,
  skills,
  experiences,
} from "../editable-stuff/config.js";
import { NavLink } from "./home/migration";
import "./home/styles.scss"

const Navigation = React.forwardRef((props, ref) => {
  // const { showBlog, FirstName } = config;
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const [isHovering, setIsHovering] = useState(false);

  function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);
  
    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting),
        ),
      [],
    );
  
    useEffect(() => {
      observer.observe(ref.current);
  
      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);
  
    return isIntersecting;
  }



  const ref1 = useRef(document.getElementsByClassName("altAboutMeButton"));
  const isInViewport1 = useIsInViewport(ref);
  

  return (
    <Navbar onMouseEnter={()=>setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)} style={{backgroundColor: !isHovering ? isInViewport1 ? "transparent" : "rgba(0, 0, 0, 0.2)" : isInViewport1 ? "transparent" : "rgba(0, 0, 0, 0.8)"}}
      ref={navbarMenuRef}
      className={`px-3 fixed-top  ${
        !isTop ? "navbar-white" : "navbar-transparent"
      }`}
      expand="lg"
    >
      <Navbar.Brand
        className="navbar-brand"
        id="navbarCustom"
        href={process.env.PUBLIC_URL + "/#home"}
      >
        <span style={{ fontWeight: "bold" }}>SANTIAGO</span>ADAY
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto" >
          {/* {
            <NavLink className="nav-item lead">
              <Link to={process.env.PUBLIC_URL + "/blog"}>Blog</Link>
            </NavLink>
          } */}
          {about.show && (
            <NavLink
              className="nav-item lead navbarLinks"
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
                            <div class="crosshair section">
                <nav class="link-effect-14" id="link-effect-14">
                  <a style={{textDecoration: "none"}}>
                    <span>About</span>
                  </a>
                </nav>
              </div>
            </NavLink>
          )}
          {repos.show && (
            <NavLink
              className="nav-item lead navbarLinks"
              href={process.env.PUBLIC_URL + "/#projects"}
            >
                            <div class="crosshair section">
                <nav class="link-effect-14" id="link-effect-14">
                  <a style={{textDecoration: "none"}}>
                    <span>Projects</span>
                  </a>
                </nav>
              </div>
            </NavLink>
          )}
          {experiences.show && (
            <NavLink
              className="nav-item lead navbarLinks"
              href={process.env.PUBLIC_URL + "/#experiences"}
            >
                            <div class="crosshair section">
                <nav class="link-effect-14" id="link-effect-14">
                  <a style={{textDecoration: "none"}}>
                    <span>Experience</span>
                  </a>
                </nav>
              </div>
            </NavLink>
          )}

          {skills.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#skills"}
            >
              <div class="crosshair section">
                <nav class="link-effect-14" id="link-effect-14">
                  <a style={{textDecoration: "none"}}>
                    <span>Skills</span>
                  </a>
                </nav>
              </div>
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
