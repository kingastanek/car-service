import React from 'react';
import { Icon } from 'components';
import { Scroll, IconButtonWrapper } from './ScrollButton.style';

type tScrollButton = {
  to: string;
  arrowDirection: 'up' | 'down';
};

const ScrollButton: React.FC<tScrollButton> = ({
  to,
  arrowDirection,
}): JSX.Element => (
  <Scroll to={to} spy smooth>
    <IconButtonWrapper>
      {arrowDirection === 'down' ? (
        <Icon icon='arrowDown' />
      ) : (
        <Icon icon='arrowUp' />
      )}
    </IconButtonWrapper>
  </Scroll>
);

export default ScrollButton;
