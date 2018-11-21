import React from "react";
import {
  Navbar,
  NavItem,
  Nav,
  Image,
  FormGroup,
  FormControl,
  Button
} from "react-bootstrap";
import logo from "../resources/svg/color_logo_background.svg";

export default class Header extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect fluid style={styles.navigation}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">
              <Image src={logo} style={styles.headerIcon} />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Navbar.Header>
            <Navbar.Form pullLeft>
              <FormGroup>
                <FormControl type="text" placeholder="Search movies, events nearby" style={styles.searchField} />
              </FormGroup>{" "}
              <Button type="submit">Search</Button>
            </Navbar.Form>
          </Navbar.Header>

          <Nav pullRight>
            <NavItem eventKey={1} href="#">
                Sign-In
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

let styles = {
  navigation: {
    borderRadius: "0px"
  },
  headerIcon: {
    maxWidth: "164px",
    marginTop: "-15px"
  },
  searchField : {
      width: "800px",
      maxWidth: "1000px"
  }
};
