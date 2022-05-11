import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import SideBar from '../components/SideBar/SideBar';
import TopBar from '../components/TopBar/TopBar';
import RightSideBar from '../components/RightSideBar/RightSideBar';

const DashboardLayout = ({ children }) => {
  return (
    <Box maxW={'100%'} minH={'100vh'} display="flex">
      <SideBar />
      <Box
        w={'80%'}
        minH={'100vh'}
        border={'3px solid red'}
        display={'flex'}
        px={'20px'}
        pt={9}
        gap={20}
        flexDirection={'column'}
      >
        <TopBar />

        <HStack align="center" justify="flex-start" border={'2px solid black'}>
          {children}
          <RightSideBar />
        </HStack>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
