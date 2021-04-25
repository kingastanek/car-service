import React from 'react';
import { Icon } from 'components';
import { useWindowDimensions } from 'hooks';
import {
  Nav,
  NavDesktop,
  NavLinks,
  NavLinksDesktop,
  NavBarName,
  IconWrapper,
} from './NavBar.style';

const NavBar: React.FC = (): JSX.Element => {
  const { width } = useWindowDimensions();
  const isMobile = width < 1024;

  const navBarElements = [
    { name: 'Główna', linkTo: 'main', icon: 'car' },
    { name: 'O nas', linkTo: 'aboutUs', icon: 'people' },
    { name: 'Blacharstwo', linkTo: 'tinsmithing', icon: 'crashedCar' },
    { name: 'Lakiernictwo', linkTo: 'varnishing', icon: 'paint' },
  ];

  return isMobile ? (
    <Nav>
      {navBarElements.map((element) => {
        const { name, linkTo, icon } = element;
        return (
          <NavLinks key={name} to={linkTo} spy smooth>
            <IconWrapper>
              <Icon icon={icon} width='4rem' height='2rem' />
            </IconWrapper>
            <NavBarName>{name}</NavBarName>
          </NavLinks>
        );
      })}
    </Nav>
  ) : (
    <NavDesktop>
      {navBarElements.map((element) => {
        const { name, linkTo } = element;
        return (
          <NavLinksDesktop key={name} to={linkTo} spy smooth>
            {name}
          </NavLinksDesktop>
        );
      })}
    </NavDesktop>
  );
};

export default NavBar;
