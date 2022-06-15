import React, { useEffect, useState } from "react";
import { Row } from "reactstrap";
import HeaderSection from "../../components/HeaderSection";
import ProductService from "../../services/product.service";

import "./styles.scss";

export default function Dashboard() {
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    async function init() {
      const _productService = new ProductService();
      const productResponse = await _productService.list();
      setProductInfo(productResponse?.produtos);
    }

    init();
  }, []);

  console.log(productInfo);

  return (
    <Row>
      <HeaderSection title="Dashboard" />
    </Row>
  );
}
