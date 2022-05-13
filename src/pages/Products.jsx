import React, { useState } from 'react';
import DashboardLayout from '../Layout/DashboardLayout';

const Products = () => {
  // if you want to see right sidebar change false to true
  const [show, setShow] = useState(false);

  return (
    <DashboardLayout show={show}>
      <div>Products</div>
    </DashboardLayout>
  );
};

export default Products;
