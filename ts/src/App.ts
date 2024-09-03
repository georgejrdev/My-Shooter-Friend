import { CALL_ACTION } from "./actions/Call.js"
import { getComputerKey } from "./computer/ComputerKey.js"
import { activeListenerButtons, checkGameOver } from "./defined/Auxiliar.js"
import { GAME_STATUS, ACCEPT_KEYS, PLAYER_ONE_KEYS, PLAYER_TWO_KEYS, RANDOMIZE_KEYS } from "./defined/Consts.js"
import { showMessageBox } from "./message/Message.js"
import { changeMusic } from "./music/Music.js"
import { changeLifeBar, showPlayerRound } from "./screen/State.js"

document.addEventListener('click', () => {
    changeMusic('menu');
}, { once: true });


activeListenerButtons()

document.addEventListener("keydown", (event) => {
    handleKeyPress(event.key, false)
})

function handleKeyPress(key: string, pressedByComputer: boolean) {

    if (!validationKeyPress(key, pressedByComputer)) return

    GAME_STATUS.round = (CALL_ACTION as any)[key]()

    changeLifeBar()
    showMessageBox()
    checkGameOver()

    if (GAME_STATUS.mode == "1vc" && (GAME_STATUS.round == 1 || GAME_STATUS.round == 1.5)) {
        const computerKey = getComputerKey()

        setTimeout(() => {
            handleKeyPress(computerKey, true)
        }, 3500)
    }
}


function validationKeyPress(key: string, pressedByComputer: boolean): boolean{
    
    if (!GAME_STATUS.running) return false
    if ((RANDOMIZE_KEYS.includes(key) && GAME_STATUS.round == 0.5) || (RANDOMIZE_KEYS.includes(key) && GAME_STATUS.round == 1.5)) return false
    if (!ACCEPT_KEYS.includes(key)) return false
    if ((GAME_STATUS.round == 0.5 && key === "k" ) || (GAME_STATUS.round == 1.5 && key === "a")) return false
    if (GAME_STATUS.round == 0 && PLAYER_TWO_KEYS.includes(key)) return false
    if (GAME_STATUS.round == 1 && PLAYER_ONE_KEYS.includes(key)) return false
    if ((GAME_STATUS.mode === "1vc" && !pressedByComputer) && PLAYER_TWO_KEYS.includes(key)) return false

    return true
}