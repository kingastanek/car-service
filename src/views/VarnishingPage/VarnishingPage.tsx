import React from 'react';
import { ScrollButton } from 'components';
import {
  Box,
  TitleText,
  Wrapper,
  Paragraph,
} from 'utils/GlobalStyledComponents';
import { RedFixedCar } from './VarnishingPage.style';

const VarnishingPage = () => (
  <RedFixedCar id='varnishing'>
    <Wrapper>
      <Box>
        <TitleText>Lakietnictwo</TitleText>
      </Box>
      <Paragraph>
        Lakierowanie odbywa się w specjalnej komorze lakierniczej, a stosowane
        przez nas materiały i lakiery są najwyższej jakości.
      </Paragraph>
    </Wrapper>
    <ScrollButton to='main' arrowDirection='up' />
  </RedFixedCar>
);

export default VarnishingPage;
