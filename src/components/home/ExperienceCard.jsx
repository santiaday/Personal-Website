import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center" style={{paddingBottom: "5rem !important"}}>
        <img className=" mb-3"src={data.companylogo} alt="" />
        <p className="lead" >
          <span id="roleName">{data.role}</span>
          <br />
          {data.date}
        </p>

      </div>
    </Col>
  );
}

export default ExperienceCard;