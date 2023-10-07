import { loadHeaderNavFooter, getParam } from "./utils.mjs";
import GameData from "./GameData.mjs";
import GameDetails from "./GameDetails.mjs";

loadHeaderNavFooter();

const gameId = getParam("game");
const dataSource = new GameData();

const product = new GameDetails(gameId, dataSource);

product.init();
