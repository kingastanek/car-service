import styled from 'styled-components';

type tResetButton = {
  width?: number;
  height?: number;
  disable?: boolean;
};

export const ResetButton = styled.button<tResetButton>`
  outline: 0;
  padding: 0;
  margin: 0;
  background: transparent;
  cursor: ${({ disable }) => (disable ? 'default' : 'pointer')};
  border: 0;
`;
