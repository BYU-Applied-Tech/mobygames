import { loadHeaderFooter } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

const cart = new ShoppingCart(".product-list");

loadHeaderFooter();

cart.renderCartContents();
