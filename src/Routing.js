import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import SecondPage from './SecondPage';
import UserPage from './UserPage';
import Page from './Page';

function Routing() {
  return (
    <BrowserRouter>
        <Routes>
        <Route
            path="/"
            element={ <App /> }
        />

        <Route
            path="/secondPage"
            element={ <SecondPage /> }
        />
        <Route 
          path="/user/:userId" 
          element={<UserPage />} 
        />

        <Route 
          path="/page" 
          element={<Page />} 
        />

        </Routes>
    </BrowserRouter>
  )
}

export default Routing