import { MESSAGE } from "../defined/Consts.js";

export function resetMessage(): void{
    MESSAGE.message = ""
    MESSAGE.action = ""
    MESSAGE.player = ""
    MESSAGE.target = ""
    MESSAGE.defense = false
    MESSAGE.effect = ""
    MESSAGE.typeAttack = ""
    MESSAGE.extraDamage = 0
    MESSAGE.totalDamage = 0
}

export function setMessage(): void{

    if (MESSAGE.action === "attack") MESSAGE.message+= `${MESSAGE.player} <span class='emphasis-gold'>attacks</span> ${MESSAGE.target}` 
    if (MESSAGE.action === "defense") MESSAGE.message+= `${MESSAGE.player} <span class='emphasis-gold'>defended himself</span>`
    if (MESSAGE.action === "effect") MESSAGE.message+= `<span class='emphasis-gold'>Effect</span> for ${MESSAGE.player}: ${MESSAGE.effect}`

    if (MESSAGE.typeAttack != "") MESSAGE.message+= ` | ${MESSAGE.typeAttack} <span class='emphasis-light-orange'>attack</span>`
    if (MESSAGE.extraDamage != 0) MESSAGE.message+= ` | <span class='emphasis-light-red'>Extra damage:</span> ${MESSAGE.extraDamage}`
    if (MESSAGE.totalDamage != 0) MESSAGE.message+= ` | <span class='emphasis-orange'>Total damage</span>: ${MESSAGE.totalDamage}`
    
    if (MESSAGE.defense) MESSAGE.message+= ` | ${MESSAGE.target} <span class='emphasis-green'>defended</span>`
    else if (!MESSAGE.defense && MESSAGE.action === "attack") MESSAGE.message+= ` | ${MESSAGE.target} <span class='emphasis-red'>was attacked</span>`
}

export function showMessageBox(): void{
    setMessage()

    const message = document.getElementById("message") as HTMLElement
    if (message) message.innerHTML = MESSAGE.message
    
    resetMessage()
}
