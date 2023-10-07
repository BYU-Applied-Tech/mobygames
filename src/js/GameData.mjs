import { apiUrl, apiDetails } from "../lib/config.js";

export default class GameData {
  async getData() {
    return await fetch(apiUrl, apiDetails)
      .then((response) => response.json())
      .then((data) => data.results)
      .catch((err) => console.error(err));
  }
  async findGameById(id) {
    const games = await this.getData();

    return games.find((game) => game.id == id);
  }
}
