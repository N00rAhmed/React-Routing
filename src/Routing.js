import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import SecondPage from './SecondPage';

function Routing() {
  return (
    <BrowserRouter>
        <Routes>
        <Route
            path="/"
            element={ <App /> }
        />
        {/* The next line is very important for the Navigate component to work */}
        <Route
            path="/secondPage"
            element={ <SecondPage /> }
        />

        </Routes>
    </BrowserRouter>
  )
}

export default Routing