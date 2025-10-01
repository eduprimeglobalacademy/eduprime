// src/components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx/';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
