import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DashboardLayout from '../Layout/DashboardLayout';
import '../assets/css/customer.css';

const Customers = () => {
  // Default Values
  const url = 'https://fakerapi.it/api/v1/companies?_quantity=10';

  // Hooks
  const [show] = useState(false);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => setCustomers(response.data.data));
  }, []);

  return (
    <DashboardLayout show={show}>
      <div className="customers-details">
        <div className="customers-table">
          <div className="customers-table-main">
            <table id="details">
              <thead>
                <tr>
                  <th> NAME </th>
                  <th> EMAIL </th>
                  <th> PHONE NUMBER </th>
                  <th> COUNTRY </th>
                </tr>
              </thead>

              <tbody>
                {customers
                  ? customers.map((customer, idx) => (
                      <tr key={idx}>
                        <td className="customer__info">
                          <div className="customer__avatar">
                            <img src={customer.image} alt="customer_image" />
                          </div>
                          <div className="customer__name">{customer.name}</div>
                        </td>
                        <td> {customer.email} </td>
                        <td> {customer.phone} </td>
                        <td> {customer.country} </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Customers;
