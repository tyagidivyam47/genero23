import './App.css';
import Navbar from './Atoms/Navbar';
import About from './Pages/About';
import Events from './Pages/Events/Events';
import Home from './Pages/Home';
import Sponsors from './Pages/Sponsors';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Sponsors />
      <About />
      <Events />
    </div>
  );
}

export default App;
