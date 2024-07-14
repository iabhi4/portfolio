import React from 'react';

const ExperienceCard = ({ data }) => {
  return (
    <div className="experience-card text-center">
      <img className="experience-logo bg-white mb-3" src={data.companylogo} alt="Company Logo" />
      <p className="lead">
        {data.role}
        <br />
        {data.date}
      </p>
    </div>
  );
}

export default ExperienceCard;
/*import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <img className=" bg-white mb-3" src={data.companylogo} alt="" />
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>

      </div>
    </Col>
  );
}

export default ExperienceCard;*/