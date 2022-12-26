import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Landing from './components/Landing';
import Footer from "./components/Footer";
import { Route, Routes, Navigate } from "react-router-dom";
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import DetailsPage from './components/DetailsPage';
import NotFound from './components/NotFound';
import { Programmers } from './components/Programmers';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Routes>
                    <Route path="/products/" element={<Products />} />
                    <Route path="/products/:id" element={<DetailsPage />} />
                    <Route path='/' element={<Landing />} />
                    <Route path='/aboutUs/*' element={<AboutUs />} >
                        <Route path='programmers' element={<Programmers />} />
                        <Route path='drivers' element={<h1>Drivers</h1>} />
                    </Route>
                    <Route path='/NotFound' element={<NotFound />} />
                    <Route path='/*' element={<Navigate to="/NotFound" />} />
                </Routes>
                <Footer />
            </div>
        )
    }
}

export default App;
