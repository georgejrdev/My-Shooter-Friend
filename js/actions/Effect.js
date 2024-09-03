import { EFFECT_PHRASE, EFFECT_VALUES, MESSAGE } from "../defined/Consts.js";
import { runOthersAnimations } from "../screen/Animations.js";
export function randomizeEffect(player, enemy) {
    const categories = ["damage", "life", "defense"];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const selectedEffect = EFFECT_VALUES[randomCategory];
    const keys = Object.keys(selectedEffect);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const affectedPlayer = (randomKey === "increaseEnemyBaseDamage") ? enemy : player;
    applyEffect(affectedPlayer, randomCategory, randomKey);
    runOthersAnimations(randomKey);
    MESSAGE.action = "effect";
    MESSAGE.player = player.name;
    MESSAGE.effect = EFFECT_PHRASE[randomKey]();
}
function applyEffect(player, category, key) {
    const value = EFFECT_VALUES[category][key];
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
