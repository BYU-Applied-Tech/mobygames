import GameData from "./GameData.mjs";
import GenreData from "./GenreData.mjs";
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


const genreDataSource = new GenreData();
const platformList = new PlatformListing(
  genreDataSource,
  document.querySelector(".platforms-list")
);

gameList.init();
platformList.init();

loadHeaderFooter();
