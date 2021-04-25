import React from 'react';
import { NavBar } from 'components';
import { MainPage, AboutMePage, TinsmithingPage, VarnishingPage } from 'views';

function App() {
  return (
    <>
      <NavBar />
      <MainPage />
      <AboutMePage />
      <TinsmithingPage />
      <VarnishingPage />
    </>
  );
}

export default App;
