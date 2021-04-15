import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import data from "../../resume.json";
import profile from "../../assets/profile.jpg";
const About = () => {
  return (
    <React.Fragment>
      <h1 style={{ justifyContent: "center", display: "flex" }}>About Me</h1>
      <Container style={{ marginTop: "20px" }}>
        <Row
          className="justify-content-md-center"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            src={profile}
            roundedCircle
            style={{ width: "250px", height: "250px" }}
          />
          {data.map((about, index) => {
            return (
              <Row
                key={index}
                style={{ textAlign: "center", display: "contents" }}
              >
                <Col></Col>
                <Col>
                  <p>Name :{about.basics.name}</p>
                  <p>Date of birth : {about.basics.dateOfBirth}</p>
                  <p>Age : {about.basics.age}</p>
                  <p>Height / weight : {about.basics.hightWeight}</p>
                  <p>Nationality : {about.basics.nationality}</p>
                  <p>Religion : {about.basics.religion}</p>
                  <p>Address : {about.basics.location.address}</p>
                  <p>Email : {about.basics.email}</p>
                  <p>Contact : Tel {about.basics.contact}</p>
                </Col>
              </Row>
            );
          })}
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default About;
