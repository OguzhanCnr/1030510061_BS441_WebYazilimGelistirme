import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home';
import Layout from '../pages/Layout/Layout';
//import Dashboard from '../pages/Dashboard/dashboard';
import Error from '../pages/Error/Error';
import Game from '../pages/Game/Game';

function Navigation() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path='/game' element={<Game/>} />
          <Route path="*" element={<Error />} />
        </Route>
       
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;