import { Card } from "react-bootstrap";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/js.svg";
import react from "../../assets/reactjs.svg";
import git from "../../assets/git.svg";
import React from "react";
import { StyleCard, StyleContainer, StyleProgressBar } from "./style";
const Skill = () => {
  const percentageHtml = 90;
  const percentageCss = 80;
  const percentageJavaScript = 75;
  const percentageReact = 85;
  const percentageGit = 75;

  return (
    <React.Fragment>
      <h1 style={{ justifyContent: "center", display: "flex" }}>Technology</h1>
      <StyleContainer fluid="md">
        <StyleCard>
          <Card.Img variant="bottom" src={html} />
          <Card.Body>
            <Card.Title>
              <Card.Text>HTML</Card.Text>
              <StyleProgressBar
                now={90}
                label={`${percentageHtml}% completed`}
              />
            </Card.Title>
          </Card.Body>
        </StyleCard>
        <StyleCard>
          <Card.Img variant="top" src={css} />
          <Card.Body>
            <Card.Title>
              <Card.Text>CSS</Card.Text>
              <StyleProgressBar
                now={75}
                label={`${percentageCss}% completed`}
              />
            </Card.Title>
          </Card.Body>
        </StyleCard>
        <StyleCard>
          <Card.Img variant="top" src={js} />
          <Card.Body>
            <Card.Title>
              <Card.Text>JAVA Script</Card.Text>
              <StyleProgressBar
                now={70}
                label={`${percentageJavaScript}% completed`}
              />
            </Card.Title>
          </Card.Body>
        </StyleCard>
        <StyleCard>
          <Card.Img variant="top" src={react} />
          <Card.Body>
            <Card.Title>
              <Card.Text>ReactJs</Card.Text>
              <StyleProgressBar
                now={85}
                label={`${percentageReact}% completed`}
              />
            </Card.Title>
          </Card.Body>
        </StyleCard>
        <StyleCard>
          <Card.Img variant="top" src={git} />
          <Card.Body>
            <Card.Title>
              <Card.Text>GIT</Card.Text>
              <StyleProgressBar
                now={75}
                label={`${percentageGit}% completed`}
              />
            </Card.Title>
          </Card.Body>
        </StyleCard>
      </StyleContainer>
    </React.Fragment>
  );
};
export default Skill;
