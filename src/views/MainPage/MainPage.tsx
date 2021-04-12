import React from 'react';
import { ScrollButton } from 'components';
import {
  Box,
  TitleText,
  Wrapper,
  Paragraph,
} from 'utils/GlobalStyledComponents';
import { BlackBrokenCarImg } from './MainPage.style';

const MainPage = () => {
  return (
    <BlackBrokenCarImg id='main'>
      <Wrapper>
        <Box>
          <TitleText>Michał</TitleText>
          <TitleText fontSize='4rem'>Piórowski</TitleText>
          <TitleText>Auto serwis</TitleText>
        </Box>
        <Paragraph>Oświęcim</Paragraph>
      </Wrapper>
      <ScrollButton to='aboutUs' arrowDirection='down' />
    </BlackBrokenCarImg>
  );
};

export default MainPage;
