import styled from 'styled-components';
import car1 from '../../assets/images/black.png';
import car2 from '../../assets/images/black-mobile.png';
import { Car } from 'utils/GlobalStyledComponents';

export const BlackFixedCarDesktop = styled(Car)`
  background-image: url(${car1});
`;

export const BlackFixedCar = styled(Car)`
  background-image: url(${car2});
`;
