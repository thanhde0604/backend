import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AdminLayout from './containers/AdminLayout';

function App() {
  return (

    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<AdminLayout/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
