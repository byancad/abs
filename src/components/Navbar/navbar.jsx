import React from "react";
import { Navbar, NavbarText, Nav } from "reactstrap";

const NavBar = () => {
  return (
    <Navbar style={{ backgroundColor: "#063110" }}>
      <Nav className="navContainer">
        <div className="logo" style={{ color: "white " }}>
          AB&S Construction and Painting
        </div>
      </Nav>
      <NavbarText style={{ color: "white" }}>
        <Nav className="contactNumber">1(210)385-5271 </Nav>
      </NavbarText>
    </Navbar>
  );
};
export default NavBar;
