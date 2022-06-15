import CoreApiService from "./core-api.service";
import ProductSerializer from "./serializers/product.serializer";

export default class ProductService extends CoreApiService {
  constructor() {
    super(undefined, "products", new ProductSerializer());
  }
}
