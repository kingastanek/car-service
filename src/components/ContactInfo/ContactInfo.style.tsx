import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
  align-items: center;
`;

export const ContactText = styled.p`
  font-size: 1rem;
  font-family: 'Arial';
  margin: 0.25rem;
  margin-left: 1rem;

  @media screen and (max-width: 1099px) {
    font-size: 0.75rem;
  }
`;

export const ContactTextCentered = styled(ContactText)`
  text-align: center;
  margin-top: 0;

  ${({ style }) =>
    style &&
    css`
     ...style
  `};
`;

export const Title = styled(ContactText)`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 1099px) {
    font-size: 1rem;
    margin: 1rem;
  }
`;

export const Email = styled.a`
  text-decoration: none;
  color: white;
`;

export const Address = styled.a`
  text-decoration: none;
  color: white;
`;

export const FacebookLink = styled.a`
  text-decoration: none;
  color: white;
`;

export const TelephoneLink = styled.a`
  display: block;
  text-decoration: none;
  color: white;
  font-size: 1rem;
  font-family: 'Arial';
  margin: 0.25rem;
  margin-left: 1rem;

  @media screen and (max-width: 1099px) {
    font-size: 0.75rem;
  }
`;
