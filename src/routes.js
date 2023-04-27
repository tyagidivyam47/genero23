import React from 'react'
import { Route, Routes } from 'react-router';
import App from './App';
import "./App.css";
import CulturalDetails from './Pages/EventsList/Cultural/CulturalDetails';
import CulturalList from './Pages/EventsList/Cultural/CulturalList';
import Team from './components/team/Team';
import TeamPage from './Pages/TeamPage/TeamPage';
import Footer from './Pages/Footer/Footer';
import EventsList from './Pages/EventsList/EventsList';
// import EgamingList from './Pages/EventsList/Egaming/EgamingList';
import InformalList from './Pages/EventsList/Informal/InformalList';
import PhotographyList from './Pages/EventsList/Photography/PhotographyList';
import LiteraryList from './Pages/EventsList/Literary/LiteraryList';
import EgamingDetails from './Pages/EventsList/Egaming/EgamingDetails';
import EgamingList from './Pages/EventsList/Egaming/EgamingList';
import InformalDetails from './Pages/EventsList/Informal/InformalDetails';
import LiteraryDetails from './Pages/EventsList/Literary/LiteraryDetails';
import PhotographyDetails from './Pages/EventsList/Photography/CulturalDetails';

const MyRoutes = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/home' element={<App />} />
        <Route path="/events" element={<EventsList />} />
        <Route path="/events/cultural" element={<CulturalList />} />
        <Route path="/events/egaming" element={<EgamingList />} />
        <Route path="/events/informal" element={<InformalList />} />
        <Route path="/events/photography" element={<PhotographyList />} />
        <Route path="/events/literary" element={<LiteraryList />} />
        <Route path="/team" element={<Team />} />
        <Route path="/teampage" element={<TeamPage />} />
        <Route path="/cultural/:id" element={<CulturalDetails />} />
        <Route path="/egaming/:id" element={<EgamingDetails />} />
        <Route path="/informal/:id" element={<InformalDetails />} />
        <Route path="/literary/:id" element={<LiteraryDetails />} />
        <Route path="/photography/:id" element={<PhotographyDetails />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default MyRoutes;
