import {
  renderListWithTemplate,
  getLocalStorage,
  setLocalStorage,
} from "./utils.mjs";

export default class GameListing {
  constructor(dataSource, listElement, category) {
    this.dataSource = dataSource;
    this.listElement = listElement;
    this.list = {};
    this.category = category;
  }
  async init() {
    this.list = await this.dataSource.getData();
    this.renderList(this.list);
    this.renderPageTitle();
    document.getElementById("addToFave").addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        document
          .getElementById(e.currentTarget.id)
          .addEventListener(
            "click",
            this.addToFavorites(e.currentTarget.value)
          );
      },
      true
    );
  }
  async renderPageTitle() {
    const platformList = await this.getPlatformList();
    const platform = platformList.find((name) => name.slug === this.category);
    if (this.category) {
      document.getElementById(
        "page-title"
      ).innerHTML = `<div class="page-title-container">
                     <h2>Platform:</h2>
                     <div class="platform-img">
                     <img src="${platform.img}" alt="${platform.name}"/></div>
                     </div>`;
    }
  }
  async getPlatformList() {
    return await fetch("public/json/platforms.json")
      .then((response) => response.json())
      .then((data) => data.result)
      .catch((error) => console.error("Error:", error));
  }
  addToFavorites(gameId) {
    let favorites = getLocalStorage("gs-favorites") ?? [];
    const game = this.list.find(({ id }) => JSON.stringify(id) === gameId);
    favorites.push(game);

    setLocalStorage("gs-favorites", favorites);
  }
  gameCardTemplate(game) {
    return `<li class="card"> 
            <img src="${game.background_image}" alt="${game.name}">
            <div>
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
            <button id="addToFave" value="${game.id}" class="card-favorite"><i id="${game.id}"  value="${game.id}" class="fa-regular fa-heart"></i></button>
            </li>`;
  }
  renderList(list) {
    let filteredList = list;
    const searchInput = document.getElementById("search-input");

    if (this.category) {
      filteredList = list.filter((game) =>
        game.platforms.find(({ platform }) =>
          platform.slug.includes(this.category)
        )
      );
    }

    searchInput.addEventListener("keyup", (event) => {
      const { value } = event.target;

      filteredList = this.searchBarGame(value, list);

      renderListWithTemplate(
        this.gameCardTemplate,
        this.listElement,
        filteredList
      );
    });

    renderListWithTemplate(
      this.gameCardTemplate,
      this.listElement,
      filteredList
    );
  }
  searchBarGame(value, list) {
    // get user search input converted to lowercase
    const searchQuery = value.toLowerCase();

    // filter the list of games
    return list.filter((game) => {
      // convert current game name to lowercase
      const gameName = game.name.toLowerCase();
      // check if the game name includes the search query string
      return gameName.includes(searchQuery);
    });
  }
}
