import styled from "styled-components";
import { device } from "../../globalStyles";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 50px 0; */
  padding: 20px 0;
`;

export const NavbarBrand = styled.div``;

export const Img = styled.img`
  width: 100%;
`;

export const Brand = styled.h2`
  font-size: var(--f3);
`;

export const NavbarItems = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media ${device.large} {
    display: none;
  }
`;

export const NavbarItem = styled.li`
  &:not(:last-child) {
    margin-right: 40px;
  }
`;

export const NavbarLink = styled(LinkScroll)`
  cursor: pointer;
  color: var(--gray);
  transition: var(--transition);
  &:hover {
    color: var(--primary);
  }
`;

export const NavbarMenuIcon = styled.div`
  display: none;
  transition: var(--transition);

  @media ${device.large} {
    display: block;
    cursor: pointer;
  }
`;

export const NavbarButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.large} {
    display: none;
  }
`;

export const Button = styled(LinkRouter)`
  font-weight: 500;
  border: 1px solid #fff;
  text-decoration: none;
  color: var(--primary);
  transition: var(--transition);
  &:hover {
    color: var(--red);
  }
  &:active {
    transform: scale(1.02);
  }
  &:last-of-type {
    margin-left: 30px;
    border-radius: 50px;
    color: var(--red);
    border: 1px solid var(--red);
    padding: 13px 45px;
    &:hover {
      background-color: var(--red-alt);
      color: #fff;
    }
  }
`;
