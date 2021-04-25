import React from 'react';
import { Icon } from 'components';
import {
  Wrapper,
  InfoWrapper,
  ContactText,
  ContactTextCentered,
  Title,
  Address,
  Email,
  FacebookLink,
  TelephoneLink,
} from './ContactInfo.style';

const ContactInfo: React.FC = (): JSX.Element => (
  <>
    <Title>Blacharstwo i lakiernictwo samochodowe</Title>
    <Wrapper>
      <div style={{ marginRight: '0.5rem' }}>
        <InfoWrapper>
          <Icon icon='location' />
          <Address href='https://www.google.com/maps/place/Zaborska+50,+32-600+O%C5%9Bwi%C4%99cim/@50.0348408,19.2271967,17z/data=!3m1!4b1!4m5!3m4!1s0x4716950b35116361:0x1103ecdf63cbb470!8m2!3d50.0348408!4d19.2293854'>
            <ContactText>Ul. Zaborska 50</ContactText>
            <ContactText>32-600 Oświęcim</ContactText>
          </Address>
        </InfoWrapper>
        <InfoWrapper>
          <Icon icon='email' />
          <Email href='mailto:piorowskimichalziaja@op.pl.com?subject=Email ze strony'>
            <ContactText>piorowskimichalziaja</ContactText>
            <ContactText>@op.pl</ContactText>
          </Email>
        </InfoWrapper>
      </div>
      <div>
        <InfoWrapper>
          <Icon icon='phone' />
          <div>
            <TelephoneLink href='tel:+48 884 301 308'>
              +48 884 301 308
            </TelephoneLink>
            <TelephoneLink href='tel:+48 608 678 216'>
              +48 608 678 216
            </TelephoneLink>
          </div>
        </InfoWrapper>
        <InfoWrapper>
          <Icon icon='facebook' />
          <FacebookLink href='https://www.facebook.com/profile.php?id=100065407792488'>
            <ContactText>Michał Piórowski</ContactText>
            <ContactText>Serwis</ContactText>
          </FacebookLink>
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
