import './App.css';
import Navbar from './Atoms/Navbar';
import About from './Pages/About';
import Events from './Pages/Events/Events';
import FAQ from './Pages/FAQ/FAQ';
import Home from './Pages/Home';
import Footer from './Pages/Footer/Footer';
import PreLoader from './Pages/PreLoader/PreLoader';
import { useEffect, useState } from 'react';
import Team from './components/team/Team';
import Registration from './Pages/Register/Registration';
function App() {
  const [showSite, setSite]=useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setSite(true)
    },3000)
  },[])
  return (
    <div className="App">
      {(showSite)
      ?<div>
      <Navbar />
      <Home />
      <About />
      <Events />
      <FAQ />
      <Team/>
      <Registration />
      <Footer /></div>
      :<PreLoader />
      }
      
    </div>
  );
}



export default App;
