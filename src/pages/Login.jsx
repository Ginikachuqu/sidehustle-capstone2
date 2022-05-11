import React from 'react';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/dashboard');
  };
  return (
    <div>
      Login
      {/* This is temporary to enable me access the dashboard. It will be removed when the login page is finished */}
      <Button onClick={handleNavigate}>DashBoard</Button>
    </div>
  );
};

export default Login;
