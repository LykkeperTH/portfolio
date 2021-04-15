import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import data from "../../resume.json";
import profile from "../../assets/profile.jpg";
const About = () => {
  return (
    <React.Fragment>
      <Container style={{ marginTop: "20px" }}>
        <Row className="justify-content-md-center">
          <Col xs={2}>
            <Image
              src={profile}
              roundedCircle
              style={{ width: "250px", height: "250px" }}
            />
          </Col>
        </Row>
        {data.map((about, index) => {
          return (
            <Row key={index}>
              <Col>
                <p>Name : {about.basics.name}</p>
                <p>Date of birth : {about.basics.dateOfBirth}</p>
                <p>Age : {about.basics.age}</p>
                <p>Height / weight : {about.basics.hightweight}</p>
                <p>Nationality : {about.basics.nationality}</p>
                <p>Religion : {about.basics.religion}</p>
                <p>Email : {about.basics.email}</p>
                <p>Contact : Tel {about.basics.contact}</p>
                <p>Adress : {about.basics.location.address}</p>
              </Col>
              <Col></Col>
            </Row>
          );
        })}
      </Container>
    </React.Fragment>
  );
};
export default About;
