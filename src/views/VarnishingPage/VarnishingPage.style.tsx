import styled from 'styled-components';
import car1 from '../../assets/images/red.png';
import car2 from '../../assets/images/red-mobile.png';
import { Car } from 'utils/GlobalStyledComponents';

export const RedFixedCarDesktop = styled(Car)`
  background-image: url(${car1});
`;

export const RedFixedCar = styled(Car)`
  background-image: url(${car2});
`;
