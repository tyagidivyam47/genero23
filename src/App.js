import './App.css';
import Navbar from './Atoms/Navbar';
import About from './Pages/About';
import Events from './Pages/Events/Events';
import FAQ from './Pages/FAQ/FAQ';
import Home from './Pages/Home';
// import Sponsors from './Pages/Sponsors';
import Footer from './Pages/Footer/Footer';
// import CulturalList from './Pages/EventsRules/Cultural/CulturalList'
import PreLoader from './Pages/PreLoader/PreLoader';
import { useEffect, useState } from 'react';
function App() {
  const [showSite, setSite]=useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setSite(true)
    },5000)
  },[])
  return (
    <div className="App">
      {(showSite)
      ?<div>
      <Navbar />
      <Home />
      <About />
      <Events />
      {/* <Sponsors /> */}
      <FAQ />
      {/* <CulturalList /> */}
      <Footer /></div>
      :<PreLoader />
      }
      
    </div>
  );
}



export default App;
