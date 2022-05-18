import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { items } from '../store/ProductItems';
import DashboardLayout from '../Layout/DashboardLayout';

const Productdetails = () => {
  // Hooks
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    const oneProduct = items.find((item) => item.itemname === id);
    setSingleProduct(oneProduct);
  }, [id]);

  // Destructuring
  const { itemname, itemimage, itemprice } = singleProduct;

  return (
    <DashboardLayout>
      <div className="detailscover">
        <div className="detailscont">
          <div>
            <img src={itemimage} alt="" className="logoimg" />
          </div>
          <br />

          <div className="description">
            <p>{itemname} </p>
            <br />
            <p>{itemprice} </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Productdetails;
