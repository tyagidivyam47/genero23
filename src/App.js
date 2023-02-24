import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  return (
    <div className="App">
      <Login />
      <Signup />
      <Home />
    </div>
  );
}

export default App;
