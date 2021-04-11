import React from 'react';
import { ScrollButton } from 'components';
import { RedFixedCar } from './VarnishingPage.style';

const VarnishingPage = () => (
  <RedFixedCar id='varnishing'>
    <ScrollButton to='main' arrowDirection='up' />
  </RedFixedCar>
);

export default VarnishingPage;
