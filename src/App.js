import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Compte from './pages/Compte';
import NotFound from './pages/NotFound';
import Panier from './pages/Panier';
import Produits from './pages/Produits';
import Contact from './pages/Contact';

import './App.css';

const App = () => {


  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Compte">Mon Compte</Link>
          <Link to="/Produits">Produit.id</Link>
          <Link to="/Panier">Mon Panier</Link>
          <Link to="/Contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Compte" element={<Compte/>} />
          <Route path="/Compte/:id" element={<Compte/>} />
          <Route path="/Panier" element={<Panier/>} />
          <Route path="/Panier/:id" element={<Panier/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Contact/:id" element={<Contact/>} />
          <Route path="/Produits" element={<Produits/>} />
          <Route path="/Produits/:id" element={<Produits/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
