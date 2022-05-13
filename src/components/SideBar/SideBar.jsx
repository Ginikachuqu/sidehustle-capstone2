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
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ProfilePic from '../../assets/media/imgs/profile.avif';
import sidebarLinks from '../../store/sideBarLinks';
import swal from 'sweetalert';

const SideBar = () => {
  //   Hooks
  const { pathname } = useLocation();
  const navigate = useNavigate();

  //   Renders
  const renderLinks = sidebarLinks.map(({ path, icon, title }, index) => {
    return (
      <LinkBox
        key={`${path}-${index}`}
        w={'100%'}
        _hover={{ color: 'gray.50' }}
        borderLeft={pathname === path ? '3px solid white' : 'none'}
        px={8}
        rounded={'sm'}
        color={pathname === path ? 'gray.50' : '#AEAEAE'}
      >
        <Link to={path}>
          <Flex align="center" gap={10}>
            {icon}
            <Text fontSize={'md'} fontWeight={900}>
              {title}
            </Text>
          </Flex>
        </Link>
      </LinkBox>
    );
  });

  // Functions
  const handleLogout = () => {
    swal({
      title: 'Leaving so soon?',
      text: 'Visit soon',
      icon: 'warning',
      buttons: true,
    }).then((action) => {
      if (action) {
        swal({
          title: 'Bye!',
          text: 'See you soon',
          icon: 'success',
          timer: 2000,
          buttons: false,
        });
        setTimeout(() => {
          navigate('/');
        }, 2500);
      } else {
        swal({
          title: 'You stayed!',
          text: 'Enjoy the best services',
          icon: 'success',
          buttons: false,
          timer: 2000,
        });
      }
    });
  };

  return (
    <VStack minH={'100vh'} w={'100%'}>
      <Box
        minH={'100vh'}
        display={['none', 'none', 'none', 'none', 'flex']}
        w={'100%'}
        flexDirection="column"
        bgColor={'#000000'}
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
          <Text fontSize={'lg'} fontWeight={900}>
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
          <Box onClick={handleLogout} cursor={'pointer'}>
            <Flex align="center" color={'#AEAEAE'} gap={10}>
              <FiLogOut size="25px" />
              <Text fontSize={'lg'} fontWeight={900}>
                Log Out
              </Text>
            </Flex>
          </Box>
        </LinkBox>
      </Box>
    </VStack>
  );
};

export default SideBar;
