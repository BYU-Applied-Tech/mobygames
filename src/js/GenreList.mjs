import { renderListWithTemplate } from "./utils.mjs";

export default class GenreListing {
  constructor(dataSource, listElement) {
    this.dataSource = dataSource;
    this.listElement = listElement;
    this.list = {};
  }
  async init() {
    this.list = await this.dataSource.getData();
    this.renderList(this.list);
  }
  productCardTemplate(product) {
    return `<li class="genre"> 
    <a href="?genre=${product.slug}">${product.name}</a>
    </li>`;
  }
  renderList(list) {
    renderListWithTemplate(this.productCardTemplate, this.listElement, list);
  }
}
