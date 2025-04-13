import { fetchData } from "./utils/httpReq.js";
import Products from "./models/products.js";
import Cart from "./models/Cart.js";

const productsNode = document.getElementById("products");
const cartListNode = document.getElementById("cart-list");
const totalPriceNode = document
  .getElementById("total-price")
  .querySelector("span");
//selecting the span tag inside of the node with id=total-price

const render = async () => {
  const productsData = await fetchData(); //this line will take time to be executed
  const cartInstances = new Cart(cartListNode, totalPriceNode);

  const productInstances = new Products(
    productsNode,
    productsData,
    cartInstances
  );
  productInstances.showProducts();
};

window.addEventListener("DOMContentLoaded", render);
