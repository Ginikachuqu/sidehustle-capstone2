import React, { useState } from 'react';
import DashboardLayout from '../Layout/DashboardLayout';
import '../assets/css/product.css';
import { Link } from 'react-router-dom';
import { items } from '../store/ProductItems';

const Products = () => {
  // if you want to see right sidebar change false to true
  const [show] = useState(false);

  return (
    <DashboardLayout show={show}>
      <div className="general-container">
        <div className="topbar">
          <h1>Product Analytics</h1>
        </div>

        <div className="content-cover">
          <h3>Top Selling products</h3>
          <br />

          <div className="list-cover">
            <div className="top">
              <div className="no">
                <b>No</b>{' '}
              </div>
              <div className="product">
                <b>Product</b>
              </div>
            </div>

            <div className="tops">
              <div className="sales">
                <b>Sales</b>
              </div>
              <div className="total">
                <b>Total</b>
              </div>
            </div>
          </div>

          {items &&
            items.map((item) => (
              <Link to={`${item.id}`} key={item.id}>
                <button className="content">
                  <div className="left">
                    <div className="con">
                      <div className="cont-1"> {item.itemno} </div>
                      <div className="cover">
                        <img src={item.itemimage} alt="" className="img-cont" />
                        <div className="cont-2"> {item.itemname} </div>
                      </div>
                    </div>
                  </div>

                  <div className="right">
                    <div className="inner">
                      <div className="num">{item.itemsales}</div>
                      <div className="price">{item.itemprice}</div>
                    </div>
                  </div>
                </button>
              </Link>
            ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Products;
