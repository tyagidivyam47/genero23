import React from 'react'
import { Route, Routes } from 'react-router';
import App from './App';
import "./App.css";
import CulturalList from './Pages/Events/Cultural/CulturalList';
import TeamPage from './Pages/Team/TeamPage/TeamPage';
import Footer from './Atoms/footer/Footer';
import G15 from './Pages/History/G15';

const MyRoutes = () => {
  return (
    <div className='App'>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/home' element={<App/>} />
            <Route path="/cultural" element={<CulturalList />} />
            <Route path="/teampage" element={<TeamPage/>} />
            <Route path="/2015" element={<G15/>} />
        </Routes>
        <Footer/>

    </div>
  )
}

export default MyRoutes;
