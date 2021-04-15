import { Container, Jumbotron } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import data from "../../resume.json";
import { MdWork, MdSchool, MdStar } from "react-icons/md";
const Experience = () => {
  return (
    <Container fluid="md">
      <h1 style={{ justifyContent: "center", display: "flex" }}>Experience</h1>
      <Jumbotron style={{ marginTop: "25px" }}>
        {data.map((basic, index) => {
          console.log(basic);
          return (
            <VerticalTimeline key={index}>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "black",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date={basic.firstWork.startDate}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<MdWork />}
              >
                <h4 className="vertical-timeline-element-title">
                  {basic.firstWork.company}
                </h4>
                <span>{basic.firstWork.position}</span>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={basic.secondWork.startDate}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<MdWork />}
              >
                <h4 className="vertical-timeline-element-title">
                  {basic.secondWork.company}
                </h4>
                <span className="vertical-timeline-element-title">
                  {basic.secondWork.position}
                </span>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={basic.education.startDate}
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                icon={<MdSchool />}
              >
                <h4 className="vertical-timeline-element-title">
                  {basic.education.institution}
                </h4>
                <p>{basic.education.courses}</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
                icon={<MdStar />}
              />
            </VerticalTimeline>
          );
        })}
      </Jumbotron>
    </Container>
  );
};
export default Experience;
