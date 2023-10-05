import GameData from "./GameData.mjs";
import GenreData from "./GenreData.mjs";
import GameListing from "./GameList.mjs";
import GenreListing from "./GenreList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

const dataSource = new GameData();
const gameList = new GameListing(
  dataSource,
  document.querySelector(".game-list")
);

const genreDataSource = new GenreData();
const genreList = new GenreListing(
  "tents",
  genreDataSource,
  document.querySelector(".genre-list")
);

gameList.init();
genreList.init();
loadHeaderFooter();
