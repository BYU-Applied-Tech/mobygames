import { renderListWithTemplate } from "./utils.mjs";

export default class GenreListing {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
    this.list = {};
    this.filteredList = [];
  }
  async init() {
    this.list = await this.dataSource.getData();
    this.filteredList = this.list.filter((game) => {
      console.log("games", game);
      return game.genres.find((genre) => genre.slug == this.category);
    });
    console.log("cat", this.category);
    console.log("listttt", this.list);
    console.log("list", this.filteredList);
    this.renderList(this.list);
  }
  productCardTemplate(product) {
    return `<li class="genre"> 
    <a href="genre-listing/index.html?genre=${product.slug}">${product.name}</a>
    </li>`;
  }
  renderList(list) {
    renderListWithTemplate(this.productCardTemplate, this.listElement, list);
  }
  filterProducts(list) {
    let filteredList = list.filter((game) =>
      game?.genres?.find((genre) => genre.slug === this.category)
    );
    console.log("list", filteredList);
    return filteredList;
  }
}
