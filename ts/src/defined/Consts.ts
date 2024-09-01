import { AttackValues, EffectMessage, EffectsValues, GameStatus, Message, Music } from "./Types.js";

export const GAME_STATUS: GameStatus = {
    running: false,
    mode: "",
    round: 0,
    players: [],
}

export const ATTACK_VALUES: AttackValues = {
    weak: {damage: 7, criticalChance: 0.65},
    normal: {damage: 15, criticalChance: 0.45},
    strong: {damage: 25, criticalChance: 0.15}
}

export const EFFECT_VALUES: EffectsValues = {
    damage: {
        maxCriticalChance: 1,
        minCriticalChance: -1,
        increaseCriticalChance: 0.15,
        decreaseCriticalChance: -0.15,
        increaseBaseDamage: 8,
        increaseEnemyBaseDamage: 10
    },

    life: {
        increaseLife: 15,
        decreaseLife: -15,
        increaseMaxLife: 20,
        decreaseMaxLife: -20,
    },

    defense: {
        defenseBreaker: true
    }
}

export const ACCEPT_KEYS: string[] = ["q","w","e","a","s","u","i","o","k","l"]
export const PLAYER_ONE_KEYS: string[] = ["q","w","e","a","s"]
export const PLAYER_TWO_KEYS: string[] = ["u","i","o","k","l"]
export const RANDOMIZE_KEYS: string[] = ["s","l"]
export const DEFENSE_KEYS: string[] = ["a","k"]

export const BUTTON_TO_MODE: HTMLButtonElement = document.getElementById("button-to-mode") as HTMLButtonElement
export const BUTTON_MODE_1V1: HTMLButtonElement = document.getElementById("button-mode-1v1") as HTMLButtonElement
export const BUTTON_MODE_1VC: HTMLButtonElement = document.getElementById("button-mode-1vc") as HTMLButtonElement
export const BUTTON_TO_GAME: HTMLButtonElement = document.getElementById("button-to-game") as HTMLButtonElement

export const INPUT_NAME_PLAYER_TWO: HTMLInputElement = document.getElementById("player-name-two") as HTMLInputElement

export const SCREEN_INITIAL_MENU: HTMLElement = document.getElementById("initial-menu") as HTMLElement
export const SCREEN_MODE_MENU: HTMLElement = document.getElementById("mode-menu") as HTMLElement
export const SCREEN_NAME_MENU: HTMLElement = document.getElementById("name-menu") as HTMLElement
export const SCREEN_GAME: HTMLElement = document.getElementById("game") as HTMLElement
export const SCREEN_GAME_OVER: HTMLElement = document.getElementById("game-over") as HTMLElement

export const SCREENS: HTMLElement[] = [SCREEN_INITIAL_MENU, SCREEN_MODE_MENU, SCREEN_NAME_MENU, SCREEN_GAME, SCREEN_GAME_OVER]

export const MESSAGE: Message = {
    player: "",
    target: "",
    action: "",
    defense: false,
    effect: "",
    typeAttack: "",
    extraDamage: 0,
    totalDamage: 0,
    message: ""
}


export const EFFECT_PHRASE: EffectMessage= {
    maxCriticalChance(){
        return "Critical chance increased to 100%"
    },
    minCriticalChance(){
        return "Critical chance decreased to 0%"
    },
    increaseCriticalChance(){
        return "Critical chance increased by 15%"
    },
    decreaseCriticalChance(){
        return "Critical chance decreased by 15%"
    },
    increaseBaseDamage(){
        return "Base damage increased by 8"
    },
    increaseEnemyBaseDamage(){
        return "Enemy base damage increased by 10"
    },
    increaseMaxLife(){
        return "Max life increased by 20"
    },
    decreaseMaxLife(){
        return "Max life decreased by 20"
    },
    increaseLife(){
        return "Life increased by 15"
    },
    decreaseLife(){
        return "Life decreased by 15"
    },
    defenseBreaker(){
        return "Defense breaker activated"
    },
}

export const MUSIC: Music = {
    running: true,
    music: "menu"
}