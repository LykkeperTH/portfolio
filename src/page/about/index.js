import React from "react";
import { Col, Container } from "react-bootstrap";
import data from "../../resume.json";
import profile from "../../assets/profile.jpg";
import { StyleImage, StyleRow, StyleRowContent } from "./style";
const About = () => {
  return (
    <React.Fragment>
      <h1 style={{ justifyContent: "center", display: "flex" }}>About Me</h1>
      <Container style={{ marginTop: "20px" }}>
        <StyleRow className="justify-content-md-center">
          <StyleImage src={profile} roundedCircle />
          {data.map((about, index) => {
            return (
              <StyleRowContent
                key={index}
                style={{ textAlign: "center", display: "contents" }}
              >
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
              </StyleRowContent>
            );
          })}
        </StyleRow>
      </Container>
    </React.Fragment>
  );
};
export default About;
