import React from 'react';
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from './migration';
import { Container, Row, Col } from "react-bootstrap";

const Experience = ({ experiences }) => {
  return (
    <section className="section" id="experiences">
      <Container>
        <Jumbotron className="bg-white">
          <h2 className="display-4 mb-5 text-center">
            {experiences.heading}
          </h2>
          <Row className="justify-content-center">
            {
              experiences.data.map((data, index) => {
                return (
                  <Col key={index} lg="6" className="d-flex justify-content-center">
                    <ExperienceCard data={data} />
                  </Col>
                )
              })
            }
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
}


/*const Experience = ({ experiences }) => {
  return (
    <section className="section">
      <Container>
        <Jumbotron className="bg-white">
          <h2 className="display-4 mb-5 text-center">
            {experiences.heading}
          </h2>
          <Row>
            {
              experiences.data.map((data, index) => {
                return <ExperienceCard key={index} data={data} />
              })
            }
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
}*/

export default Experience;