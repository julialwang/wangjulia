import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "../styles/NavBar.css"

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding-right: 1.5vw;
`;

const NavItem = styled.li`
  list-style: none;
  margin: 0 1rem;

  a {
    color: #C6CA53;
    text-decoration: none;
    transition: all 0.3s ease;
    font-weight: bold;
    font-family: Ubuntu Mono;
    font-size: 18px;
    cursor: pointer;

    &:hover {
      color: #AB4E68;
    }
  }
`;

const DesktopNav = styled.ul`
  display: flex;
  flex-direction: row;

  @media (max-width: 767px) {
    display: flex;
  }
`;

const NavBar = () => {

  return (
    <Nav>
      <div style={{width:"5vw", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
      <a href="https://github.com/julialwang" target="_blank"><FaGithub className="Github"/></a>
      <a href="https://www.linkedin.com/in/julia-l-wang/" target="_blank"><FaLinkedinIn className="Linkedin"/></a>
      </div>
      <DesktopNav>
        <NavItem><a href="/">work</a></NavItem>
        <NavItem><a href="/">about</a></NavItem>
        <NavItem><a href="/">tidbits</a></NavItem>
      </DesktopNav>
    </Nav>
  );
};
export default NavBar;