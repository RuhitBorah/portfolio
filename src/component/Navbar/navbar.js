import React from 'react';
import './navbar.css';
import Logo from '../../assets/logo.png';
import {} from 'react-scroll';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        {/* Logo */}
        <NavLink to="/">
          <img
            src={Logo}
            alt="logo"
            style={{
              objectFit: "cover",
              height: "3rem", // Set height for the logo
              width: "4rem",  // Set width for the logo
            }}
          />
        </NavLink>

        {/* Menu for mobile devices */}
        <Bars />

        {/* Menu items for desktop devices */}
        <NavMenu>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Events" activeStyle>
            Events
          </NavLink>
          <NavLink to="/Projects" activeStyle>
            Project
          </NavLink>
          <NavLink to="/Blogs" activeStyle>
            Blogs
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
