import React from 'react';
import {
  Avatar,
  Center,
  Circle,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { GrAdd } from 'react-icons/gr';

const RightSideBar = () => {
  return (
    <Stack width={'50%'} border={'1px solid black'} gap={5} minH={'100vh'}>
      <Heading fontSize={'3xl'} fontWeight={'700'} lineHeight={'40px'}>
        Card
      </Heading>

      <VStack
        width={'100%'}
        border={'1px solid black'}
        align={'flex-start'}
        px={5}
        py={4}
        bgGradient="linear(to-tr, #000000, #141414)"
        borderRadius={'2xl'}
        fontFamily={"'Roboto', sans - serif"}
      >
        <Flex w={'100%'} align={'flex-start'}>
          <Text
            bgGradient="linear(to-l, #E4BDCD, #BF93CF, #DAABC0, #E4DBD7,#C79DCD, #F3BCC2)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
            lineHeight={'40px'}
            fontFamily={"'Roboto', sans - serif"}
            minH={'70px'}
            textTransform={'uppercase'}
            pt={2}
          >
            Visa
          </Text>

          <Spacer />

          <Center bgColor={'#2B2B2B'} p={2} borderRadius={'md'}>
            <BsThreeDotsVertical color={'#888888'} cursor={'pointer'} />
          </Center>
        </Flex>

        <Flex
          w={'100%'}
          color={'#FFFFFF'}
          align="center"
          justify="space-between"
          fontSize="28px"
          pb={3}
        >
          <Text> 4029</Text>
          <Text> 2435</Text>
          <Text> . . . .</Text>
          <Text> 3290</Text>
        </Flex>

        <Flex w={'100%'} color={'#D7D7D7'}>
          <Stack>
            <Text color={'#9C9C9C'}>Card name :</Text>
            <Text>Chigbo Ifeanyi</Text>
          </Stack>
          <Spacer />
          <Stack>
            <Text color={'#9C9C9C'}>Expires</Text>
            <Text>04 / 24</Text>
          </Stack>
        </Flex>
      </VStack>

      <Flex
        width={'100%'}
        border={'1px solid #E5E5E5'}
        align={'flex-start'}
        justify={'flex-start'}
        p={5}
        borderRadius={'3xl'}
      >
        <VStack align={'flex-start'} justify={'flex-start'}>
          <Text
            color={'#636363'}
            fontSize={'16px'}
            fontWeight={'normal'}
            lineHeight={'29px'}
          >
            Current balance
          </Text>
          <Heading
            fontSize={'3xl'}
            fontWeight={'700'}
            lineHeight={'40px'}
            pb={3}
          >
            $259,999
          </Heading>
        </VStack>

        <Spacer />

        <Center bgColor={'#F9F9F9'} p={2} borderRadius={'md'}>
          <BsThreeDotsVertical color={'#8C8C8C'} cursor={'pointer'} />
        </Center>
      </Flex>

      <VStack>
        <Heading>Some Team members</Heading>

        <Flex>
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Circle>
            <GrAdd />
          </Circle>
        </Flex>
      </VStack>
    </Stack>
  );
};

export default RightSideBar;
