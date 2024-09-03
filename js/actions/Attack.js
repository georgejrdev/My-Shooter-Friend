import { ATTACK_VALUES, MESSAGE } from "../defined/Consts.js";
import { runAttackAnimation } from "../screen/Animations.js";
export function attack(player, enemy, attackType) {
    const criticalChance = player.extraCriticalChance + ATTACK_VALUES[attackType].criticalChance;
    const extraDamage = player.extraBaseDamage + calculateCriticalDamage(ATTACK_VALUES[attackType].damage, criticalChance);
    const damage = player.attack + extraDamage;
    MESSAGE.action = "attack";
    MESSAGE.player = player.name;
    MESSAGE.target = enemy.name;
    MESSAGE.typeAttack = attackType;
    MESSAGE.extraDamage = extraDamage;
    MESSAGE.totalDamage = damage;
    if (!enemy.defense || player.defenseBreaker)
        enemy.life -= damage;
    if (enemy.defense && !player.defenseBreaker)
        MESSAGE.defense = true;
    runAttackAnimation(attackType, (!(!enemy.defense || player.defenseBreaker)));
    resetPlayerStatusAfterAttack(player);
    resetEnemyStatusAfterAttack(enemy);
}
function calculateCriticalDamage(damage, criticalChance) {
    return (Math.random() < criticalChance) ? damage : 0;
}
function resetPlayerStatusAfterAttack(player) {
    player.defense = false;
    player.extraBaseDamage = 0;
    player.extraCriticalChance = 0;
    player.defenseBreaker = false;
}
function resetEnemyStatusAfterAttack(player) {
    player.defense = false;
    player.extraCriticalChance = 0;
    player.defenseBreaker = false;
}
