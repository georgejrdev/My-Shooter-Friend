import { GAME_STATUS } from "./GameStatus.js";
const ATTACK_BASE_VALUES = {
    weak: { damage: 7, criticalChance: 0.65 },
    normal: { damage: 15, criticalChance: 0.45 },
    strong: { damage: 25, criticalChance: 0.15 }
};
const EFFECT_BASE_VALUES = {
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
function attack(player, enemy, attackType) {
    const criticalChance = player.extraCriticalChance + ATTACK_BASE_VALUES[attackType].criticalChance;
    const damage = player.attack + player.extraBaseDamage + calculateCriticalDamage(ATTACK_BASE_VALUES[attackType].damage, criticalChance);
    if (!enemy.defense || player.defenseBreaker)
        enemy.life -= damage;
    resetPlayerStatus(player);
    resetPlayerStatus(enemy);
}
function defense(player) {
    player.defense = true;
}
function randomizeEffect(player, enemy) {
    const categories = ['damage', 'life', 'defense'];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const selectedEffect = EFFECT_BASE_VALUES[randomCategory];
    const keys = Object.keys(selectedEffect);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const affectedPlayer = (randomKey === "increaseEnemyBaseDamage") ? enemy : player;
    apply(affectedPlayer, randomCategory, randomKey);
}
function apply(player, category, key) {
    const value = EFFECT_BASE_VALUES[category][key];
    switch (category) {
        case "damage":
            if (key === "maxCriticalChance")
                player.extraCriticalChance = value;
            else if (key === "minCriticalChance")
                player.extraCriticalChance = value;
            else if (key === "increaseCriticalChance")
                player.extraCriticalChance += value;
            else if (key === "decreaseCriticalChance")
                player.extraCriticalChance += value;
            else if (key === "increaseBaseDamage")
                player.extraBaseDamage += value;
            else if (key === "increaseEnemyBaseDamage")
                player.extraBaseDamage += value;
            break;
        case "life":
            if (key === "increaseMaxLife")
                player.maxLife += (player.maxLife < 120) ? value : 0;
            else if (key === "decreaseMaxLife")
                player.maxLife += (player.maxLife <= 80) ? 0 : value;
            else if (key === "increaseLife")
                player.life = (player.life + value < player.maxLife) ? player.life + value : player.maxLife;
            else if (key === "decreaseLife")
                player.life = (player.life - value >= 0) ? player.life - value : 0;
            break;
        case "defense":
            if (key === "defenseBreaker")
                player.defenseBreaker = value;
            break;
    }
}
function calculateCriticalDamage(damage, criticalChance) {
    return (Math.random() < criticalChance) ? damage : 0;
}
function resetPlayerStatus(player) {
    player.defense = false;
    player.extraBaseDamage = 0;
    player.extraCriticalChance = 0;
    player.defenseBreaker = false;
}
export const callActions = {
    q() {
        attack(GAME_STATUS.players[0], GAME_STATUS.players[1], "weak");
        return 1;
    },
    w() {
        attack(GAME_STATUS.players[0], GAME_STATUS.players[1], "normal");
        return 1;
    },
    e() {
        attack(GAME_STATUS.players[0], GAME_STATUS.players[1], "strong");
        return 1;
    },
    a() {
        defense(GAME_STATUS.players[0]);
        return 1;
    },
    s() {
        if (GAME_STATUS.round == 0.5) {
            return 1;
        }
        randomizeEffect(GAME_STATUS.players[0], GAME_STATUS.players[1]);
        return 0.5;
    },
    u() {
        attack(GAME_STATUS.players[1], GAME_STATUS.players[0], "weak");
        return 0;
    },
    i() {
        attack(GAME_STATUS.players[1], GAME_STATUS.players[0], "normal");
        return 0;
    },
    o() {
        attack(GAME_STATUS.players[1], GAME_STATUS.players[0], "strong");
        return 0;
    },
    k() {
        defense(GAME_STATUS.players[1]);
        return 0;
    },
    l() {
        if (GAME_STATUS.round == 1.5) {
            return 0;
        }
        randomizeEffect(GAME_STATUS.players[1], GAME_STATUS.players[0]);
        return 1.5;
    }
};
