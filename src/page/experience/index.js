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
      <Jumbotron style={{ marginTop: "25px" }}>
        {data.map((basic, index) => {
          console.log(basic);
          return (
            <VerticalTimeline key={index}>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date={basic.firstWork.startDate}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<MdWork />}
              >
                <h4 className="vertical-timeline-element-title">
                  {basic.firstWork.position}
                </h4>

                <p>{basic.firstWork.summary}</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={basic.secondWork.startDate}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<MdWork />}
              >
                <h3 className="vertical-timeline-element-title">
                  {basic.secondWork.position}
                </h3>
                <p>{basic.secondWork.summary}</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2008 - 2010"
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                icon={<MdSchool />}
              >
                <h3 className="vertical-timeline-element-title">
                  Web Designer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Los Angeles, CA
                </h4>
                <p>User Experience, Visual Design</p>
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
