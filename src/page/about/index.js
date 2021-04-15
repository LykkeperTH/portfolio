import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
const About = () => {
  return (
    <React.Fragment>
      <Container style={{ marginTop: "20px" }}>
        <Row className="justify-content-md-center">
          <Col xs={2}>
            <Image
              src="https://source.unsplash.com/user/erondu/171x180"
              roundedCircle
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default About;
