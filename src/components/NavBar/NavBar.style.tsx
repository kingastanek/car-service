import styled from 'styled-components';
import { Link } from 'react-scroll';

export const NavDesktop = styled.nav`
  width: 100%;
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 100;
`;

export const NavLinksDesktop = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 48px;
  box-sizing: border-box;
  font-size: 1.1rem;
  cursor: pointer;
  &.active {
    border-bottom: 1px solid white;
    padding-bottom: 12px;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 1rem;
  z-index: 100;
  display: flex;
  justify-content: space-evenly;
`;

export const NavLinks = styled(Link)`
  color: white;
  text-decoration: none;
  box-sizing: border-box;
  font-size: 0.75rem;
  cursor: pointer;
  &.active {
    border-bottom: 1px solid white;
    padding-bottom: 12px;
    font-size: 1rem;
  }
`;

export const NavBarName = styled.p`
  margin: 0;
  padding: 0;
`;

export const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
`;
