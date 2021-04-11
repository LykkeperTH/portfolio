import { Card, Container, Jumbotron, ProgressBar } from "react-bootstrap";

const Skill = () => {
  return (
    <Container
      fluid="md"
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        flexWrap: "wrap",
      }}
    >
      <Card style={{ width: "18rem", marginTop: "20px" }}>
        <Card.Img
          variant="top"
          src="https://source.unsplash.com/user/erondu/171x180"
        />
        <Card.Body>
          <Card.Title>
            <ProgressBar now={70} />
          </Card.Title>
          <Card.Text>Some Custom text one can write here</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem", marginTop: "20px" }}>
        <Card.Img
          variant="top"
          src="https://source.unsplash.com/user/erondu/171x180"
        />
        <Card.Body>
          <Card.Title>
            <ProgressBar now={80} />
          </Card.Title>
          <Card.Text>Some Custom text one can write here</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem", marginTop: "20px" }}>
        <Card.Img
          variant="top"
          src="https://source.unsplash.com/user/erondu/171x180"
        />
        <Card.Body>
          <Card.Title>
            <ProgressBar now={90} />
          </Card.Title>
          <Card.Text>Some Custom text one can write here</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem", marginTop: "20px" }}>
        <Card.Img
          variant="top"
          src="https://source.unsplash.com/user/erondu/171x180"
        />
        <Card.Body>
          <Card.Title>
            <ProgressBar now={70} />
          </Card.Title>
          <Card.Text>Some Custom text one can write here</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem", marginTop: "20px" }}>
        <Card.Img
          variant="top"
          src="https://source.unsplash.com/user/erondu/171x180"
        />
        <Card.Body>
          <Card.Title>
            <ProgressBar now={55} />
          </Card.Title>
          <Card.Text>Some Custom text one can write here</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem", marginTop: "20px" }}>
        <Card.Img
          variant="top"
          src="https://source.unsplash.com/user/erondu/171x180"
        />
        <Card.Body>
          <Card.Title>
            <ProgressBar variant="success" now={60} />
          </Card.Title>
          <Card.Text>Some Custom text one can write here</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default Skill;
