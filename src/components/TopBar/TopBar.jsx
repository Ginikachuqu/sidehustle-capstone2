import React from 'react';
import {
  Avatar,
  Center,
  Circle,
  Flex,
  HStack,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import ProfilePic from '../../assets/media/imgs/profilepic.avif';
import { IoMdNotificationsOutline } from 'react-icons/io';

const TopBar = () => {
  const { pathname } = useLocation();
  const name = pathname.slice(1);

  return (
    <Flex width="100%" align={'center'}>
      <Text
        fontSize={'30px'}
        fontWeight={600}
        lineHeight={'40px'}
        textTransform={'capitalize'}
        cursor={'pointer'}
      >
        {name}
      </Text>

      <Spacer />

      <HStack
        width={'14%'}
        align={'center'}
        justify={'space-between'}
        display={['none', 'none', 'none', 'flex', 'flex']}
      >
        <BsSearch size={'20px'} cursor={'pointer'} />

        <Center position={'relative'}>
          <Circle
            w={2}
            h={2}
            position={'absolute'}
            bgColor={'red.500'}
            top={1}
            right={1}
          />
          <IoMdNotificationsOutline size={'25px'} cursor={'pointer'} />
        </Center>

        <Avatar
          size={'md'}
          src={ProfilePic}
          name={'James'}
          loading={'lazy'}
          cursor={'pointer'}
        />
      </HStack>
    </Flex>
  );
};

export default TopBar;
