import './App.css';
import Navbar from './Atoms/Navbar';
import About from './Pages/About';
import Home from './Pages/Home';
import Sponsors from './Pages/Sponsors';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Sponsors />
    </div>
  );
}

export default App;
