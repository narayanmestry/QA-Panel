import React from "react";
import { Navbar } from "react-bootstrap";
import Button from '@mui/material/Button';
import { GoGear } from "react-icons/go";
import "./header.css";

function Header() {
  return (
    <>
      {/* <Navbar className="navbar-header" expand="lg" variant="dark" bg="dark"> */}
        <div className="header">
          <h4>QA Managment Panel</h4>
          <Button className="setting">
            <GoGear />
          </Button>
        </div>
      {/* </Navbar> */}
    </>
  );
}
export default Header;
