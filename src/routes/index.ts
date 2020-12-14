import { Application } from "express";
import productsRoute from "./products/products.route";

/**
 * @class Product
 */
export class Routes {
  public routes(app: Application): void {
    app.use("/", productsRoute);
  }
}
