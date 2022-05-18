import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const userAuth = () => {
  let userDetails = JSON.parse(sessionStorage.getItem('schema'));
  return userDetails;
};

const ProtectedRoutes = () => {
  const isAuth = userAuth();

  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
