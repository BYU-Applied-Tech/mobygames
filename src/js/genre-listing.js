import GenreListing from "./GenreList.mjs";
import GameData from "./GameData.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

const category = getParam("genre");
const dataSource = new GameData();

const listElement = document.querySelector(".genre-list");
const list = new GenreListing(category, dataSource, listElement);

list.init();

loadHeaderFooter();
