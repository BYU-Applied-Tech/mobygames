import { renderListWithTemplate } from "./utils.mjs";

export default class PlatformListing {
  constructor(listElement) {
    this.listElement = listElement;
  }
  async init() {
    this.renderList();
  }
  async getPlatformList() {
    return await fetch("public/json/platforms.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => data.result)
      .catch((error) => console.error("Error:", error));
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
    const list = await this.getPlatformList();

    renderListWithTemplate(this.platformTemplate, this.listElement, list);
  }
}
