import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import Footer from './components/Footer';
import Luces from './components/Luces'
import Landing from './components/Landing';
import Person from './components/Person'
import React from 'react';
import { Provider } from 'react-redux';
import store from '@/utils/redux/store';
import './index.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <div className='Content'>
      <Luces />
      <Header />
      <Landing />
      <Footer />
      <Person />
    </div>
  </Provider>
)
