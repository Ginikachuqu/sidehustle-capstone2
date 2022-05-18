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
  const [monthData] = useState({
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

  const [show] = useState(true);

  return (
    <DashboardLayout show={show}>
      <Box width={'100%'} pr={4}>
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
              <Text cursor={'pointer'}>Income</Text>
              <Text color={'#8888'} cursor={'pointer'}>
                Expenses
              </Text>
            </HStack>
          </Flex>

          {/* The Chart */}
          <Box bgColor={'#F9F9F9'} width={'100%'}>
            <LineChart monthData={monthData} />
          </Box>
        </VStack>

        <Stack width={'100%'} px={4} mt={'80px'} gap={5}>
          <Flex width={'100%'}>
            <Text fontSize={['md', 'md', 'xl']} fontWeight={'bold'}>
              Last Transactions
            </Text>
            <Spacer />
            <HStack>
              <Text
                fontSize={['md', 'md', 'xl']}
                fontWeight={300}
                cursor={'pointer'}
              >
                See more
              </Text>
              <BsArrowUpRight size={'25px'} cursor={'pointer'} />
            </HStack>
          </Flex>

          <Flex
            width={'100%'}
            align={['center', 'center']}
            justify={['center', 'space-between', 'space-between']}
            flexDirection={['column', 'column', 'row', 'row', 'row']}
            gap={[5, 5, 3]}
            pb={5}
          >
            <HStack
              gap={4}
              w={['100%', '100%', '33%']}
              justify={['center', 'center', 'flex-start']}
            >
              <Center p={4} bgColor={'#F9F9F9'} borderRadius={'lg'}>
                <GrAmazon size={'35px'} />
              </Center>

              <VStack align={'flex-start'}>
                <Text>Amazon</Text>
                <Text>4 min ago</Text>
              </VStack>
            </HStack>

            <HStack
              minW={['100%', '100%', '15%']}
              justify={['center', 'center', 'flex-start']}
              align={'center'}
            >
              <Circle p={1} bgColor={'red'} />
              <Text>Shopping</Text>
            </HStack>

            <Heading
              fontSize={'md'}
              textAlign={['center', 'center', 'right']}
              w={'30%'}
            >
              $1.430
            </Heading>
          </Flex>

          <Flex
            w={'100%'}
            width={'100%'}
            align={'center'}
            justify={'space-between'}
            gap={[5, 5, 3]}
            pb={5}
            flexDirection={['column', 'column', 'row', 'row', 'row']}
          >
            <HStack
              gap={4}
              w={['100%', '100%', '33%']}
              justify={['center', 'center', 'flex-start']}
            >
              <Center p={4} bgColor={'#F9F9F9'} borderRadius={'lg'}>
                <AiFillYoutube size={'35px'} cursor={'pointer'} />
              </Center>

              <VStack align={'flex-start'}>
                <Text>YouTube </Text>
                <Text>10 min ago</Text>
              </VStack>
            </HStack>

            <HStack
              minW={['100%', '100%', '15%']}
              justify={['center', 'center', 'flex-start']}
              align={'center'}
            >
              <Circle p={1} bgColor={'red'} />
              <Text>Subscription</Text>
            </HStack>

            <Heading
              w={'30%'}
              textAlign={['center', 'center', 'right']}
              fontSize={'md'}
            >
              $330
            </Heading>
          </Flex>

          <Flex
            w={'100%'}
            width={'100%'}
            align={'center'}
            gap={[5, 5, 3]}
            pb={5}
            justify={'space-between'}
            flexDirection={['column', 'column', 'row', 'row', 'row']}
          >
            <HStack
              gap={4}
              minW={['100%', '100%', '33%']}
              justify={['center', 'center', 'flex-start']}
            >
              <Center p={4} bgColor={'#F9F9F9'} borderRadius={'lg'}>
                <FiGithub size={'35px'} cursor={'pointer'} />
              </Center>

              <VStack align={'flex-start'}>
                <Text>Github</Text>
                <Text>4 June 2021</Text>
              </VStack>
            </HStack>

            <HStack
              minW={['100%', '100%', '15%']}
              justify={['center', 'center', 'flex-start']}
              align={'center'}
            >
              <Circle p={1} bgColor={'red'} />
              <Text>Development</Text>
            </HStack>

            <Heading
              w={'30%'}
              textAlign={['center', 'center', 'right']}
              fontSize={'md'}
            >
              $2.430
            </Heading>
          </Flex>

          <Flex
            w={'100%'}
            width={'100%'}
            align={'center'}
            gap={[5, 5, 3]}
            pb={5}
            justify={'space-between'}
            flexDirection={['column', 'column', 'row', 'row', 'row']}
          >
            <HStack
              gap={4}
              minW={['100%', '100%', '33%']}
              justify={['center', 'center', 'flex-start']}
            >
              <Center p={4} bgColor={'#F9F9F9'} borderRadius={'lg'}>
                <BsApple size={'35px'} cursor={'pointer'} />
              </Center>

              <VStack align={'flex-start'}>
                <Text>Apple </Text>
                <Text>2 Jul 2021</Text>
              </VStack>
            </HStack>

            <HStack
              w={'15%'}
              minW={['100%', '100%', '15%']}
              justify={['center', 'center', 'flex-start']}
              align={'center'}
            >
              <Circle p={1} bgColor={'red'} />
              <Text>Shopping</Text>
            </HStack>

            <Heading
              w={'30%'}
              textAlign={['center', 'center', 'right']}
              fontSize={'md'}
            >
              $65
            </Heading>
          </Flex>
        </Stack>
      </Box>
    </DashboardLayout>
  );
};

export default DashBoard;
