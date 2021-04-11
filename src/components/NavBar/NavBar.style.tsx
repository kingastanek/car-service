import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Nav = styled.nav`
  width: 100%;
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 100;
`;

export const NavLinks = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 48px;
  box-sizing: border-box;
  font-size: 1.25rem;
  cursor: pointer;
  &.active {
    border-bottom: 1px solid white;
    padding-bottom: 12px;
  }
`;
