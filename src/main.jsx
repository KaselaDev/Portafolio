import { createRoot } from 'react-dom/client'
import Landing from './components/landing/Landing';
import Proyectos from './components/Proyectos/Proyectos';
import LanguageWrapper from './utils/LanguageWrapper';
import React from 'react';
import { Provider } from 'react-redux';
import store from '@/utils/redux/store';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './index.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<LanguageWrapper defaultLang="/us/Landing" />} />
        <Route
          path="/:lang/:section" 
          element={<LanguageWrapper defaultLang="/us/Landing" />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)