import { GAME_STATUS } from "../defined/Consts.js"
import { attack } from "./Attack.js"
import { defense } from "./Defense.js"
import { randomizeEffect } from "./Effect.js"

export const CALL_ACTION = {
    q(){
        attack(GAME_STATUS.players[0], GAME_STATUS.players[1], "weak")
        return 1
    },

    w(){
        attack(GAME_STATUS.players[0], GAME_STATUS.players[1], "normal")
        return 1
    },

    e(){
        attack(GAME_STATUS.players[0], GAME_STATUS.players[1], "strong")
        return 1
    },

    a(){
        defense(GAME_STATUS.players[0])
        return 1
    },

    s(){
        if (GAME_STATUS.round == 0.5){
            return 1
        }

        randomizeEffect(GAME_STATUS.players[0], GAME_STATUS.players[1])

        return 0.5
    },

    u(){
        attack(GAME_STATUS.players[1], GAME_STATUS.players[0], "weak")
        return 0
    },

    i(){
        attack(GAME_STATUS.players[1], GAME_STATUS.players[0], "normal")
        return 0
    },

    o(){
        attack(GAME_STATUS.players[1], GAME_STATUS.players[0], "strong")
        return 0
    },

    k(){
        defense(GAME_STATUS.players[1])
        return 0
    },

    l(){
        if (GAME_STATUS.round == 1.5){
            return 0
        }

        randomizeEffect(GAME_STATUS.players[1], GAME_STATUS.players[0])
        return 1.5
    }
}