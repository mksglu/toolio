process.env.NODE_ENV = "test";
import * as request from "supertest";
import server from "../../app";

describe("Products Route", () => {
  describe("/GET products", () => {
    it("it should return all products when execute without querystring", async () => {
      const {
        status,
        body: { products },
      } = await request(server).get("/");
      expect(status).toBe(200);
      expect.arrayContaining(products);
      expect(products.length).toBe(50);
      expect(products[0]).toMatchObject({ id: 4348181184572, title: "Aerodynamic Aluminum Hat" });
    });
    it("it should return search products that have passed querystring of the title like Awesome", async () => {
      const keyword = "Awesome";
      const querystring = "?title=";
      const {
        status,
        body: { products },
      } = await request(server).get(`/${querystring}${keyword}`);
      expect(status).toBe(200);
      expect.arrayContaining(products);
      expect(products.length).toBe(2);
      expect(products[0]).toMatchObject({ id: 4348174598204, title: "Awesome Aluminum Gloves" });
      expect(products[0].title).toMatch(/awesome/i);
    });
    it("it should return empty array when products have not in products which passing querystring of the title like MertKoseoglu", async () => {
      const keyword = "MertKoseoglu";
      const querystring = "?title=";
      const {
        status,
        body: { products },
      } = await request(server).get(`/${querystring}${keyword}`);
      expect(status).toBe(200);
      expect.arrayContaining(products);
      expect(products.length).toBe(0);
    });
  });
});
