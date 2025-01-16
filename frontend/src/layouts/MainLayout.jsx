import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'

const MainLayout = () => {
  return (
    <Box>
      <Navigation />
      <Box as="main" py={8} px={4}>
        <Outlet />
      </Box>
      {/* Footer will go here */}
    </Box>
  )
}

export default MainLayout
