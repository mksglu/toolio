import axios from "axios";
import * as mockData from "./mocks/products.json";
import { PROTOCOL, API_KEY, PASSWORD, API_URL } from "../config";

let store: any;

if (process.env.NODE_ENV === "test") {
  store = new Promise((resolve) => resolve({ data: mockData }));
} else {
  store = axios.request({ method: "get", url: `${PROTOCOL}://${API_KEY}:${PASSWORD}@${API_URL}/admin/api/2019-10/products.json` });
}

export default store;
