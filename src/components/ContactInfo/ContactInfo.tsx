import React from 'react';
import { Icon } from 'components';
import {
  Wrapper,
  InfoWrapper,
  ContactText,
  ContactTextCentered,
  Title,
} from './ContactInfo.style';

const ContactInfo: React.FC = (): JSX.Element => (
  <>
    <Title>Blacharstwo i lakiernictwo samochodowe</Title>
    <Wrapper>
      <div style={{ marginRight: '0.5rem' }}>
        <InfoWrapper>
          <Icon icon='location' />
          <div>
            <ContactText>Ul. Zaborska 50</ContactText>
            <ContactText>32-600 Oświęcim</ContactText>
          </div>
        </InfoWrapper>
        <InfoWrapper>
          <Icon icon='email' />
          <div>
            <ContactText>piorowskimichalziaja</ContactText>
            <ContactText>@op.pl</ContactText>
          </div>
        </InfoWrapper>
      </div>
      <div>
        <InfoWrapper>
          <Icon icon='phone' />
          <div>
            <ContactText>+48 884 301 308</ContactText>
            <ContactText>+48 608 678 216</ContactText>
          </div>
        </InfoWrapper>
        <InfoWrapper>
          <Icon icon='facebook' />
          <div>
            <ContactText>Michał Piórowski</ContactText>
            <ContactText>Serwis</ContactText>
          </div>
        </InfoWrapper>
      </div>
    </Wrapper>

    <ContactTextCentered
      style={{ textDecoration: 'underline', fontSize: '1.15rem' }}
    >
      Godziny otwarcia
    </ContactTextCentered>
    <ContactTextCentered>
      Poniedziałek - Piątek: 8:00 - 16:00
    </ContactTextCentered>
    <ContactTextCentered>Sobota - Niedziela: Nieczynne</ContactTextCentered>
  </>
);

export default ContactInfo;
