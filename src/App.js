import './App.css';
import Navbar from './Atoms/Navbar';
import About from './Pages/About';
import Events from './Pages/Events/Events';
import FAQ from './Pages/FAQ/FAQ';
import Home from './Pages/Home';
import Sponsors from './Pages/Sponsors';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Events />
      <Sponsors />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
