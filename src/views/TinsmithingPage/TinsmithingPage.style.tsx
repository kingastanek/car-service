import styled from 'styled-components';
import blackCar from '../../assets/images/black-car.png';
import blackCarMobie from '../../assets/images/black-car-mobile.png';
import { Car } from 'utils/GlobalStyledComponents';

export const BlackFixedCarDesktop = styled(Car)`
  background-image: url(${blackCar});
`;

export const BlackFixedCar = styled(Car)`
  background-image: url(${blackCarMobie});
`;
