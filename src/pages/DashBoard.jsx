import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import LineChart from '../components/LineChart/LineChart';
import DashboardLayout from '../Layout/DashboardLayout';
import monthlyData from '../store/ChatData';

const DashBoard = () => {
  // Hooks
  const [monthData, setMonthData] = useState({
    labels: monthlyData.map((data) => data.month),
    datasets: [
      {
        label: '$1,800',
        data: monthlyData.map((data) => data.moneyMade),
        backgroundColor: '#000',
      },
      { linePercentage: 0.5 },
    ],
  });

  const [show, setShow] = useState(true);

  return (
    <DashboardLayout show={show}>
      <Box width={'100%'} border={'1px solid black'}>
        <VStack>
          <Flex>
            <Text>Statistics</Text>
            <HStack>
              <Text>Income</Text>
              <Text>Expenses</Text>
            </HStack>
          </Flex>

          {/* The Chart */}
          <Box bgColor={'#F9F9F9'} width={'100%'}>
            <LineChart monthData={monthData} />
          </Box>
        </VStack>
      </Box>
    </DashboardLayout>
  );
};

export default DashBoard;
