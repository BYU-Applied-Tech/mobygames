import GameData from "./GameData.mjs";
import GenreData from "./GenreData.mjs";
import GameListing from "./GameList.mjs";
import GenreListing from "./GenreList.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

const category = getParam("genre");

const dataSource = new GameData();
const gameList = new GameListing(
  dataSource,
  document.querySelector(".game-list"),
  category
);

const genreDataSource = new GenreData();
const genreList = new GenreListing(
  genreDataSource,
  document.querySelector(".genre-list")
);

gameList.init();
genreList.init();
loadHeaderFooter();
