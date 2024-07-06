import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Projects from '../Projects/Projects';


function CustomRoute() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
    </Routes>
  );
} 

export default CustomRoute;
