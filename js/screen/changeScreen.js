import { SCREEN_GAME, SCREEN_GAME_OVER, SCREEN_INITIAL_MENU, SCREEN_SELECT_MODE_MENU, SCREEN_SELECT_NAME_MENU } from "../values";
function hideAllScreens() {
    SCREEN_INITIAL_MENU.style.display = "none";
    SCREEN_SELECT_MODE_MENU.style.display = "none";
    SCREEN_SELECT_NAME_MENU.style.display = "none";
    SCREEN_GAME.style.display = "none";
    SCREEN_GAME_OVER.style.display = "none";
}
export function toScreen(screen) {
    hideAllScreens();
    if (screen == "initial-menu")
        SCREEN_INITIAL_MENU.style.display = "flex";
    if (screen == "select-mode-menu")
        SCREEN_SELECT_MODE_MENU.style.display = "flex";
    if (screen == "select-name-menu")
        SCREEN_SELECT_NAME_MENU.style.display = "flex";
    if (screen == "game")
        SCREEN_GAME.style.display = "block";
    if (screen == "game-over")
        SCREEN_GAME_OVER.style.display = "flex";
}
