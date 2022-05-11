import React from 'react';
import {
  Avatar,
  Box,
  Flex,
  LinkBox,
  Spacer,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

import { FiLogOut } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import ProfilePic from '../../assets/media/imgs/profile.avif';
import sidebarLinks from '../../store/sideBarLinks';

const SideBar = () => {
  //   Hooks
  const { pathname } = useLocation();

  //   Renders
  const renderLinks = sidebarLinks.map(({ path, icon, title }, index) => {
    return (
      <LinkBox
        key={`${path}-${index}`}
        w={'100%'}
        _hover={{ color: 'gray.500' }}
        borderLeft={pathname === path ? '3px solid white' : 'none'}
        px={8}
        rounded={'sm'}
        color={pathname === path ? 'gray.50' : '#AEAEAE'}
      >
        <Link to={path}>
          <Flex align="center" gap={10}>
            {icon}
            <Text fontSize={'lg'} fontWeight={'semibold'}>
              {title}
            </Text>
          </Flex>
        </Link>
      </LinkBox>
    );
  });

  return (
    <VStack minH={'100vh'} w={'20%'} bgColor={'#000000'}>
      <Box
        minH={'100vh'}
        display={{ base: 'none', md: 'flex' }}
        w={'100%'}
        flexDirection="column"
        p={5}
        pl={0}
        pr={0}
        pt={8}
      >
        <Flex
          align={'center'}
          width="100%"
          border={'1px solid black'}
          justify={'center'}
          flexDir={'column'}
          color={'white'}
          gap={2}
        >
          <Avatar
            size={'lg'}
            src={ProfilePic}
            name={'James'}
            loading={'lazy'}
          />
          <Text fontSize={'lg'} fontWeight={'bold'}>
            James
          </Text>
        </Flex>

        <Stack mt={20} gap={'60px'}>
          {renderLinks}
        </Stack>

        <Spacer />

        <LinkBox
          w={'100%'}
          _hover={{ color: 'gray.500' }}
          px={8}
          rounded={'sm'}
          pb={2}
        >
          <Link to={'/'}>
            <Flex align="center" color={'#AEAEAE'} gap={10}>
              <FiLogOut size="25px" />
              <Text fontSize={'lg'} fontWeight={'semibold'}>
                Log Out
              </Text>
            </Flex>
          </Link>
        </LinkBox>
      </Box>
    </VStack>
  );
};

export default SideBar;
