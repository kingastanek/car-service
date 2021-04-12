import styled from 'styled-components';

type tTitleText = {
  fontSize?: string;
};


export const Car = styled.div`
  position: relative;
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

export const Box = styled.div`
  padding: 20px;
  width: 400px;
  height: auto;
  border: 3px solid white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TitleText = styled.p<tTitleText>`
  font-size: ${({ fontSize }) => fontSize || '3rem'};
  font-weight: bold;
  margin: 0;
  padding: 0;
  text-align: center;
  line-height: 60px;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 180px;
  right: 100px;
  max-width: 50%;
  min-width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Paragraph = styled.p`
  text-align: center;
  font-size: 24px;
  line-height: 35px;
  font-weight: 700;
`;
