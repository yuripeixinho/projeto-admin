export default class ProductSerializer {
  fromJson(json) {
    debugger;
    const product = {};

    Object.assign(
      product,

      json.response && {
        products: json.response,
      }
    );

    return product;
  }

  toJson(product) {
    debugger;
    const productToJson = {};

    Object.assign(
      productToJson,
      product.nome && { nome: product.nome },
    );

    return productToJson;
  }
}
