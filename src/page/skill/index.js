import { Container, Jumbotron } from "react-bootstrap";

const Skill = () => {
  return (
    <Container fluid="md">
      <Jumbotron style={{ marginTop: "10px" }}>
        <h1>Fluid jumbotron</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </Jumbotron>
    </Container>
  );
};
export default Skill;
