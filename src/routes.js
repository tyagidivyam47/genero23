import React from 'react'
import { Route, Routes } from 'react-router';
import App from './App';
import "./App.css";
import CulturalList from './Pages/EventsList/Cultural/CulturalList';
import EgamingList from './Pages/EventsList/Egaming/EgamingList';
import InformalList from './Pages/EventsList/Informal/InformalList';
import PhotographyList from './Pages/EventsList/Photography/PhotographyList';
import LiteraryList from './Pages/EventsList/Literary/LiteraryList';
import TeamPage from './Pages/Team/TeamPage/TeamPage';
import Footer from './Atoms/footer/Footer';
import G15 from './Pages/History/G15';

const MyRoutes = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/home' element={<App />} />
        {/* <Route path="/cultural" element={<CulturalList />} /> */}
        <Route path="/teampage" element={<TeamPage />} />
        <Route path="/2015" element={<G15 />} />

        <Route path="/events/cultural" element={<CulturalList />} />
        <Route path="/events/egaming" element={<EgamingList />} />
        <Route path="/events/informal" element={<InformalList />} />
        <Route path="/events/photography" element={<PhotographyList />} />
        <Route path="/events/literary" element={<LiteraryList />} />
        {/* <Route path="/cultural/:id" element={<CulturalDetails />} />
        <Route path="/egaming/:id" element={<EgamingDetails />} />
        <Route path="/informal/:id" element={<InformalDetails />} />
        <Route path="/literary/:id" element={<LiteraryDetails />} />
        <Route path="/photography/:id" element={<PhotographyDetails />} /> */}
      </Routes>
      <Footer />

    </div>
  )
}

export default MyRoutes;
