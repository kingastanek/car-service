import styled from 'styled-components';
import car1 from 'assets/images/black-broken.png';
import car2 from 'assets/images/black-broken-mobile.png';
import { Car } from 'utils/GlobalStyledComponents';

export const BlackBrokenCarDesktop = styled(Car)`
  background-image: url(${car1});
`;

export const BlackBrokenCar = styled(Car)`
  background-image: url(${car2});
`;
