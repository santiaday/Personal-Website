import React from "react";
import Col from "react-bootstrap/Col";
import SkillsBar from "./SkillsBar";

function SkillsSection({ skills, isScrolled }) {
  return (
    <>
      {skills.map((skill, index) => (
        <SkillsBar
          key={`${skill}-${index}`}
          skill={skill.name}
          value={skill.value}
          isScrolled={isScrolled}
        />
      ))}
    </>
  );
}

function SkillsTab({ skills, isScrolled }) {
  return (
    <>
      <Col xs={12} md={12} style={{paddingBottom: "1rem"}}>
        <SkillsSection style={{paddingBottom: "1rem !important"}}
          skills={skills.slice(0, Math.floor(skills.length))}
          isScrolled={isScrolled}
        />
      </Col>
    </>
  );
}

export default SkillsTab;
