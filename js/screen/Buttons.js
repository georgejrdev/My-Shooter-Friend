import { GAME_STATUS } from "../game/GameStatus.js";
import { startGame } from "../game/Start.js";
import { hideAllScreens, SCREEN_GAME, SCREEN_SELECT_MODE, SCREEN_SELECT_NAME, showScreen } from "./ChangeScreen.js";
const BUTTON_TO_SELECT_MODE = document.getElementById("to-select-mode");
const BUTTON_TO_SELECT_NAME_1V1 = document.getElementById("select-1v1");
const BUTTON_TO_SELECT_NAME_1VC = document.getElementById("select-1vC");
const BUTTON_TO_GAME = document.getElementById("to-game");
export function activeButtons() {
    BUTTON_TO_SELECT_MODE.addEventListener("click", () => {
        hideAllScreens();
        showScreen(SCREEN_SELECT_MODE, "flex");
    });
    BUTTON_TO_SELECT_NAME_1V1.addEventListener("click", () => {
        hideAllScreens();
        showScreen(SCREEN_SELECT_NAME, "flex");
        GAME_STATUS.mode = "1v1";
    });
    BUTTON_TO_SELECT_NAME_1VC.addEventListener("click", () => {
        hideAllScreens();
        showScreen(SCREEN_SELECT_NAME, "flex");
        const InputNameTwo = document.getElementById("player-two-name");
        if (InputNameTwo)
            InputNameTwo.style.display = "none";
        GAME_STATUS.mode = "1vC";
    });
    BUTTON_TO_GAME.addEventListener("click", () => {
        hideAllScreens();
        showScreen(SCREEN_GAME, "block");
        startGame();
    });
}
