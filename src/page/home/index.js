import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import Experience from "../experience";
import Skill from "../skill";

const Home = () => {
  return (
    <React.Fragment>
      <Container fluid="md">
        <Jumbotron style={{ marginTop: "10px" }}>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Jumbotron>
      </Container>
      <Experience />
      <Skill />
    </React.Fragment>
  );
};
export default Home;
