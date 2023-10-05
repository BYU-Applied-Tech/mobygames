import GenreListing from "./GenreList.mjs";
import GameListing from "./GameList.mjs";
import GameData from "./GameData.mjs";
import GenreData from "./GenreData.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

const category = getParam("genre");
const genreListSource = new GenreData();
const gameListSource = new GameData();

const genreListElement = document.querySelector(".genre-list");
const genreList = new GenreListing(category, genreListSource, genreListElement);

const genreGroupElement = document.querySelector(".genre-group");
const genreGroup = new GameListing(gameListSource, genreGroupElement, category);

genreList.init();
genreGroup.init();

loadHeaderFooter();
