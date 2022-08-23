import './App.css';
import NavigationBar from './components/NavigationBar';
import Banner from './components/Banner';
import Portrait from './components/Portrait';
import InfoSection from './components/InfoSection';
import Slides from './components/Slides';
// EMPEZAR ESTILO MOBILE FIRST

function App() {
  return (
    <>
      <Banner />
      <NavigationBar />
      <Portrait />
      <InfoSection />
      <Slides />
      <InfoSection />
    </>
  );
}

export default App;
