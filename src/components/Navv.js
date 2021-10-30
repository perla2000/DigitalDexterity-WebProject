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

class Navv extends Component {
  render() {
    return (
      <Navbar dark expand className="navbarbg">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavbarBrand className="mt-2">Digital Dexterity</NavbarBrand>
            <NavItem>
              <NavLink className="nav-link" to="">
                <NavLink href="/home" className="component">
                  Home
                </NavLink>
              </NavLink>
            </NavItem>
            <NavItem className="mt-0 ">
              <NavLink className="nav-link" to="/github">
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar className="mt-2 ">
              <DropdownToggle nav caret>
                Tests
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                  {" "}
                  <Link to="/test">Microsoft Word Test</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/extest">Microsoft Excel Test</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/pptest">Microsoft Powerpoint Test</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar className="mt-2 ">
              <DropdownToggle nav caret>
                Training
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>Webinars</DropdownItem>
                <DropdownItem>Courses</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Exercises</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
        <img src={"./assets/logo.png"} style={{ width: 40, height: 40 }} />

        <NavLink className="nav-link" to="">
          <NavLink href="/home" style={{ color: "white" }}>
            Profile
          </NavLink>
        </NavLink>
      </Navbar>
    );
  }
}

export default Navv;
