export const GAME_STATUS = {
    running: false,
    mode: "",
    round: 0,
    players: [],
};
export const ATTACK_VALUES = {
    weak: { damage: 7, criticalChance: 0.65 },
    normal: { damage: 15, criticalChance: 0.45 },
    strong: { damage: 25, criticalChance: 0.15 }
};
export const EFFECT_VALUES = {
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
};
export const ACCEPT_KEYS = ["q", "w", "e", "a", "s", "u", "i", "o", "k", "l"];
export const PLAYER_ONE_KEYS = ["q", "w", "e", "a", "s"];
export const PLAYER_TWO_KEYS = ["u", "i", "o", "k", "l"];
export const RANDOMIZE_KEYS = ["s", "l"];
export const DEFENSE_KEYS = ["a", "k"];
export const BUTTON_TO_MODE = document.getElementById("button-to-mode");
export const BUTTON_MODE_1V1 = document.getElementById("button-mode-1v1");
export const BUTTON_MODE_1VC = document.getElementById("button-mode-1vc");
export const BUTTON_TO_GAME = document.getElementById("button-to-game");
export const INPUT_NAME_PLAYER_TWO = document.getElementById("player-name-two");
export const SCREEN_INITIAL_MENU = document.getElementById("initial-menu");
export const SCREEN_MODE_MENU = document.getElementById("mode-menu");
export const SCREEN_NAME_MENU = document.getElementById("name-menu");
export const SCREEN_GAME = document.getElementById("game");
export const SCREEN_GAME_OVER = document.getElementById("game-over");
export const SCREENS = [SCREEN_INITIAL_MENU, SCREEN_MODE_MENU, SCREEN_NAME_MENU, SCREEN_GAME, SCREEN_GAME_OVER];
export const MESSAGE = {
    player: "",
    target: "",
    action: "",
    defense: false,
    effect: "",
    typeAttack: "",
    extraDamage: 0,
    totalDamage: 0,
    message: ""
};
export const EFFECT_PHRASE = {
    maxCriticalChance() {
        return "Critical chance increased to 100%";
    },
    minCriticalChance() {
        return "Critical chance decreased to 0%";
    },
    increaseCriticalChance() {
        return "Critical chance increased by 15%";
    },
    decreaseCriticalChance() {
        return "Critical chance decreased by 15%";
    },
    increaseBaseDamage() {
        return "Base damage increased by 8";
    },
    increaseEnemyBaseDamage() {
        return "Enemy base damage increased by 10";
    },
    increaseMaxLife() {
        return "Max life increased by 20";
    },
    decreaseMaxLife() {
        return "Max life decreased by 20";
    },
    increaseLife() {
        return "Life increased by 15";
    },
    decreaseLife() {
        return "Life decreased by 15";
    },
    defenseBreaker() {
        return "Defense breaker activated";
    },
};
export const MUSIC = {
    running: true,
    music: "menu"
};
