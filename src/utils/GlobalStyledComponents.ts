import React from 'react';
import styled, {css} from 'styled-components';

type tTitleText = {
  fontSize?: string;
};

type tBox = {
  mobileStyle?: React.CSSProperties;
};

export const Car = styled.div`
  position: relative;
  background-size: cover;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
  color: white;
`;

export const Box = styled.div<tBox>`
  padding: 1.5rem;
  border: 2px solid white;
  border-radius: 8px;
  width: fit-content;
  margin-bottom: 1rem;

  @media (max-width: 1099px) {
    margin: 0;
    margin-top: 1rem;
    padding: 1rem;

    ${({ style }) =>
    style &&
    css`
     ...style
  `};
  }
`;

export const TitleText = styled.p<tTitleText>`
  font-size: ${({ fontSize }) => fontSize || '4rem'};
  font-weight: bold;
  margin: 0;
  padding: 0;
  text-align: center;
  line-height: 3rem;

  @media (max-width: 1099px) {
    line-height: 1.5rem;
    font-size: ${({ fontSize }) => fontSize || '2.5rem'};
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 8rem;
  right: 100px;
  max-width: 50%;
  min-width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;

  ${({ style }) =>
    style &&
    css`
     ...style
  `};

  @media (max-width: 1099px) {
    position: static;
    width: 100%;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  font-family: 'Arial';
  padding: 0;
  line-height: 25px;
  text-align: center;
  margin: 1rem 2rem;;

  ${({ style }) =>
    style &&
    css`
     ...style
  `};

  @media (max-width: 1099px) {
    line-height: 21px;
    font-size: 0.875rem;
  }
`;
