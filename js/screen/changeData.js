import { GAME_STATUS } from "../values";
export function showRoundPlayer() {
    const playerOneStatus = document.getElementById("player-status-one");
    const playerTwoStatus = document.getElementById("player-status-two");
    if (!playerOneStatus || !playerTwoStatus)
        return;
    if (GAME_STATUS.round == 0 || GAME_STATUS.round == 0.5) {
        playerTwoStatus.style.border = "0px";
        playerOneStatus.style.border = "2px solid yellow";
        return;
    }
    if (GAME_STATUS.round == 1 || GAME_STATUS.round == 1.5) {
        playerOneStatus.style.border = "0px";
        playerTwoStatus.style.border = "2px solid yellow";
        return;
    }
}
