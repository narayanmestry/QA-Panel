import React from 'react';
import { Navbar, Container } from "react-bootstrap";
function Header() {
  return (
    <>
        <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#"><h3>App Heading</h3></Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
export default  Header;