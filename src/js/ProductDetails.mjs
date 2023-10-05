import { setLocalStorage, getLocalStorage } from "./utils.mjs";

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }
  async init() {
    // use our datasource to get the details for the current product. findGameById will return a promise! use await or .then() to process it
    // once we have the product details we can render out the HTML
    // once the HTML is rendered we can add a listener to Add to Cart button
    // Notice the .bind(this). Our callback will not work if we don't include that line. Review the readings from this week on 'this' to understand why.
    this.product = await this.dataSource.findGameById(this.productId);
    console.log("id", this.product);
    this.renderProductDetails("section");
    document
      .getElementById("addToCart")
      .addEventListener("click", this.addToCart.bind(this));
  }
  addToCart() {
    let cart = getLocalStorage("so-cart") || [];
    cart.push(this.product);
    setLocalStorage("so-cart", cart);
  }
  renderProductDetails(selector) {
    const product = this.product;
    const element = document.querySelector(selector);

    const template = `
        <h2 class="divider">${product.name}</h2>
        <img
            class="game-details-img divider"
            src="${product.background_image}"
            alt="${product.name}"
        />
       
        <h2>Screenshots</h2>
        <ul class="screenshots">
         ${product.short_screenshots.slice(1).map(
           (screenshot) => `<li> 
         <img  
         class="screenshot-img"
         src="${screenshot.image}"
         alt="${product.name}"
         /></li>`
         )}
        </ul>
        
        <p class="product-card__price">$${product.released}</p>
       `;

    element.insertAdjacentHTML("afterbegin", template);
  }
}
