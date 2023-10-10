import { renderListWithTemplate } from "./utils.mjs";
import platformJson from "../public/json/platforms.json";

export default class PlatformListing {
  constructor(listElement) {
    this.listElement = listElement;
  }
  async init() {
    this.renderList();
  }
  platformTemplate(platform) {
    return `<li class="platform"> 
            <a href="?platform=${platform.slug}">
            <div class="platform-wrapper"> 
            <img src="${platform.img}"
            </div>
            <div class="platform-label"><p>${platform.name}</p></div>
            </a></li>`;
  }
  async renderList() {
    const list = platformJson.result;

    renderListWithTemplate(this.platformTemplate, this.listElement, list);
  }
}
