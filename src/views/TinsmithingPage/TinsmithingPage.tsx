import React from 'react';
import { ScrollButton } from 'components';
import { useWindowDimensions } from 'hooks';
import {
  Box,
  TitleText,
  Wrapper,
  Paragraph,
} from 'utils/GlobalStyledComponents';
import { BlackFixedCarDesktop, BlackFixedCar } from './TinsmithingPage.style';

const TinsmithingPage = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 1024;

  const renderContent = () => (
    <Wrapper data-aos='zoom-in'>
      <Box style={{ marginTop: isMobile ? '4rem' : '0' }}>
        <TitleText>Blacharstwo</TitleText>
      </Box>
      <Paragraph>
        Posiadamy płytę blacharską do naciągania oraz profesjonalne maszyny i
        narzędzia, dzięki czemu wykonujemy kompleksowe naprawy blacharskie.
      </Paragraph>
    </Wrapper>
  );

  return isMobile ? (
    <BlackFixedCar id='tinsmithing'>{renderContent()}</BlackFixedCar>
  ) : (
    <BlackFixedCarDesktop id='tinsmithing'>
      {renderContent()}
      <ScrollButton to='varnishing' arrowDirection='down' />
    </BlackFixedCarDesktop>
  );
};
export default TinsmithingPage;
