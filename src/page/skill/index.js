import { Card, Container, ProgressBar } from "react-bootstrap";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/js.svg";
import react from "../../assets/reactjs.svg";
import node from "../../assets/nodejs.svg";
import nest from "../../assets/nestjs.svg";
import sql from "../../assets/sql.svg";
import git from "../../assets/git.svg";
const Skill = () => {
  return (
    <Container
      fluid="md"
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
        flexWrap: "wrap",
      }}
    >
      <Card
        style={{
          width: "18rem",
          marginTop: "20px",
          textAlign: "center",
          border: "0px",
        }}
      >
        <Card.Img variant="bottom" src={html} />
        <Card.Body>
          <Card.Title>
            <Card.Text>HTML</Card.Text>
            <ProgressBar now={90} />
          </Card.Title>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: "18rem",
          marginTop: "20px",
          textAlign: "center",
          border: "0px",
        }}
      >
        <Card.Img variant="top" src={css} />
        <Card.Body>
          <Card.Title>
            <Card.Text>CSS</Card.Text>
            <ProgressBar now={80} />
          </Card.Title>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: "18rem",
          marginTop: "20px",
          textAlign: "center",
          border: "0px",
        }}
      >
        <Card.Img variant="top" src={js} />
        <Card.Body>
          <Card.Title>
            <Card.Text>JAVA Script</Card.Text>
            <ProgressBar now={90} />
          </Card.Title>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: "18rem",
          marginTop: "20px",
          textAlign: "center",
          border: "0px",
        }}
      >
        <Card.Img variant="top" src={react} />
        <Card.Body>
          <Card.Title>
            <Card.Text>ReactJs</Card.Text>
            <ProgressBar now={85} />
          </Card.Title>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: "18rem",
          marginTop: "20px",
          textAlign: "center",
          border: "0px",
        }}
      >
        <Card.Img variant="top" src={node} />
        <Card.Body>
          <Card.Title>
            <Card.Text>NodeJs</Card.Text>
            <ProgressBar now={55} />
          </Card.Title>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: "18rem",
          marginTop: "20px",
          textAlign: "center",
          border: "0px",
        }}
      >
        <Card.Img variant="top" src={nest} />
        <Card.Body>
          <Card.Title>
            <Card.Text>NestJs</Card.Text>
            <ProgressBar variant="success" now={50} />
          </Card.Title>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: "18rem",
          marginTop: "20px",
          textAlign: "center",
          border: "0px",
        }}
      >
        <Card.Img variant="top" src={sql} />
        <Card.Body>
          <Card.Title>
            <Card.Text>My SQL</Card.Text>
            <ProgressBar variant="success" now={60} />
          </Card.Title>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: "18rem",
          marginTop: "20px",
          textAlign: "center",
          border: "0px",
        }}
      >
        <Card.Img variant="top" src={git} />
        <Card.Body>
          <Card.Title>
            <Card.Text>GIT</Card.Text>
            <ProgressBar variant="success" now={75} />
          </Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default Skill;
