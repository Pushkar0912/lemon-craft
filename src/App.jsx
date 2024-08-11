import { useRef } from 'react';
import './App.css';
import Astronaut from './Components/Astronaut';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import OurMission from './Components/OurMission';
import Sidebar from './Components/Scrollbar';
import CustomCursor from './Components/cursor';
import BackLines from './Components/backlines';

function App() {
  const aboutusRef = useRef(null);
  const astronautRef = useRef(null);

  

  return (
    <div>
      <Navbar />
      <HeroSection ref={aboutusRef} />
      <Astronaut ref={astronautRef} />
      <OurMission />
      <Sidebar />
      <CustomCursor/>
      <BackLines/>
    </div>
  );
}

export default App;
