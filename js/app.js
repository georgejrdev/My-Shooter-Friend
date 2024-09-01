import { callActions } from "./actions/call.js";
import { showRoundPlayer } from "./screen/changeData.js";
import { toScreen } from "./screen/changeScreen.js";
import { GAME_STATUS, RANDOMIZE_KEYS, ACCEPT_KEYS, PLAYER_ONE_KEYS, PLAYER_TWO_KEYS } from "./values.js";
const buttonToSelectMode = document.getElementById("to-select-mode");
const buttonToSelectName1v1 = document.getElementById("select-1v1");
const buttonToSelectName1vC = document.getElementById("select-1vC");
const buttonToGame = document.getElementById("to-game");
const buttonToGameOver = document.getElementById("to-game-over");
buttonToSelectMode.addEventListener("click", () => {
    toScreen("select-mode-menu");
});
buttonToSelectName1v1.addEventListener("click", () => {
    toScreen("select-name-menu");
});
buttonToSelectName1vC.addEventListener("click", () => {
    toScreen("select-name-menu");
});
buttonToGame.addEventListener("click", () => {
    toScreen("game");
});
buttonToGameOver.addEventListener("click", () => {
    toScreen("game-over");
});
document.addEventListener("keydown", (event) => {
    handleKeyPress(event.key);
});
function handleKeyPress(key) {
    if (!GAME_STATUS.running)
        return;
    if ((RANDOMIZE_KEYS.includes(key) && GAME_STATUS.round == 0.5) || (RANDOMIZE_KEYS.includes(key) && GAME_STATUS.round == 1.5))
        return;
    if (!ACCEPT_KEYS.includes(key))
        return;
    if (GAME_STATUS.round == 0 && PLAYER_TWO_KEYS.includes(key))
        return;
    if (GAME_STATUS.round == 1 && PLAYER_ONE_KEYS.includes(key))
        return;
    GAME_STATUS.round = callActions[key]();
    // showMessage()
    showRoundPlayer();
}
