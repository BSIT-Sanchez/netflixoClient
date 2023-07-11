import React from 'react';
import { Routes,Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import MoviesPage from './Screens/MoviesPage';
import AboutUs from './Screens/AboutUs';
import ContactUs from './Screens/ContactUs';
import Login from './Screens/Login';
import Favorites from './Screens/Favorites';
import NotFound from './Screens/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/movies' element={<MoviesPage/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
      <Route path='*' element={<NotFound/>}/>

    </Routes>
      
  );
}

export default App