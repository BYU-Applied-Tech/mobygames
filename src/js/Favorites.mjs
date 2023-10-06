import { getLocalStorage } from "./utils.mjs";

export default class Favorites {
  constructor(parentSelector) {
    this.parentSelector = parentSelector;
  }
  renderFavoritesContents() {
    const cartItems = getLocalStorage("so-favorites");
    if (cartItems != null) {
      const htmlItems = cartItems.map((item) => this.cartItemTemplate(item));
      document.querySelector(".favorites-list").innerHTML = htmlItems.join("");
    }
  }
  cartItemTemplate(item) {
    return `<li>
            <div class="favorites-card divider">
            <img
            src="${item.background_image}"
            alt="${item.name}"
            />
            <h4 class="card__name">${item.name}</h4>
          </li>`;
  }
}
