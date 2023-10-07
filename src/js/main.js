import GameData from "./GameData.mjs";
import GameListing from "./GameList.mjs";
import PlatformListing from "./PlatformList.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

const category = getParam("platform");

const dataSource = new GameData();
const gameList = new GameListing(
  dataSource,
  document.querySelector(".game-list"),
  category
);

const platformList = new PlatformListing(
  document.querySelector(".platforms-list")
);

gameList.init();
platformList.init();

loadHeaderFooter();
