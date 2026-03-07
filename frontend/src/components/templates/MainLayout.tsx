import React from 'react';
import { Outlet } from 'react-router-dom'
import { Navigation, Footer } from '../organisms'

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow mt-16 pb-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout
