import { GAME_STATUS } from "../game/GameStatus.js";
export function changeLifeBar() {
    const lifeBarPlayer1 = document.getElementById("player-one-life");
    const lifeBarPlayer2 = document.getElementById("player-two-life");
    if (!lifeBarPlayer1 || !lifeBarPlayer2)
        return;
    const players = GAME_STATUS.players;
    const playerOne = players[0];
    const playerTwo = players[1];
    let lifePlayerOne = playerOne.life;
    let lifePlayerTwo = playerTwo.life;
    if (lifePlayerOne < 0)
        lifePlayerOne = 0;
    if (lifePlayerTwo < 0)
        lifePlayerTwo = 0;
    lifeBarPlayer1.style.width = `${lifePlayerOne}%`;
    lifeBarPlayer2.style.width = `${lifePlayerTwo}%`;
    const playerName1 = document.getElementById("player-status-one");
    const playerName2 = document.getElementById("player-status-two");
    if (!playerName1 || !playerName2)
        return;
    playerName1.innerText = `${playerOne.name} - ${lifePlayerOne}/${playerOne.maxLife}`;
    playerName2.innerText = `${lifePlayerTwo}/${playerTwo.maxLife} - ${playerTwo.name}`;
}
