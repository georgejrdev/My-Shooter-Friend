import { changeLifeBar } from "../screen/PlayerStatus.js";
import { GAME_STATUS } from "./GameStatus.js";
import { createPlayer } from "./Players.js";
export function startGame() {
    GAME_STATUS.running = true;
    let namePlayerOne = document.getElementById("player-one-name").value;
    let namePlayerTwo = document.getElementById("player-two-name").value;
    if (!namePlayerOne)
        namePlayerOne = "Player 1";
    if (!namePlayerTwo || GAME_STATUS.mode == "1vC")
        namePlayerTwo = "Computer";
    GAME_STATUS.players = [createPlayer(namePlayerOne), createPlayer(namePlayerTwo)];
    changeLifeBar();
}
