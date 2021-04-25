import React from 'react';
import { useWindowDimensions } from 'hooks';
import {
  Box,
  TitleText,
  Wrapper,
  Paragraph,
} from 'utils/GlobalStyledComponents';
import { BlackBrokenCarDesktop, BlackBrokenCar } from './AboutMePage.style';

const AboutMePage = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 1024;

  const renderContent = () => (
    <Wrapper data-aos='zoom-in'>
      <Box style={{ marginTop: isMobile ? '2.5rem' : '0' }}>
        <TitleText>O nas</TitleText>
      </Box>
      <Paragraph>
        Wieloletnie doświadczenie oraz pasja do motoryzacji! Oddając samochód do
        naszego warsztatu możesz być pewien, że naprawimy go szybko i fachowo.
        Profesjonalizm oraz zadowolenie klienta to nasza wartość priorytetowa.
        Naszym atutem jest również fakt, że współpracując z towarzystwami
        ubezpieczeniowymi oferujemy likwidacje szkód komunikacyjnych jako
        naprawy bezgotówkowe.
      </Paragraph>
    </Wrapper>
  );
  return isMobile ? (
    <BlackBrokenCar id='aboutUs'>{renderContent()}</BlackBrokenCar>
  ) : (
    <BlackBrokenCarDesktop id='aboutUs'>
      {renderContent()}
    </BlackBrokenCarDesktop>
  );
};

export default AboutMePage;
