import { GAME_STATUS } from "../defined/Consts.js";
import { executeAudioEffect } from "../music/Music.js";
import { showPlayerRound } from "./State.js";
export function runAttackAnimation(attackType, defend) {
    GAME_STATUS.running = false;
    let animationClass = "";
    if (attackType === "weak" && !defend)
        animationClass = "animation-weak-attack";
    if (attackType === "weak" && defend)
        animationClass = "animation-weak-attack-defend";
    if (attackType === "normal" && !defend)
        animationClass = "animation-normal-attack";
    if (attackType === "normal" && defend)
        animationClass = "animation-normal-attack-defend";
    if (attackType === "strong" && !defend)
        animationClass = "animation-strong-attack";
    if (attackType === "strong" && defend)
        animationClass = "animation-strong-attack-defend";
    const animationDiv = document.getElementById("mid-table");
    animationDiv.classList.add(animationClass);
    executeAudioEffect(attackType, 1200, 0.85);
    setTimeout(() => {
        animationDiv.classList.remove(animationClass);
        GAME_STATUS.running = true;
        showPlayerRound();
    }, 1000);
}
export function runOthersAnimations(type) {
    GAME_STATUS.running = false;
    let animationClass = "";
    if (type === "defense")
        animationClass = "animation-defense";
    if (type === "maxCriticalChance")
        animationClass = "animation-max-critical-chance";
    if (type === "minCriticalChance")
        animationClass = "animation-min-critical-chance";
    if (type === "increaseCriticalChance")
        animationClass = "animation-increase-critical-chance";
    if (type === "decreaseCriticalChance")
        animationClass = "animation-decrease-critical-chance";
    if (type === "increaseBaseDamage")
        animationClass = "animation-increase-base-damage";
    if (type === "increaseEnemyBaseDamage")
        animationClass = "animation-increase-enemy-base-damage";
    if (type === "increaseMaxLife")
        animationClass = "animation-increase-max-life";
    if (type === "decreaseMaxLife")
        animationClass = "animation-decrease-max-life";
    if (type === "increaseLife")
        animationClass = "animation-increase-life";
    if (type === "defenseBreaker")
        animationClass = "animation-defense-breaker";
    if (type === "decreaseLife")
        animationClass = "animation-decrease-life";
    const animationDiv = document.getElementById("mid-table");
    animationDiv.classList.add(animationClass);
    animationDiv.style.backgroundSize = "50%";
    if (type != "defense")
        executeAudioEffect("effect", 1200, 0.85);
    setTimeout(() => {
        animationDiv.classList.remove(animationClass);
        animationDiv.style.backgroundSize = "contain";
        GAME_STATUS.running = true;
        showPlayerRound();
    }, 1200);
}
