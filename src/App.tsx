function App() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html:
          "<iframe src='http://www.piorowski-auto-serwis.pl' allowfullscreen style='width: 100vw; height: 100vh; border: none;' />",
      }}
    />
  );
}

export default App;
