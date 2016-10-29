import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Bootstrap from "bootstrap";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';
import { Footer } from "./footer";
import { Main } from "./main";


export interface naviB {}
let correction = {marginBottom: 0, borderRadius: 0}
export class NavbarB extends React.Component<naviB, {}> {
render() {
  return <Navbar inverse fluid style={correction}>
    <Navbar.Header >

      <Navbar.Brand>
        <Link to="/">Paul Searcy</Link>
      </Navbar.Brand>
      <Navbar.Toggle />

    </Navbar.Header>

    <Navbar.Collapse>
      <Nav pullLeft>
        <NavItem href="http://www.psearcy.com/formProject">Form Builder Project</NavItem>
      </Nav>

      <Nav pullRight>
        <LinkContainer to="/">

          <NavItem >Home</NavItem>

        </LinkContainer>
        <LinkContainer to="/about">

          <NavItem >About</NavItem>

        </LinkContainer>
        <LinkContainer to="/projects">

          <NavItem >Projects</NavItem>

        </LinkContainer>
        <LinkContainer to="/contact">

          <NavItem >Contact</NavItem>

        </LinkContainer>
      </Nav>

    </Navbar.Collapse>
  </Navbar>
    }
}
