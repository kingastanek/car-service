import styled from 'styled-components';
import redCar from '../../assets/images/red-car.png';
import redCarMobile from '../../assets/images/red-car-mobile.png';
import { Car } from 'utils/GlobalStyledComponents';

export const RedFixedCarDesktop = styled(Car)`
  background-image: url(${redCar});
`;

export const RedFixedCar = styled(Car)`
  background-image: url(${redCarMobile});
`;
