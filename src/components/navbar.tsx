import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Bootstrap from "bootstrap";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { Footer } from "./footer";
import { Main } from "./main";


export interface naviB {}
let correction = {marginBottom: 0}
export class NavbarB extends React.Component<naviB, {}> {
    render() {
        return <Navbar inverse fluid style={correction}>
    <Navbar.Header >
      <Navbar.Brand>
        <a href="#">Paul Searcy</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem  href="#">Home</NavItem>
        <NavItem  href="#">About</NavItem>
        <NavItem  href="#">Projects</NavItem>
        <NavItem  href="#">Contact</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    }
}