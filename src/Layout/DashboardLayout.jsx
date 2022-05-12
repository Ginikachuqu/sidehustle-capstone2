import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import SideBar from '../components/SideBar/SideBar';
import TopBar from '../components/TopBar/TopBar';
import RightSideBar from '../components/RightSideBar/RightSideBar';

const DashboardLayout = ({ children }) => {
  return (
    <Box maxW={'100%'} minH={'100vh'} display="flex">
      <Box
        display={['none', 'none', 'none', 'none', 'flex']}
        flexDirection={'column'}
        w={'20%'}
      >
        <SideBar />
      </Box>
      <Box
        w={['100%', '100%', '100%', '100%', '80%']}
        minH={'100vh'}
        border={'3px solid red'}
        display={'flex'}
        px={'20px'}
        pt={9}
        gap={10}
        flexDirection={'column'}
      >
        <TopBar />

        <HStack align="center" justify="flex-start" gap={3}>
          {children}
          <RightSideBar />
        </HStack>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
