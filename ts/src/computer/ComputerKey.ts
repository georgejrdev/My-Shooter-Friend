import { GAME_STATUS, PLAYER_TWO_KEYS } from "../defined/Consts.js"

export function getComputerKey(): string{
    
    const key: string = randomize()
    
    if ((GAME_STATUS.round == 1.5) && (key == "l")){
        return getComputerKey()
    }

    return key
}


function randomize(): string{
    return PLAYER_TWO_KEYS[Math.floor(Math.random() * PLAYER_TWO_KEYS.length)]
}