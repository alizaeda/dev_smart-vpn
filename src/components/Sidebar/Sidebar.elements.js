import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const SidebarWrapper = styled.div`
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #eee;
  padding: 50px;
  transition: var(--transition);
`;

export const SidebarLogo = styled(LinkRouter)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Img = styled.img`
  width: 100%;
`;

export const SidebarIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const SidebarItems = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
`;

export const SidebarItem = styled.li`
  padding: 20px;
  width: 100%;
  text-align: center;
  transition: var(--transition);
  &:hover {
    background-color: var(--red);
    border-radius: 10px;
    color: #fff;
  }
`;

export const SidebarLink = styled(LinkScroll)`
  cursor: pointer;
  font-size: var(--f3);
  font-weight: 500;
  &:hover {
    transform: scale(1.5);
  }
`;

export const SidebarButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled(LinkRouter)`
  background-color: transparent;
  text-align: center;
  text-decoration: none;
  color: #000;
  width: 100%;
  padding: 20px;
  margin-top: 20px;
  border-radius: 50px;
  padding: 13px 45px;
  border: 1px solid var(--red);
  transition: var(--transition);
  color: var(--red);
  font-weight: 700;

  &:hover {
    background-color: var(--red-alt);
    color: #fff;
  }
`;
