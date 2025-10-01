// src/App.js
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import './index.css'
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import 'animate.css';




function App() {
  return <RouterProvider router={router} />;
}

export default App;
