import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import Header from './conponents/Header'
import Footer from './conponents/Footer';
import Luces from './conponents/Luces'
import Landing from './conponents/Landing';
import Inicio from './conponents/landing/Inicio'
import Proyectos from './conponents/landing/Proyectos'
import Conocimientos from './conponents/landing/Conocimientos'
import Contactarme from './conponents/landing/Contactarme'
import './index.css';

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Luces />
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/Landing/Inicio" element={<Inicio />} />
        <Route path="/Landing/Proyectos" element={<Proyectos />} />
        <Route path="/Landing/Conocimientos" element={<Conocimientos />} />
        <Route path="/Landing/Contactarme" element={<Contactarme />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
)
