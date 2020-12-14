import { Response, Router, Request } from "express";
import { Products } from "./products.service";

/**
 * Express router to mount products function on.
 * @type {object}
 * @const
 * @namespace productsRoute
 */

const router: any = Router();

/**
 * Route products data.
 * @async
 * @function
 * @name get/
 * @memberof module:src/routers/products~productsRoute
 * @param {express.Request & {title: string}} req
 * @param {express.Response} res
 * @returns {Object} Returns the products.
 */

router.get("/", async (req: Request, res: Response) => {
  const title: string = (req.query as any).title as string;
  const response = await Products(title);
  if (response.error) {
    return res.status(404).send(response);
  }
  return res.status(200).send(response);
});
export default router;
