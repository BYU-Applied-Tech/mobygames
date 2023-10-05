import { getLocalStorage } from "./utils.mjs";

export default class ShoppingCart {
  constructor(parentSelector) {
    this.parentSelector = parentSelector;
  }

  totalPriceTemplate(price) {
    return `<h4 class="total-price-label-color">Total: <span class="total-price-color">$${price}</span></h3>`;
  }

  renderCartContents() {
    const cartItems = getLocalStorage("so-cart");
    if (cartItems != null) {
      const htmlItems = cartItems.map((item) => this.cartItemTemplate(item));
      document.querySelector(".product-list").innerHTML = htmlItems.join("");

      // Calculate total price of items
      const totalPrice = cartItems.reduce(
        (a, { FinalPrice }) => a + FinalPrice,
        0
      );
      document.getElementById("totalPrice").innerHTML =
        this.totalPriceTemplate(totalPrice);
    }
  }

  cartItemTemplate(item) {
    return `<li>
            <div class="cart-card divider">
            <img
            src="${item.background_image}"
            alt="${item.name}"
            />
            <h4 class="card__name">${item.name}</h4>
          </li>`;
  }
}
