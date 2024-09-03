import { ATTACK_VALUES, MESSAGE } from "../defined/Consts.js"
import { Player } from "../defined/Types.js"
import { runAttackAnimation } from "../screen/Animations.js"

export function attack(player:Player, enemy:Player, attackType:string): void{
    const criticalChance: number = player.extraCriticalChance + (ATTACK_VALUES as any)[attackType].criticalChance
    const extraDamage = player.extraBaseDamage + calculateCriticalDamage((ATTACK_VALUES as any)[attackType].damage, criticalChance)
    const damage: number = player.attack + extraDamage

    MESSAGE.action = "attack"
    MESSAGE.player = player.name
    MESSAGE.target = enemy.name
    MESSAGE.typeAttack = attackType
    MESSAGE.extraDamage = extraDamage
    MESSAGE.totalDamage = damage

    if (!enemy.defense || player.defenseBreaker) enemy.life -= damage
    if (enemy.defense && !player.defenseBreaker) MESSAGE.defense = true

    runAttackAnimation(attackType, (!(!enemy.defense || player.defenseBreaker)))

    resetPlayerStatusAfterAttack(player)
    resetEnemyStatusAfterAttack(enemy)
}

function calculateCriticalDamage(damage: number, criticalChance: number): number{
    return (Math.random() < criticalChance) ? damage : 0
}

function resetPlayerStatusAfterAttack(player: Player): void{
    player.defense = false
    player.extraBaseDamage = 0
    player.extraCriticalChance = 0
    player.defenseBreaker = false
}

function resetEnemyStatusAfterAttack(player: Player): void{
    player.defense = false
    player.extraCriticalChance = 0
    player.defenseBreaker = false
}