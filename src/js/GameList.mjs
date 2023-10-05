import {
  renderListWithTemplate,
  getLocalStorage,
  setLocalStorage,
} from "./utils.mjs";

export default class GameListing {
  constructor(dataSource, listElement) {
    this.dataSource = dataSource;
    this.listElement = listElement;
    this.list = {};
  }
  async init() {
    this.list = await this.dataSource.getData();
    this.renderList(this.list);
    this.handleAddFavorites();
  }
  handleAddFavorites() {
    document
      .getElementById("addToFave")
      .addEventListener("click", this.addToCart.bind(this));
  }
  addToCart(gameId) {
    let favorites = getLocalStorage("so-favorites") ?? [];

    const game = this.list.find(({ id }) => JSON.stringify(id) === gameId);
    favorites.push(game);

    setLocalStorage("so-favorites", favorites);
  }
  gameCardTemplate(game) {
    return `<li class="card"> 
            <img src="${game.background_image}" alt="${game.name}">
            <div >
              <h2>
              ${game.name}
              </h2>
            <div class="card-content">
              <p>Released date: <span>${game.released}</span></p>
              <p>Rating: <span>${game.rating}&nbsp;⭐️ </span></p>
            </div>
              <a href="/game_pages/index.html?game=${game.id}" class="button">
              Find out more <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <button href="#" id="addToFave" data-id="${game.id}" class="card-favorite"><i id="${game.id}" class="fa-regular fa-heart"></i></button>
            </li>`;
  }
  renderList(list) {
    renderListWithTemplate(this.gameCardTemplate, this.listElement, list);
  }
}
