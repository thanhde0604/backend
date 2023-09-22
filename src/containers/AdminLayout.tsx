import * as React from 'react';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import Table from '../components/Table';
import Home from '../pages/Home';

const AdminLayout = () => {
    return ( 
        <>
         <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Login />} />
    </Routes>
       
        </>
     );
}
 
export default AdminLayout;