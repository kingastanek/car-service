import React from 'react';
import { useWindowDimensions } from 'hooks';
import {
  Box,
  TitleText,
  Wrapper,
  Paragraph,
} from 'utils/GlobalStyledComponents';
import { RedFixedCarDesktop, RedFixedCar } from './VarnishingPage.style';

const VarnishingPage = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 1024;

  const renderContent = () => (
    <Wrapper data-aos='zoom-in'>
      <Box style={{ marginTop: isMobile ? '4rem' : '0' }}>
        <TitleText>Lakiernictwo</TitleText>
      </Box>
      <Paragraph>
        Lakierowanie odbywa się w specjalnej komorze lakierniczej, a stosowane
        przez nas materiały i lakiery są najwyższej jakości.
      </Paragraph>
    </Wrapper>
  );

  return isMobile ? (
    <RedFixedCar id='varnishing'>{renderContent()}</RedFixedCar>
  ) : (
    <RedFixedCarDesktop id='varnishing'>{renderContent()}</RedFixedCarDesktop>
  );
};

export default VarnishingPage;
