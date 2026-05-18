// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp'; // Import the component

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Outlet /> {/* This renders your page content */}
      </main>
      
      <Footer />
      
      {/* Floating WhatsApp Button - appears on ALL pages */}
      <FloatingWhatsApp />
    </div>
  );
};

export default Layout;