import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ScrollButton } from 'components';
import {
  Box,
  TitleText,
  Wrapper,
  Paragraph,
} from 'utils/GlobalStyledComponents';
import { BlackBrokenCarImg } from './MainPage.style';

const MainPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <BlackBrokenCarImg id='main'>
      <Wrapper data-aos='zoom-in'>
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
