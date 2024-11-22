import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png'
import {} from'react-scroll';
import{
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from "././NavbarElements";
const Navbar = () => {
  return (
    <>

    <Nav>
       {/* Logo */}
      <NavLink to="/">
           <img src={logo} alt="logo" className='logo'/>
      </NavLink>

      {/*Menu for mobile device*/}
      <Bars />



      {/* Menu items for desktop devices */}
      <NavMenu>
        <NavLink to = "/About">About</NavLink>
        <NavLink to = "/Events" activeStyle >Events</NavLink>
        <NavLink to = "/Project" activeStyle >Project</NavLink>
        <NavLink to = "/Blogs" activeStyle >Blogs</NavLink>
      </NavMenu>
    </Nav>
    
      </>
);
};

export default Navbar;