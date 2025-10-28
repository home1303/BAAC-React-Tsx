import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../views/HomePage';
import SearchForm from '../views/SearchForm';

const HomeRouter: React.FC = () => (

  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/home" element={<HomePage />} />
    <Route path='/SearchForm' element={<SearchForm />} />
  </Routes>
);

export default HomeRouter;
