import './App.css';
import { useLocation } from 'react-router-dom';
import About from './Pages/About/About';
import Events from './Pages/Events/Events';
import FAQ from './Pages/FAQ/FAQ';
import Home from './Pages/Home/Home';
import PreLoader from './Pages/PreLoader/PreLoader';
import { useEffect, useState } from 'react';
import Registration from './Pages/Register/Registration';
import Navbar from './Atoms/navbar/Navbar';
import Theme from './Pages/Theme/Theme';
import History from './Pages/History/History';
import EventsList from './Pages/EventsList/EventsList';
import Special from './Pages/SA/Special';

function App() {

  const { search } = useLocation();
  var s = search.split('=')
  const [showSite, setSite] = useState(s[1])
  useEffect(() => {
    window.location.hash = '#' + s[s.length - 1]
    setTimeout(() => {
      setSite(true)
    }, 3000)// eslint-disable-next-line
  }, [])


  return (
    <div className="App" id='canvas1'>
      {(showSite)
        ? <div className='sub-app'>
          <Navbar />
          <Home parallax={s[1]} />
          <About />
          <History/>
          <Events />
          <Theme />
          <Special />
          <EventsList />
          <Registration />
          <FAQ />
          </div>
        : <PreLoader />
      }

    </div>
  );
}



export default App;
