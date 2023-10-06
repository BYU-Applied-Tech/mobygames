import { loadHeaderFooter } from "./utils.mjs";
import Favorites from "./Favorites.mjs";

const favorites = new Favorites(".favorites-list");

loadHeaderFooter();

favorites.renderFavoritesContents();
