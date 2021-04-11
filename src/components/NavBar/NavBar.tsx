import React from 'react';
import { Nav, NavLinks } from './NavBar.style';

const NavBar: React.FC = (): JSX.Element => {
  const navBarElements = [
    { name: 'Główna', linkTo: 'main' },
    { name: 'O nas', linkTo: 'aboutUs' },
    { name: 'Blacharstwo', linkTo: 'tinsmithing' },
    { name: 'Lakiernictwo', linkTo: 'varnishing' },
  ];

  return (
    <Nav>
      {navBarElements.map((element) => {
        const { name, linkTo } = element;
        return (
          <NavLinks key={name} to={linkTo} spy smooth>
            {name}
          </NavLinks>
        );
      })}
    </Nav>
  );
};

export default NavBar;
