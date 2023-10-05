import { loadHeaderFooter, getParam } from "./utils.mjs";
import GameData from "./GameData.mjs";
import GameDetails from "./GameDetails.mjs";

const gameId = getParam("game");
const dataSource = new GameData();

const product = new GameDetails(gameId, dataSource);

product.init();
loadHeaderFooter();
