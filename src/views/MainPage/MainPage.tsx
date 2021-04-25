import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ScrollButton, ContactInfo } from 'components';
import { useWindowDimensions } from 'hooks';
import { Wrapper, TitleText, Box } from 'utils/GlobalStyledComponents';
import { BlackBrokenCarImg, BlackBrokenCarImgDesktop } from './MainPage.style';

const MainPage = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 1024;

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const renderContent = () => (
    <Wrapper data-aos='zoom-in' style={{ top: isMobile ? '1rem' : '5rem' }}>
      <Box>
        <TitleText fontSize={isMobile ? '1.5rem' : '2rem'}>Michał</TitleText>
        <TitleText fontSize={isMobile ? '2rem' : '3rem'}>Piórowski</TitleText>
        <TitleText fontSize={isMobile ? '1.5rem' : '2rem'}>
          Auto serwis
        </TitleText>
      </Box>
      <ContactInfo />
    </Wrapper>
  );

  return isMobile ? (
    <BlackBrokenCarImg id='main'>{renderContent()}</BlackBrokenCarImg>
  ) : (
    <BlackBrokenCarImgDesktop id='main'>
      {renderContent()}
      <ScrollButton to='aboutUs' arrowDirection='down' />
    </BlackBrokenCarImgDesktop>
  );
};

export default MainPage;
