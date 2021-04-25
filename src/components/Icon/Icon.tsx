import React from 'react';
import icons from 'icons/icons';

import { ResetButton } from './Icon.style';

export type tIcon = {
  icon: string;
  fill?: string;
  asButton?: boolean;
  onClick?: () => void;
  disable?: boolean;
  width?: string;
  height?: string;
  buttonStyles?: React.CSSProperties;
};

const Icon: React.FC<tIcon> = ({
  icon,
  fill,
  onClick,
  asButton = false,
  disable = false,
  width = '1.5rem',
  height = '1.5rem',
  buttonStyles,
  ...rest
}): JSX.Element | null => {
  // @ts-ignore
  const IconComponent = icons[icon];
  if (!IconComponent) return null;

  if (asButton) {
    return (
      <ResetButton
        disabled={disable}
        style={{ width, height, ...buttonStyles }}
        onClick={onClick}
        type='button'
      >
        <IconComponent style={{ width, height }} fill={fill} {...rest} />
      </ResetButton>
    );
  }

  return (
    <IconComponent
      style={{ minWidth: width }}
      width={width}
      height={height}
      fill={fill}
      {...rest}
    />
  );
};

export default Icon;
