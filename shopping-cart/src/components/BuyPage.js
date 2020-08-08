import React, { useState, useEffect } from "react";

import Axios  from "axios";

import { random, commerce } from "faker";

import { Container, Col, Row } from "reactstrap";

const url = "https://jsonware.com/json/7f26bf2c0233a09ad8426b4e6ad9ccbd.json";

const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  const fetchPhotos = async () => {
    const { data } = await Axios.get(url);

    const { photos } = data;

    const allProduct = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: random.word(),
      productPrice: commerce.price(),
      id: random.uuid(),
    }));

    setProduct(allProduct)
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return(
    <Container fluid>
      <h1 className="text-success text-center">Buy Page</h1>
      <Row>
        {product.map(product => (
          <span key={product.id}>{product.productName}</span>
        ))}
      </Row>
    </Container>
  )
};

export default BuyPage;
