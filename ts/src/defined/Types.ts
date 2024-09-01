export type Player = {
    name: string,
    life: number
    maxLife: number
    attack: number
    defense: boolean
    extraCriticalChance: number
    extraBaseDamage: number
    defenseBreaker: boolean
}

export type GameStatus = {
    running: boolean
    mode: string
    round: number
    players: Player[]
}

export type AttackValues = {
    weak: {damage: number, criticalChance: number}
    normal: {damage: number, criticalChance: number}
    strong: {damage: number, criticalChance: number}
}

export type EffectsValues = {
    damage: {
        maxCriticalChance: number
        minCriticalChance: number
        increaseCriticalChance: number
        decreaseCriticalChance: number
        increaseBaseDamage: number
        increaseEnemyBaseDamage: number
    }

    life: {
        increaseMaxLife: number
        decreaseMaxLife: number
        increaseLife: number
        decreaseLife: number
    }

    defense: {
        defenseBreaker: boolean
    }
}

export type EffectMessage = {
    maxCriticalChance: () => string
    minCriticalChance: () => string
    increaseCriticalChance: () => string
    decreaseCriticalChance: () => string
    increaseBaseDamage: () => string
    increaseEnemyBaseDamage: () => string
    increaseMaxLife: () => string
    decreaseMaxLife: () => string
    increaseLife: () => string
    decreaseLife: () => string
    defenseBreaker: () => string
}

export type Message = {
    player: string
    target: string
    action: string
    defense: boolean
    effect: string
    typeAttack: string
    extraDamage: number
    totalDamage: number
    message: string
}

export type Music = {
    running: boolean
    music: string
}