import { findByTitle } from "../../toolio/common";
import store from "../../toolio/store";

/**
 * @async
 * @function
 * @param {title: string} title
 * @returns {Object} Returns the products.
 */

const Products = async (title?: string): Promise<any> => {
  try {
    const { data } = await store;
    return findByTitle(data, title);
  } catch (error) {
    return { error: true, message: error };
  }
};
export { Products };
