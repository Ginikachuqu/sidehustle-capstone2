import React from 'react';
import {
  Box,
  Center,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const RightSideBar = () => {
  return (
    <Stack width={'50%'} border={'1px solid black'} gap={5}>
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

      <VStack width={'100%'} border={'1px solid black'}>
        <Flex flexDirection={'column'}>
          <Text>Current balance</Text>
          <Heading
            fontSize={'3xl'}
            fontWeight={'700'}
            lineHeight={'40px'}
            pb={3}
          >
            $259,999
          </Heading>
        </Flex>
      </VStack>
    </Stack>
  );
};

export default RightSideBar;
