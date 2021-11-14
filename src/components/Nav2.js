import React, { useState } from "react";
import { Component } from "react";
import { toggle } from "react";
import { isOpen } from "react";
import { Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

class Nav2 extends Component {
  render() {
    return (
      <Navbar dark expand className="navbarbg">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavbarBrand className="mt-2">Digital Dexterity</NavbarBrand>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Nav2;
