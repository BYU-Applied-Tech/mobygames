import { loadHeaderFooter, getParam } from "./utils.mjs";
import GameData from "./GameData.mjs";
import ProductDetails from "./ProductDetails.mjs";

const gameId = getParam("game");
const dataSource = new GameData();

const product = new ProductDetails(gameId, dataSource);

product.init();
loadHeaderFooter();
