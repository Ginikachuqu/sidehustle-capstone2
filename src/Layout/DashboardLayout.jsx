import React from 'react';
import { Box } from '@chakra-ui/react';
import SideBar from '../components/SideBar/SideBar';

const DashboardLayout = ({ children }) => {
  return (
    <Box maxW={'100%'} minH={'100vh'} display="flex">
      <SideBar />
      <Box maxW={'100%'} minH={'100vh'} border={'3px solid red'}>
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
