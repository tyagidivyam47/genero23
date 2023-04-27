import React from 'react'
import { Route, Routes } from 'react-router';
import App from './App';
import "./App.css";
// import CulturalDetails from './Pages/EventsRules/Cultural/CulturalDetails';
import CulturalList from './Pages/EventsRules/Cultural/CulturalList';
// import Team from './components/team/Team';
import TeamPage from './Pages/TeamPage/TeamPage';
import Footer from './Pages/Footer/Footer';

const MyRoutes = () => {
  return (
    <div className='App'>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/home' element={<App/>} />
            <Route path="/cultural" element={<CulturalList />} />
            <Route path="/teampage" element={<TeamPage/>} />
        </Routes>
        <Footer/>

    </div>
  )
}

export default MyRoutes;
