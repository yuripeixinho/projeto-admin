export default class ProductSerializer {
  fromJson(json) {
    debugger;
    const product = {};

    Object.assign(
      product,

      json.response && {
        produtos: json.response,
      }
    );

    return product;
  }

  toJson(bannerDestaqueHome) {
    const productToJson = {};

    Object.assign(
      productToJson,
    
    );

    return productToJson;
  }
}
