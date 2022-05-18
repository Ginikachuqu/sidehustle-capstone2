import React, { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Button,
  FormHelperText,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { REQUIRED_VALIDATION } from '../components/utils/utils';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Login = () => {
  // Default Values
  const initValues = {
    name: '',
    email: '',
    password: '',
  };

  // Hooks
  const [initialValue] = useState(initValues);
  const navigate = useNavigate();

  // Yup Library
  const schema = yup
    .object()
    .shape({
      name: yup.string().max(8).required(REQUIRED_VALIDATION('Name')),
      email: yup.string().email().required(REQUIRED_VALIDATION('Email')),
      password: yup
        .string()
        .required(REQUIRED_VALIDATION('Password'))
        .min(6, 'Password must be min 6 char long!'),
    })
    .required();

  // React-hook-form Library
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: initialValue,
  });

  // Functions
  const onSubmit = (values) => {
    const userValue = JSON.stringify(values);
    sessionStorage.setItem('schema', userValue);
    swal({
      title: 'Welcome!',
      text: 'Have a wonderful experience',
      icon: 'success',
      timer: 2000,
      buttons: false,
    });
    setTimeout(() => {
      navigate('/dashboard');
      reset();
    }, 2500);
  };

  const onError = (error) => {
    console.log('Error::::::', error);
  };

  return (
    <Box
      w={['full', 'md']}
      p={[7, 8]}
      mt={[20, '10vh']}
      mx="auto"
      borderRadius={10}
      textColor={'gray.900'}
      boxShadow={
        'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;'
      }
    >
      <VStack spacing={4} align="flex-start" w="full" gap={1}>
        <VStack spacing={1} align={['flex-start', 'center']} w="full">
          <Heading>Login</Heading>
          <Text>Enter your e-mail and password to login</Text>
        </VStack>

        <Box
          as={'form'}
          onSubmit={handleSubmit(onSubmit, onError)}
          width={'100%'}
          display={'flex'}
          flexDir={'column'}
          gap={2}
        >
          <FormControl my={5}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              variant="filled"
              type="text"
              {...register('name')}
            />
            {errors && errors.name && (
              <FormHelperText color="red">
                {errors.name.message && errors.name.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="email">Email </FormLabel>
            <Input
              id="email"
              variant="filled"
              type="email"
              {...register('email')}
            />
            {errors && errors.email && (
              <FormHelperText color="red">
                {errors.email.message && errors.email.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl my={5}>
            <FormLabel htmlFor="email">Password</FormLabel>
            <Input
              id="email"
              variant="filled"
              type="password"
              {...register('password')}
            />
            {errors && errors.password && (
              <FormHelperText color="red">
                {errors.password.message && errors.password.message}
              </FormHelperText>
            )}
          </FormControl>

          <HStack w="full" justify="space-between">
            <Checkbox>Remember me.</Checkbox>
            <Button
              variant="link"
              colorScheme="blue"
              _focus={{ border: 'none' }}
            >
              Forgot Password
            </Button>
          </HStack>

          <Button
            colorScheme="green"
            w={['full', 'full']}
            mt={5}
            _active={{
              transform: 'scale(.99)',
            }}
            _focus={{ border: 'none' }}
            type={'submit'}
          >
            Login
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Login;
