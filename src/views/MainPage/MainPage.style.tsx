import styled from 'styled-components';
import car1 from '../../assets/images/black-broken.png';
import car2 from '../../assets/images/black-broken-mobile.png';
import { Car } from 'utils/GlobalStyledComponents';

export const BlackBrokenCarImgDesktop = styled(Car)`
  background-image: url(${car1});
`;

export const BlackBrokenCarImg = styled(Car)`
  background-image: url(${car2});
`;
