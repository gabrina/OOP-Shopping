import { fetchData } from "./utils/httpReq.js";
import Products from "./models/products.js";

const productsNode = document.getElementById("products");

const render = async () => {
  const productsData = await fetchData(); //this line will take time to be executed
  const productInstances = new Products(productsNode, productsData);
  productInstances.showProducts();
};

window.addEventListener("DOMContentLoaded", render);
