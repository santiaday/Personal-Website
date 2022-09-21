import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function SkillsBar({ skill, value, isScrolled }) {
  return (
    <div style={{ width: "95%" , paddingBottom: "2rem"}}>
      <p className="lead mb-1 mt-2" style={{paddingBottom: "0.3rem", fontWeight: "400"}}>{skill}</p>
      <ProgressBar
      style={{background: "background: linear-gradient(136deg, #0D121D, #273653,#482753, #bc2222, #f28500) 0% 0% / 1200% 1200% !important"}}
      id="progressBarCustom"
        className={!isScrolled ? "progress" : " progress-bar-animation"}
        now={value}
      />
    </div>
  );
}

export default SkillsBar;
