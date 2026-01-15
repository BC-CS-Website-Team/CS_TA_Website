import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Navigation from '../organisms/Navigation'
import Footer from '../organisms/Footer'

const MainLayout = () => {
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
