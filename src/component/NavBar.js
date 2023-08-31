import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBIcon,
} from "mdb-react-ui-kit";
import logo from '../assets/logo.png';
import ("../CSS/NavBar.css");

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleCollapse = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    const { isOpen } = this.state;
    const show = isOpen ? "show" : "";

    return (
      <MDBNavbar expand="lg" light bgColor="light" className="navBar">
        <MDBContainer fluid className="navBarContainer">
          <MDBNavbarBrand href="HomePage">
            <img src={logo} alt="Logo" className="logoImg" />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={this.toggleCollapse}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBNavbarNav className={`collapse navbar-collapse justify-content-center ${show}`}>
            <div className="nav-links">
              <Link to="/Homepage" className="nav-link">
                HomePage🏚
              </Link>
              <Link to="/about" className="nav-link">
                About us 👀
              </Link>
              <Link to="/Contact" className="nav-link">
                Contact us🤩
              </Link>
            </div>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
    );
  }
}

export default NavBar;


