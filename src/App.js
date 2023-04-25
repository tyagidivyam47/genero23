import './App.css';
import { useLocation } from 'react-router-dom';
import About from './Pages/About';
import Events from './Pages/Events/Events';
import FAQ from './Pages/FAQ/FAQ';
import Home from './Pages/Home';
// import Footer from './Pages/Footer/Footer';
import PreLoader from './Pages/PreLoader/PreLoader';
import { useEffect, useState } from 'react';
// import Team from './components/team/Team';
import Registration from './Pages/Register/Registration';
import TeamSection from './Pages/TeamSection';
// import Navbar from './Atoms/Navbar';
// import TeamPage from './Pages/TeamPage/TeamPage';
function App() {
  const { search } = useLocation();
  var s=search.split('=')
  const [showSite, setSite] = useState(s[1])
  useEffect(() => {
    window.location.hash='#'+s[s.length-1]
    setTimeout(() => {
      setSite(true)
    }, 3000)// eslint-disable-next-line
  }, [])
  return (
    <div className="App">
      {(showSite)
        ? <div className='sub-app'>
          <Home parallax={s[1]} />
          <About />
          <Events />
          <FAQ />
          <TeamSection />
          <Registration />
          </div>
        : <PreLoader />
      }

    </div>
  );
}



export default App;
