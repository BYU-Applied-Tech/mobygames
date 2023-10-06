export default class GameDetails {
  constructor(gameId, dataSource) {
    this.gameId = gameId;
    this.game = {};
    this.dataSource = dataSource;
  }
  async init() {
    this.game = await this.dataSource.findGameById(this.gameId);
    this.renderGameDetails("section");
  }
  renderGameDetails(selector) {
    const game = this.game;
    const element = document.querySelector(selector);

    const template = `
        <h2 class="divider">${game.name}</h2>
        <img
            class="game-details-img divider"
            src="${game.background_image}"
            alt="${game.name}"
        />
      <div class="game-details-text-container"> 
      <p>Rating: <span>${game.rating}&nbsp⭐️</span></p>
      <p>ESRB Rating: <span>${game.esrb_rating.name}</span></p>
      <p>Genre: <span>${game.genres.map((genre) => `${genre.name}`)}</span>
      <p>Tags: <span>${game.tags.map((genre) => `${genre.name}`)}</span>
      <p>Date released: <span>${game.released}</span></p>
      </div>
        <h2>Screenshots</h2>
        <ul class="screenshots">
         ${game.short_screenshots.slice(1).map(
           (screenshot) => `<li> 
         <img  
         class="screenshot-img"
         src="${screenshot.image}"
         alt="${game.name}"
         /></li>`
         )}
        </ul>
       `;

    element.insertAdjacentHTML("afterbegin", template);
  }
}
