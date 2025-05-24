import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Naslovna from './pages/Naslovna';
import Onama from './pages/Onama';
import Distribucija from './pages/Distribucija';
import Novosti from './pages/Novosti';
import Kontakt from './pages/Kontakt';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Naslovna />} />
          <Route path='/onama' element={<Onama />} />
          <Route path='/distribucija' element={<Distribucija />} />
          <Route path='/novosti' element={<Novosti />} />
          <Route path='/kontakt' element={<Kontakt />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;


