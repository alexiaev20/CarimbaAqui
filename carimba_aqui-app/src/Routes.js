import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Componentes/Home/Home';

import Header from './Componentes/Header/Header';
import Footer from "../../Componentes/Footer/Footer";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Adicione outras rotas conforme necessário */}
    </Routes>
  );
};

export default AppRoutes;
