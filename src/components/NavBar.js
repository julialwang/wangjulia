import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFF;
`;

const NavItem = styled.li`
  list-style: none;
  margin: 0 1rem;

  a {
    color: #B07156;
    text-decoration: none;
    transition: all 0.3s ease;
    font-weight: bold;

    &:hover {
      color: #C6CA53;
    }
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
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
      <Logo></Logo>
      <DesktopNav>
        <NavItem><a href="/">Work</a></NavItem>
        <NavItem><a href="/">About</a></NavItem>
        <NavItem><a href="/">Tidbits</a></NavItem>
      </DesktopNav>
    </Nav>
  );
};
export default NavBar;