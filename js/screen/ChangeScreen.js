export const SCREEN_INITIAL = document.getElementById("initial-menu");
export const SCREEN_SELECT_MODE = document.getElementById("select-mode-menu");
export const SCREEN_SELECT_NAME = document.getElementById("select-name-menu");
export const SCREEN_GAME = document.getElementById("game");
export const SCREEN_GAME_OVER = document.getElementById("game-over");
export function hideAllScreens() {
    SCREEN_INITIAL.style.display = "none";
    SCREEN_SELECT_MODE.style.display = "none";
    SCREEN_SELECT_NAME.style.display = "none";
    SCREEN_GAME.style.display = "none";
    SCREEN_GAME_OVER.style.display = "none";
}
export function showScreen(screen, display) {
    screen.style.display = display;
}
