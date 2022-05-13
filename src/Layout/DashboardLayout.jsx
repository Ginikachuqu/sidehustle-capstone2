import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import SideBar from '../components/SideBar/SideBar';
import TopBar from '../components/TopBar/TopBar';
import RightSideBar from '../components/RightSideBar/RightSideBar';

const DashboardLayout = ({ children, show }) => {
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
        display={'flex'}
        px={'20px'}
        pt={9}
        gap={10}
        flexDirection={'column'}
      >
        <TopBar />

        <HStack align="flex-start" justify="flex-start" gap={3} maxW={'100%'}>
          {children}
          {show ? <RightSideBar /> : ''}
        </HStack>
      </Box>
    </Box>
  );
};

export default DashboardLayout;