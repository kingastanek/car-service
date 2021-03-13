import React from 'react';
import { Nav, NavLinks } from './NavBar.style';

const NavBar: React.FC = (): JSX.Element => {
  const navBarElements = [
    { name: 'Główna', linkTo: 'car1' },
    { name: 'Blacharstwo', linkTo: 'car2' },
    { name: 'Lakiernictwo', linkTo: 'car3' },
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
