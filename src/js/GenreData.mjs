const baseURL =
  "https://rawg-video-games-database.p.rapidapi.com/genres?key=6cdfbfac99ca45109cf346b5b72570df";

export default class PlatformData {
  constructor() {}
  async getData() {
    return await fetch(baseURL, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "3ed4d007c4msh1d57121dc271c8fp122180jsn97a3da1dc702",
        "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => data.results)
      .catch((err) => console.error(err));
  }
  async findGameById(id) {
    const products = await this.getData();
    return products.find((item) => item.Id === id);
  }
}
