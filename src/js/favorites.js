import { loadHeaderNavFooter } from "./utils.mjs";
import Favorites from "./Favorites.mjs";

loadHeaderNavFooter();

const favorites = new Favorites(".favorites-list");

favorites.renderFavoritesContents();
