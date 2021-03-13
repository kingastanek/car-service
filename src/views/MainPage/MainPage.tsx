import React from 'react';
import { NavBar } from 'components';
import icons from 'icons/icons';
import {
  CarImage1,
  CarImage2,
  CarImage3,
  MainText,
  Scroll,
  IconButtonWrapper,
} from './MainPage.style';

const MainPage = () => {
  const ArrowUpIcon = icons['arrowUp'];
  const ArrorDownIcon = icons['arrowDown'];
  return (
    <>
      <NavBar />
      <CarImage1 id='car1'>
        <MainText>
          Naprawa szkód powypadkowych <br />
          Michał Piórowski
          <br />
          ul. Zaborska 50, Oświęcim
          <br />
          <p style={{ fontSize: '15px', marginBottom: 0 }}>
            Kliknij lub zescrolluj zeby naprawić swój samochód
          </p>
          <Scroll to='car2' spy smooth>
            <IconButtonWrapper>
              <ArrorDownIcon />
            </IconButtonWrapper>
          </Scroll>
        </MainText>
      </CarImage1>
      <CarImage2 id='car2'>
        <MainText>
          Blacharstwo
          <p style={{ fontSize: '18px', width: '400px' }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
            accusamus adipisci alias velit quas aliquam?
          </p>
          <p style={{ fontSize: '15px', margin: 0 }}>
            Kliknij lub zescrolluj zeby przemalować swój samochód
          </p>
          <Scroll to='car3' spy smooth>
            <IconButtonWrapper>
              <ArrorDownIcon />
            </IconButtonWrapper>
          </Scroll>
        </MainText>
      </CarImage2>
      <CarImage3 id='car3'>
        <MainText>
          Lakiernictwo
          <p style={{ fontSize: '18px', width: '400px' }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
            accusamus adipisci alias velit quas aliquam? Dolor unde.
          </p>
          <p style={{ fontSize: '15px', margin: 0 }}>Wróć na górę</p>
          <Scroll to='car1' spy smooth>
            <IconButtonWrapper>
              <ArrowUpIcon />
            </IconButtonWrapper>
          </Scroll>
        </MainText>
      </CarImage3>
    </>
  );
};

export default MainPage;
