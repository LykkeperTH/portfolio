import React from "react";
import About from "../about";
import Experience from "../experience";
import Skill from "../skill";

const Home = () => {
  return (
    <React.Fragment>
      <Experience />
      <Skill />
      <About />
    </React.Fragment>
  );
};
export default Home;
