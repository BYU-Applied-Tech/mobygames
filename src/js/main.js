import { loadHeaderNavFooter, getParam } from "./utils.mjs";
import GameData from "./GameData.mjs";
import GameListing from "./GameList.mjs";
import PlatformListing from "./PlatformList.mjs";

loadHeaderNavFooter();

const category = getParam("platform");

const gameData = new GameData();
const gameList = new GameListing(
  gameData,
  document.querySelector(".game-list"),
  category
);

const platformList = new PlatformListing(
  document.querySelector(".platforms-list")
);

gameList.init();
platformList.init();
