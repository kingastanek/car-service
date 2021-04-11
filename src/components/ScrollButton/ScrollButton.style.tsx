import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';

const bounce = keyframes`
  0% { transform: translateY(0); }
  5.55556% { transform: translateY(0); }
  11.11111% { transform: translateY(0); }
  22.22222% { transform: translateY(-15px); }
  27.77778% { transform: translateY(0); }
  33.33333% { transform: translateY(-15px); }
  44.44444% { transform: translateY(0); }
  100% { transform: translateY(0); }
`;

export const Scroll = styled(Link)`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 30px;
  right: 50%;
  animation: ${bounce} 3s ease-in infinite;
  transform-origin: 50% 50%;
`;

export const IconButtonWrapper = styled.button`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  display: block;
`;
