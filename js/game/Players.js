export function createPlayer(name) {
    return {
        name: name,
        life: 100,
        maxLife: 100,
        attack: 8,
        defense: false,
        extraCriticalChance: 0,
        extraBaseDamage: 0,
        defenseBreaker: false
    };
}
