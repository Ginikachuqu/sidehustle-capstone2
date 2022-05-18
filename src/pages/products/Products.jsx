import React, { useState, useEffect } from "react";
import axios from 'axios';
import DashboardLayout from "../../Layout/DashboardLayout";
import { Container, ContainerInner } from "./Products.styles";

const Products = () => {
  // Hooks
  const [show] = useState(false);

  const url = "https://fakerapi.it/api/v1/products?_quantity=1";

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => setProduct(response.data.data));
  }, []);

  return (
    <DashboardLayout show={show}>
      <Container>
        <ContainerInner>
          {product
            ? product.map((product, id) => (
              <div className="product__card" key={id}>
                  <div className="product__card-inner">
                    <div className="product__image">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="product__details">
                      <div className="product__details-inner">
                        <h2>{product.name}</h2>
                        <div className="product__price">
                          <span>Net price: {'$' + product.net_price}</span>
                          <span>Taxes: {'$' + product.taxes}</span>
                          <span>Price: {'$' + product.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            ))
            : null}
        </ContainerInner>
      </Container>
    </DashboardLayout>
  );
};

export default Products;
