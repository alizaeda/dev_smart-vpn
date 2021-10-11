import React from "react";
import Logo from "../../images/Logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { Container } from "../../globalStyles";
import {
  Button,
  Img,
  NavbarBrand,
  NavbarButtons,
  NavbarItem,
  NavbarLink,
  NavbarItems,
  NavbarMenuIcon,
  NavbarWrapper,
} from "./Navbar.style";

const Navbar = ({ toggleMenu }) => {
  return (
    <Container>
      <NavbarWrapper>
        <NavbarBrand>
          <Img src={Logo} alt='Logo' />
        </NavbarBrand>
        <NavbarItems>
          <NavbarItem>
            <NavbarLink to='about' offset={-100} spy={true} exact={true}>
              About
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to='features'>Features</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to='about'>Pricing</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to='about'>Testimonials</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to='about'>Help</NavbarLink>
          </NavbarItem>
        </NavbarItems>
        <NavbarMenuIcon onClick={toggleMenu}>
          <HiMenuAlt3 size={35} />
        </NavbarMenuIcon>
        <NavbarButtons>
          <Button to='/signin'>Sign In</Button>
          <Button to='/signup'>Sign Up</Button>
        </NavbarButtons>
      </NavbarWrapper>
    </Container>
  );
};

export default Navbar;
