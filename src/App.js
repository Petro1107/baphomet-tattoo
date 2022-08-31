import './App.css';
import NavigationBar from './components/NavigationBar';
import Banner from './components/Banner';
import Portrait from './components/Portrait';
import InfoSection from './components/InfoSection';
import Slides from './components/Slides';
import Galery from './components/Galery';
import CalcForm from './components/CalcForm';
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
      <Galery />
      <CalcForm />
    </>
  );
}

export default App;
