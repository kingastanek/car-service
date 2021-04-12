import React from 'react';
import { ScrollButton } from 'components';
import {
  Box,
  TitleText,
  Wrapper,
  Paragraph,
} from 'utils/GlobalStyledComponents';
import { BlackBrokenCar } from './AboutMePage.style';

const AboutMePage = () => (
  <BlackBrokenCar id='aboutUs'>
    <Wrapper>
      <Box>
        <TitleText>O nas</TitleText>
      </Box>
      <Paragraph>
        Wieloletnie doświadczenie oraz pasja do motoryrazji! Oddając samochód do
        naszego warsztatu możesz być pewien, że naprawimy go szybko i fachowo.
        Profesjonalizm oraz zadowolenie klienta to nasz wartośc priorytetowa.
        Naszym atutem jest również jest fakt, że współpracując z towarzystwami
        ubezpieczeniowymi oferujemy likwidacje szkód komunikacyjnych jako
        naprawy bezgotówkowe.
      </Paragraph>
    </Wrapper>

    <ScrollButton to='tinsmithing' arrowDirection='down' />
  </BlackBrokenCar>
);

export default AboutMePage;
