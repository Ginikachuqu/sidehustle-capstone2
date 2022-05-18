import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { items } from '../store/ProductItems';

const Productdetails = () => {
  // Hooks
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    const oneProduct = items.find((item) => item.id === parseInt(id));
    setSingleProduct(oneProduct);
  }, [id]);

  // Destructuring
  const { itemname, itemimage, itemprice } = singleProduct;

  return (
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
  );
};

export default Productdetails;
