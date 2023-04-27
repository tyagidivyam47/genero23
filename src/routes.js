import React from 'react'
import { Route, Routes } from 'react-router';
import App from './App';
import "./App.css";
import CulturalList from './Pages/Events/Cultural/CulturalList';
import TeamPage from './Pages/Team/TeamPage/TeamPage';
import Footer from './Atoms/footer/Footer';

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
