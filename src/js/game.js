import { loadHeaderNavFooter, getParam } from "./utils.mjs";
import GameData from "./GameData.mjs";
import GameDetails from "./GameDetails.mjs";

loadHeaderNavFooter();

const gameId = getParam("game");
const gameData = new GameData();

const game = new GameDetails(gameId, gameData);

game.init();
