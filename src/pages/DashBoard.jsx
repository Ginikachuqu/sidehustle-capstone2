import React, { useState } from 'react';
import {
  Box,
  Center,
  Circle,
  Flex,
  Heading,
  HStack,
  Spacer,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { BsArrowUpRight } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import { BsApple } from 'react-icons/bs';
import { GrAmazon } from 'react-icons/gr';
import { AiFillYoutube } from 'react-icons/ai';
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
        <VStack px={4} width={'100%'}>
          <Flex
            fontSize={'lg'}
            fontWeight={600}
            width={'100%'}
            mb={1}
            align="flex-end"
          >
            <Text fontSize={'30px'} fontWeight={700}>
              Statistics
            </Text>
            <Spacer />
            <HStack>
              <Text>Income</Text>
              <Text color={'#8888'}>Expenses</Text>
            </HStack>
          </Flex>

          {/* The Chart */}
          <Box bgColor={'#F9F9F9'} width={'100%'}>
            <LineChart monthData={monthData} />
          </Box>
        </VStack>

        <Stack
          width={'100%'}
          px={4}
          border={'1px solid black'}
          mt={'50px'}
          gap={3}
        >
          <Flex width={'100%'}>
            <Text>Last Transaction</Text>
            <Spacer />
            <HStack>
              <Text>See more</Text>
              <BsArrowUpRight />
            </HStack>
          </Flex>

          <Flex
            width={'100%'}
            border={'1px solid black'}
            align={'center'}
            justify={'space-between'}
          >
            <HStack gap={4} border={'1px solid black'}>
              <Center p={4} bgColor={'#F9F9F9'} borderRadius={'lg'}>
                <GrAmazon size={'35px'} />
              </Center>

              <VStack align={'flex-start'}>
                <Text>Amazon</Text>
                <Text>4 min ago</Text>
              </VStack>
            </HStack>

            <HStack border={'1px solid black'}>
              <Circle p={1} bgColor={'red'} />
              <Text>Shopping</Text>
            </HStack>

            <Heading fontSize={'md'}>$1.430</Heading>
          </Flex>

          <Flex
            w={'100%'}
            width={'100%'}
            border={'1px solid black'}
            align={'center'}
            justify={'space-between'}
          >
            <HStack gap={4}>
              <Center p={4} bgColor={'#F9F9F9'} borderRadius={'lg'}>
                <AiFillYoutube size={'35px'} cursor={'pointer'} />
              </Center>

              <VStack align={'flex-start'}>
                <Text>YouTube </Text>
                <Text>10 min ago</Text>
              </VStack>
            </HStack>

            <HStack>
              <Circle p={1} bgColor={'red'} />
              <Text>Subscription</Text>
            </HStack>

            <Heading fontSize={'md'}>$330</Heading>
          </Flex>

          <Flex
            w={'100%'}
            width={'100%'}
            border={'1px solid black'}
            align={'center'}
            justify={'space-between'}
          >
            <HStack gap={4}>
              <Center p={4} bgColor={'#F9F9F9'} borderRadius={'lg'}>
                <FiGithub size={'35px'} cursor={'pointer'} />
              </Center>

              <VStack align={'flex-start'}>
                <Text>Github</Text>
                <Text>4 June 2021</Text>
              </VStack>
            </HStack>

            <HStack>
              <Circle p={1} bgColor={'red'} />
              <Text>Development</Text>
            </HStack>

            <Heading fontSize={'md'}>$2.430</Heading>
          </Flex>

          <Flex
            w={'100%'}
            width={'100%'}
            border={'1px solid black'}
            align={'center'}
            justify={'space-between'}
          >
            <HStack gap={4}>
              <Center p={4} bgColor={'#F9F9F9'} borderRadius={'lg'}>
                <BsApple />
              </Center>

              <VStack align={'flex-start'}>
                <Text>Apple </Text>
                <Text>2 Jul 2021</Text>
              </VStack>
            </HStack>

            <HStack>
              <Circle p={1} bgColor={'red'} />
              <Text>Shopping</Text>
            </HStack>

            <Heading fontSize={'md'}>$65</Heading>
          </Flex>
        </Stack>
      </Box>
    </DashboardLayout>
  );
};

export default DashBoard;
