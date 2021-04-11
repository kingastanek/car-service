import React from 'react';
import { ScrollButton } from 'components';
import { BlackBrokenCar } from './AboutMePage.style';

const AboutMePage = () => (
  <BlackBrokenCar id='aboutUs'>
    <ScrollButton to='tinsmithing' arrowDirection='down' />
  </BlackBrokenCar>
);

export default AboutMePage;
