import { changeMusic } from "../music/Music.js";
import { changeLifeBar, gameOver, hideElements, showElement, showPlayerRound } from "../screen/State.js";
import { BUTTON_MODE_1V1, BUTTON_MODE_1VC, BUTTON_TO_GAME, BUTTON_TO_MODE, GAME_STATUS, INPUT_NAME_PLAYER_TWO, SCREEN_GAME, SCREEN_MODE_MENU, SCREEN_NAME_MENU, SCREENS } from "./Consts.js";
export function activeListenerButtons() {
    BUTTON_TO_MODE.addEventListener("click", () => {
        hideElements(SCREENS);
        showElement(SCREEN_MODE_MENU, "flex");
    });
    BUTTON_MODE_1V1.addEventListener("click", () => {
        hideElements(SCREENS);
        showElement(SCREEN_NAME_MENU, "flex");
        GAME_STATUS.mode = "1v1";
    });
    BUTTON_MODE_1VC.addEventListener("click", () => {
        hideElements(SCREENS);
        showElement(SCREEN_NAME_MENU, "flex");
        INPUT_NAME_PLAYER_TWO.style.display = "none";
        GAME_STATUS.mode = "1vc";
    });
    BUTTON_TO_GAME.addEventListener("click", () => {
        hideElements(SCREENS);
        showElement(SCREEN_GAME, "block");
        startGame();
    });
}
function startGame() {
    GAME_STATUS.running = true;
    const [namePlayerOne, namePlayerTwo] = getNamePlayers();
    GAME_STATUS.players.push(createPlayers(namePlayerOne));
    GAME_STATUS.players.push(createPlayers(namePlayerTwo));
    changeMusic("in-game");
    showPlayerRound();
    changeLifeBar();
}
function getNamePlayers() {
    let namePlayerOne = document.getElementById("player-name-one").value;
    let namePlayerTwo = "Computer";
    if (GAME_STATUS.mode === "1v1")
        namePlayerTwo = document.getElementById("player-name-two").value;
    if (!namePlayerOne || !namePlayerTwo || namePlayerOne.trim() === "" || namePlayerTwo.trim() === "")
        return ["Lula", "Bolsonaro"];
    return [namePlayerOne, namePlayerTwo];
}
function createPlayers(name) {
    return {
        name: name,
        life: 100,
        maxLife: 100,
        attack: 8,
        defense: false,
        extraCriticalChance: 0,
        extraBaseDamage: 0,
        defenseBreaker: false
    };
}
export function checkGameOver() {
    const playerOne = GAME_STATUS.players[0];
    const playerTwo = GAME_STATUS.players[1];
    let winner = "";
    if (playerOne.life <= 0)
        winner = playerTwo.name;
    if (playerTwo.life <= 0)
        winner = playerOne.name;
    if (winner !== "") {
        GAME_STATUS.running = false;
        gameOver(winner);
    }
}
