import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import DashboardLayout from '../Layout/DashboardLayout';

const DashBoard = () => {
  return (
    <DashboardLayout>
      <Box width={'100%'} border={'1px solid black'}>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
      </Box>
    </DashboardLayout>
  );
};

export default DashBoard;
