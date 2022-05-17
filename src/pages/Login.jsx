import React, { useState } from 'react'
import { Box, VStack, HStack, Heading, Text, FormControl, FormLabel, Input, Checkbox, Button, 
  FormHelperText, 
   } from '@chakra-ui/react';

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { REQUIRED_VALIDATION } from "../components/utils/utils";

import { useNavigate } from 'react-router-dom';

const Login = () => {
  
  const initValues = {
    email: "",
    password: "",

  };
  const [initialValue, ] = useState(initValues)

  const schema = yup.object().shape({
     email: yup.string().email().required(REQUIRED_VALIDATION("Email")),
     password: yup.string().required(REQUIRED_VALIDATION("Password")).min(6,"Password must be min 6 char long!")
  }).required();

  const { register, handleSubmit, formState: { errors }, } = useForm({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: initialValue,
  });

  const onSubmit = (values) => { 
    console.log("Values::::::", values);
  }

  const onError = (error) => { 
    console.log("Error::::::", error);
  }

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/dashboard');
  };



  return (
    <Box
    w={['full','md']} 
    p={[7, 8]}
    mt={[20, '10vh']}
    mx='auto'
    border={['none', '1px']}
    borderColor={['', 'gray.500']}
    borderRadius={10}
    textColor={'gray.900'}
    >
    <VStack spacing={4} align='flex-start' w='full'>
      <VStack spacing={1} align={['flex-start', 'center']} w='full'>
        <Heading>Login</Heading>
        <Text>Enter your e-mail and password to login</Text>
      </VStack>
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormControl>
      <FormLabel htmlFor='email'>E-mail Address</FormLabel>
      <Input   id='email' variant='filled'  type='email' {...register("email")} />
      {
           errors && errors.email &&(
            <FormHelperText color='red' >
             {errors.email.message && errors.email.message}
            </FormHelperText>
      )}
      
    </FormControl>
    <FormControl >
      <FormLabel htmlFor='email'>Password</FormLabel>
      <Input  id='email' variant='filled' type='password' {...register("password")}/>
      {
           errors && errors.password &&(
            <FormHelperText color='red' >
             {errors.password.message && errors.password.message}
            </FormHelperText>
      )}
    </FormControl>
    </form>
    <HStack w='full' justify='space-between'>
      <Checkbox>Remember me.</Checkbox>
      <Button variant='link' colorScheme='blue'>Forgot Password</Button>
    </HStack>
    <Button  onClick={handleNavigate} colorScheme='green'  w={['full', 'auto']} alignSelf='end'>Login</Button>
    </VStack>

  
  </Box>
  );
};

export default Login;
/**<Button onClick={handleNavigate}>DashBoard</Button> */