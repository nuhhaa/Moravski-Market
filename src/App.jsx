import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Naslovna from './pages/Naslovna';
import Onama from './pages/Onama';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Naslovna />} />
          <Route path='/onama' element={<Onama />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;


