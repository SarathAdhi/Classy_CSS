import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import Header from './components/Common/Header/Header';
import Docs from './components/Pages/Docs/Docs';

export default function App() {
    return (
        <Router>
        <Header />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/docs' exact element={<Docs />} />
            </Routes>
        </Router>
    )
}
