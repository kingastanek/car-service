import styled from 'styled-components';
import { Link } from 'react-scroll';
import car1 from '../../assets/images/black-broken.png';
import car2 from '../../assets/images/black.png';
import car3 from '../../assets/images/red.png';

const Car = styled.div`
  position: relative;
  background-image: url(${car1});
  background-size: cover;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
  font-size: 50px;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const CarImage1 = styled(Car)`
  background-image: url(${car1});
`;

export const CarImage2 = styled(Car)`
  background-image: url(${car2});
`;

export const CarImage3 = styled(Car)`
  background-image: url(${car3});
`;

export const MainText = styled.p`
  font-size: 30px;
  color: white;
  opacity: 0.7;
  text-align: center;
  position: absolute;
  top: 15%;
  right: 10%;
`;

export const Scroll = styled(Link)`
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const IconButtonWrapper = styled.button`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  display: block;
`;
