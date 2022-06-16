import React, { useEffect, useState } from "react";
import { Row } from "reactstrap";
import HeaderSection from "../../components/HeaderSection";
import ItemTable from "../../components/IndexItemsList";
import ProductService from "../../services/product.service";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function init() {
      const _productService = new ProductService();

      const productResponse = await _productService.list();
      setProducts(productResponse.products);
    }

    init();
  }, []);

  return (
    <Row>
      <HeaderSection title="Products" />

      <ItemTable
        items={products}
        buttonLabel="Adicionar"
        createEndpoint="/product"
      />
    </Row>
  );
}
