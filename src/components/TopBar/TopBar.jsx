import React from 'react';
import {
  Avatar,
  Center,
  Circle,
  Flex,
  HStack,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Button,
  VStack,
  Box,
  LinkBox,
  Stack,
  Spacer,
} from '@chakra-ui/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import ProfilePic from '../../assets/media/imgs/profilepic.avif';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FiLogOut } from 'react-icons/fi';
import { BiMenu } from 'react-icons/bi';
import ProfilePic1 from '../../assets/media/imgs/profile.avif';
import sidebarLinks from '../../store/sideBarLinks';
import swal from 'sweetalert';

const TopBar = () => {
  // Hooks
  const { pathname } = useLocation();
  const name = pathname.slice(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  // Functions
  const handleLogout = () => {
    onClose();
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

  // Renders
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

  return (
    <Flex width="100%" align={'center'} justify="space-between">
      <Text
        fontSize={'30px'}
        fontWeight={600}
        lineHeight={'40px'}
        textTransform={'capitalize'}
        cursor={'pointer'}
      >
        {name}
      </Text>

      <HStack
        minWidth={'14%'}
        align={'center'}
        justify={'space-between'}
        display={['none', 'none', 'none', 'none', 'flex', 'flex']}
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

      <Center
        _active={{
          transform: 'scale(.95)',
        }}
        display={['flex', 'flex', 'flex', 'flex', 'none']}
        onClick={onOpen}
      >
        <BiMenu size={'40px'} cursor={'pointer'} />
      </Center>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size={'md'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            color={'white'}
            fontSize={'20px'}
            _focus={{
              border: 'none',
            }}
            _active={{
              transform: 'scale(.95)',
            }}
          />
          <DrawerBody p={0}>
            <VStack minH={'100vh'} width={'100%'}>
              <Box
                minH={'100vh'}
                display={['flex', 'flex', 'flex', 'flex', 'flex']}
                flexDirection="column"
                bgColor={'#000000'}
                p={5}
                pl={0}
                pr={0}
                pt={8}
                width={'100%'}
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
                    src={ProfilePic1}
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default TopBar;
