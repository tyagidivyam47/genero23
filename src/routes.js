import React from 'react'
import { Route, Routes } from 'react-router';
import App from './App';
import "./App.css";
import Navbar from './Atoms/Navbar';
import CulturalDetails from './Pages/EventsRules/Cultural/CulturalDetails';
import CulturalList from './Pages/EventsRules/Cultural/CulturalList';
import Team from './components/team/Team';
import TeamPage from './Pages/TeamPage/TeamPage';
import Footer from './Pages/Footer/Footer';

const MyRoutes = () => {
  return (
    <div className='App'>
      <Navbar />
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/home' element={<App/>} />
            <Route path="/cultural" element={<CulturalList />} />
            <Route path="/team" element={<Team/>} />
            <Route path="/teampage" element={<TeamPage/>} />
            <Route path="/cultural/:id" element={<CulturalDetails />} />
        </Routes>
        <Footer/>

    </div>
  )
}

export default MyRoutes;
