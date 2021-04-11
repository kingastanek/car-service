import React from 'react';
import { ScrollButton } from 'components';
import { BlackBrokenCarImg } from './MainPage.style';

const MainPage = () => {
  return (
    <BlackBrokenCarImg id='main'>
      <ScrollButton to='aboutUs' arrowDirection='down' />
    </BlackBrokenCarImg>
  );
};

export default MainPage;
