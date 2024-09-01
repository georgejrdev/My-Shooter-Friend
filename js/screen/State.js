import { GAME_STATUS, SCREEN_GAME_OVER, SCREENS } from "../defined/Consts.js";
import { stopMusic } from "../music/Music.js";
export function changeLifeBar() {
    const playerOneLifeBar = document.getElementById("player-life-one");
    const playerTwoLifeBar = document.getElementById("player-life-two");
    const playerOneStatus = document.getElementById("player-status-one");
    const playerTwoStatus = document.getElementById("player-status-two");
    if (!playerOneLifeBar || !playerTwoLifeBar || !playerOneStatus || !playerTwoStatus)
        return;
    const playerOne = GAME_STATUS.players[0];
    const playerTwo = GAME_STATUS.players[1];
    const widthPlayerOneLife = (playerOne.life < 0) ? 0 : playerOne.life;
    const widthPlayerTwoLife = (playerTwo.life < 0) ? 0 : playerTwo.life;
    playerOneLifeBar.style.width = `${widthPlayerOneLife}%`;
    playerTwoLifeBar.style.width = `${widthPlayerTwoLife}%`;
    playerOneStatus.innerText = `${playerOne.name} - ${playerOne.life}/${playerOne.maxLife}`;
    playerTwoStatus.innerText = `${playerTwo.life}/${playerTwo.maxLife} - ${playerTwo.name}`;
}
export function gameOver(winner) {
    stopMusic();
    hideElements(SCREENS);
    showElement(SCREEN_GAME_OVER, "flex");
    const message = document.getElementById("game-over-info");
    if (message)
        message.innerText = `${winner} won the game!`;
}
export function hideElements(elements) {
    elements.forEach(element => element.style.display = "none");
}
export function showElement(element, display) {
    element.style.display = display;
}
export function showPlayerRound() {
    const playerOneStatus = document.getElementById("player-status-one");
    const playerTwoStatus = document.getElementById("player-status-two");
    if (!playerOneStatus || !playerTwoStatus)
        return;
    if (GAME_STATUS.round == 0.5 || GAME_STATUS.round == 0) {
        playerOneStatus.style.border = "2px solid yellow";
        playerTwoStatus.style.border = "0px";
        return;
    }
    if (GAME_STATUS.round == 1.5 || GAME_STATUS.round == 1) {
        playerOneStatus.style.border = "0px";
        playerTwoStatus.style.border = "2px solid yellow";
        return;
    }
}
