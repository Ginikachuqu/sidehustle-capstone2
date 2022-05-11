import React from 'react';
import {
  Avatar,
  Button,
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
import { IoIosAdd } from 'react-icons/io';
import LadyonOrange from '../../assets/media/imgs/ladyonorange.avif';
import LadyOnBlack from '../../assets/media/imgs/ladyonblack.avif';
import ManOnBlue from '../../assets/media/imgs/manonblue.avif';
import SittingMan from '../../assets/media/imgs/sitingman.avif';
import { useNavigate } from 'react-router-dom';

const RightSideBar = () => {
  // Hooks
  const navigate = useNavigate();

  // Functions
  const handleNavigate = () => {
    navigate('/team');
  };

  return (
    <Stack width={'40%'} gap={8} minH={'100vh'}>
      <Heading fontSize={'3xl'} fontWeight={'700'} lineHeight={'40px'}>
        Card
      </Heading>

      <VStack
        width={'100%'}
        align={'flex-start'}
        px={5}
        py={4}
        bgGradient="linear(to-tr, #000000, #141414)"
        borderRadius={'2xl'}
        fontFamily={"'Roboto', sans - serif"}
        boxShadow={'sm'}
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
            <Text>FireFly</Text>
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
        boxShadow={'sm'}
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

      <VStack align={'flex-start'} justify="center" gap={4}>
        <Heading fontSize={'25px'} fontWeight={'600'} lineHeight={'40px'}>
          Some Team members
        </Heading>

        <Flex w={'100%'} gap={8} align={'center'} userSelect={'none'}>
          <Avatar src={LadyonOrange} size={'md'} />
          <Avatar src={ManOnBlue} size={'md'} />
          <Avatar src={LadyOnBlack} size={'md'} />
          <Avatar src={SittingMan} size={'md'} />
          <Circle
            border={'1px solid black'}
            w={'50px'}
            minH={'50px'}
            bgColor={'#000000'}
            cursor={'pointer'}
            _active={{
              transform: 'scale(.97)',
            }}
            onClick={handleNavigate}
          >
            <IoIosAdd color={'#EAEAEA'} size={'sm'} />
          </Circle>
        </Flex>
      </VStack>

      <VStack
        align={'flex-start'}
        w={'100%'}
        bgGradient={'linear(to-r, #F6B06F, #F9C596)'}
        p={5}
        gap={5}
        borderRadius={'lg'}
      >
        <Heading
          fontSize={'xl'}
          fontWeight={'700'}
          lineHeight={'3    0px'}
          color={'white'}
        >
          Have a chat with your investors
        </Heading>

        <Text
          color={'gray.200'}
          fontSize={'16px'}
          fontWeight={'normal'}
          lineHeight={'29px'}
        >
          Talk with your customer
        </Text>

        <Button
          bgColor={'white'}
          p={'10px 25px 10px 25px'}
          _hover={{
            bgColor: 'white',
          }}
          _focus={{
            border: 'none',
          }}
          _active={{
            bgColor: 'white',
            transform: 'scale(.97)',
          }}
        >
          Chat Now
        </Button>
      </VStack>
    </Stack>
  );
};

export default RightSideBar;
