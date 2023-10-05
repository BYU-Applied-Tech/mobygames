import { renderListWithTemplate } from "./utils.mjs";
// import platformListSource from "../json/platforms.json";

export default class PlatformListing {
  constructor(dataSource, listElement) {
    this.dataSource = dataSource;
    this.listElement = listElement;
    this.list = [
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
    this.renderList(this.list);
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
  renderList(list) {
    renderListWithTemplate(this.platformTemplate, this.listElement, list);
  }
}
