import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import Footer from './components/Footer';
import Luces from './components/Luces'
import Landing from './components/Landing';
import Person from './components/Person'
import React from 'react';
import './index.css';

createRoot(document.getElementById('root')).render(
  <div className='Content'>
    <Luces />
    <Header />
    <Landing />
    <Footer />
    <Person />
  </div>
)
