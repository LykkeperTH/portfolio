import React from "react";
import { Footer } from "../../component";
import About from "../about";
import Experience from "../experience";
import Skill from "../skill";

const Home = () => {
  return (
    <React.Fragment>
      <Experience />
      <hr></hr>
      <Skill />
      <hr></hr>
      <About />
      <hr></hr>
      <Footer />
    </React.Fragment>
  );
};
export default Home;
