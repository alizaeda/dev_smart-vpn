import React from "react";
import { Container } from "../../globalStyles";
import Logo from "../../images/Logo.png";
import { HiX } from "react-icons/hi";
import {
  Button,
  Img,
  SidebarButtons,
  SidebarIcon,
  SidebarItem,
  SidebarItems,
  SidebarLink,
  SidebarLogo,
  SidebarWrapper,
} from "./Sidebar.elements";

const Sidebar = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <Container>
        <SidebarWrapper isOpen={isOpen}>
          <SidebarLogo to="home">
            <Img src={Logo} alt="logo" />
          </SidebarLogo>
          <SidebarIcon onClick={toggleMenu}>
            <HiX size={35} color="black" />
          </SidebarIcon>

          <SidebarItems>
            <SidebarItem>
              <SidebarLink to="about">About</SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink to="features">Features</SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink to="pricing">Pricing</SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink to="testimonials">Testimonials</SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink to="help">Help</SidebarLink>
            </SidebarItem>
          </SidebarItems>
          <SidebarButtons>
            <Button to="/signin">Sign In</Button>
            <Button to="/signup">Sign Up</Button>
          </SidebarButtons>
        </SidebarWrapper>
      </Container>
    </>
  );
};

export default Sidebar;
