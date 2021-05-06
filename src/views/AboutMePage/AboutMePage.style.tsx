import styled from 'styled-components';
import blackBrokenCar from 'assets/images/black-broken-car.png';
import blackBrokenCarMobile from 'assets/images/black-broken-car-mobile.png';
import { Car } from 'utils/GlobalStyledComponents';

export const BlackBrokenCarDesktop = styled(Car)`
  background-image: url(${blackBrokenCar});
`;

export const BlackBrokenCar = styled(Car)`
  background-image: url(${blackBrokenCarMobile});
`;
