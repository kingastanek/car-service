import React from 'react';
import icons from 'icons/icons';
import { Scroll, IconButtonWrapper } from './ScrollButton.style';

type tScrollButton = {
  to: string;
  arrowDirection: 'up' | 'down';
};

const ScrollButton: React.FC<tScrollButton> = ({
  to,
  arrowDirection,
}): JSX.Element => {
  const ArrowUpIcon = icons['arrowUp'];
  const ArrorDownIcon = icons['arrowDown'];
  return (
    <Scroll to={to} spy smooth>
      <IconButtonWrapper>
        {arrowDirection === 'down' ? <ArrorDownIcon /> : <ArrowUpIcon />}
      </IconButtonWrapper>
    </Scroll>
  );
};

export default ScrollButton;
