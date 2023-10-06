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
    this.platformList = [
      { name: "Windows", img: "../images/icons/icon-windows.png", slug: "pc" },
      {
        name: "Android",
        img: "../images/icons/icon-android.png",
        slug: "android",
      },
      { name: "Macintosh", img: "../images/icons/icon-apple.png", slug: "ios" },
      { name: "Xbox", img: "../images/icons/icon-xbox.png", slug: "xbox" },
      {
        name: "Playstation",
        img: "../images/icons/icon-ps5.png",
        slug: "playstation",
      },
      {
        name: "Nintendo",
        img: "../images/icons/icon-nintendo.png",
        slug: "nintendo",
      },
    ];
  }
  async init() {
    this.list = await this.dataSource.getData();
    this.renderList(this.list);
    this.renderPageTitle();
  }
  renderPageTitle() {
    const platform = this.platformList.find(
      (name) => name.slug === this.category
    );
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
  addToCart(gameId) {
    let favorites = getLocalStorage("so-favorites") ?? [];

    const game = this.list.find(({ id }) => JSON.stringify(id) === gameId);
    favorites.push(game);

    setLocalStorage("so-favorites", favorites);
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
            <button href="#" id="addToFave" data-id="${game.id}" class="card-favorite"><i id="${game.id}" class="fa-regular fa-heart"></i></button>
            </li>`;
  }
  renderList(list) {
    let filteredList = list;

    if (this.category) {
      filteredList = list.filter((game) =>
        game.platforms.find(({ platform }) =>
          platform.slug.includes(this.category)
        )
      );
    }

    renderListWithTemplate(
      this.gameCardTemplate,
      this.listElement,
      filteredList
    );
  }
}
