import React from 'react';
import { ScrollButton } from 'components';
import {
  Box,
  TitleText,
  Wrapper,
  Paragraph,
} from 'utils/GlobalStyledComponents';
import { BlackFixedCar } from './TinsmithingPage.style';

const TinsmithingPage = () => (
  <BlackFixedCar id='tinsmithing'>
    <Wrapper data-aos='zoom-in'>
      <Box>
        <TitleText>Blacharstwo</TitleText>
      </Box>
      <Paragraph>
        Posiadamy płytę blacharską do naciągania oraz profesjonalne maszyny i
        narzędzia, dzięki czemu wykonujemy kompleksowe naprawy blacharskie.
      </Paragraph>
    </Wrapper>
    <ScrollButton to='varnishing' arrowDirection='down' />
  </BlackFixedCar>
);

export default TinsmithingPage;
