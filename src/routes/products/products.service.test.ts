process.env.NODE_ENV = "test";
import { Products } from "./products.service";

describe("Product Service", () => {
  describe("/GET products", () => {
    it("it should return all products when execute without querystring", async () => {
      const { products } = await Products();
      expect.arrayContaining(products);
      expect(products).toHaveLength(50);
    });
    it("it should return search products that have passed querystring of the title like Awesome", async () => {
      const { products } = await Products("Awesome");
      const expectedFirstRow = products[0];
      expect.arrayContaining(products);
      expect(products).toHaveLength(2);
      expect(expectedFirstRow.title).toMatch(/awesome/i);
      expect(expectedFirstRow).toMatchObject({ id: expect.any(Number), title: expect.any(String) });
    });
    it("it should return empty array when products have not in products which passing querystring of the title like MertKoseoglu", async () => {
      const { products } = await Products("MertKoseoglu");
      expect.arrayContaining(products);
      expect(products).toHaveLength(0);
    });
  });
});
