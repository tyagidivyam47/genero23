import React from 'react'
import { Route, Routes } from 'react-router';
import App from './App';
import "./App.css";
import Navbar from './Atoms/Navbar';
import CulturalDetails from './Pages/EventsRules/Cultural/CulturalDetails';
import CulturalList from './Pages/EventsRules/Cultural/CulturalList';

const MyRoutes = () => {
  return (
    <div className='App'>
        <Navbar />

        <Routes>
            <Route path='/' element={<App/>} />
            <Route path="/cultural" element={<CulturalList />} />

            <Route path="/cultural/:id" element={<CulturalDetails />} />
        </Routes>
    </div>
  )
}

export default MyRoutes;
