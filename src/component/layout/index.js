import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <LinkContainer
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            left: "0",
          }}
          to="/"
        >
          <Navbar.Brand>Portfolio</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container style={{ marginBottom: "20px" }}>{children}</Container>
    </React.Fragment>
  );
};
export default Layout;
