import React from 'react';
import { NavBar } from 'components';
import { MainPage, AboutMePage, TinsmithingPage, VarnishingPage } from 'views';

function App() {
  return (
    <>
      {/* <iframe
        // src='http://master.dszdl6dg07r.amplifyapp.com/'
        style={{
          width: '100vw',
          height: '100vh',
        }}
      > */}
      <NavBar />
      <MainPage />
      <AboutMePage />
      {/* <TinsmithingPage />
      <VarnishingPage /> */}
      {/* </iframe> */}
    </>
  );
}

export default App;
