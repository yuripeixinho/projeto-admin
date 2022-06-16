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
    const productToJson = {};

    Object.assign(
      productToJson,
      product.nome && { nome: product.nome },
      product.preco && { preco: product.preco },
      product.ingredientes && { ingredientes: product.ingredientes },
      product.linkImagem && { linkImagem: product.linkImagem },
      product.quantCliques && { quantCliques: product.quantCliques }
    );


    return productToJson;
  }
}
