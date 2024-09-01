import { GAME_STATUS, SCREEN_GAME_OVER, SCREENS } from "../defined/Consts.js"
import { stopMusic } from "../music/Music.js"

export function changeLifeBar(){

    const playerOneLifeBar = document.getElementById("player-life-one") as HTMLDivElement
    const playerTwoLifeBar = document.getElementById("player-life-two") as HTMLDivElement
    const playerOneStatus = document.getElementById("player-status-one") as HTMLDivElement
    const playerTwoStatus = document.getElementById("player-status-two") as HTMLDivElement
    if (!playerOneLifeBar || !playerTwoLifeBar || !playerOneStatus || !playerTwoStatus) return
    
    const playerOne = GAME_STATUS.players[0]
    const playerTwo = GAME_STATUS.players[1]

    const widthPlayerOneLife = (playerOne.life < 0) ? 0 : playerOne.life
    const widthPlayerTwoLife = (playerTwo.life < 0) ? 0 : playerTwo.life

    playerOneLifeBar.style.width = `${widthPlayerOneLife}%`
    playerTwoLifeBar.style.width = `${widthPlayerTwoLife}%`

    playerOneStatus.innerText = `${playerOne.name} - ${playerOne.life}/${playerOne.maxLife}`
    playerTwoStatus.innerText = `${playerTwo.life}/${playerTwo.maxLife} - ${playerTwo.name}`
}


export function gameOver(winner: string): void{
    stopMusic()

    hideElements(SCREENS)
    showElement(SCREEN_GAME_OVER, "flex")

    const message: HTMLElement = document.getElementById("game-over-info") as HTMLElement
    if (message) message.innerText = `${winner} won the game!`
}

export function hideElements(elements: HTMLElement[]): void{
    elements.forEach(element => element.style.display = "none")
 }
 
export function showElement(element: HTMLElement, display: string): void{
    element.style.display = display
}

export function showPlayerRound(): void{
    const playerOneStatus = document.getElementById("player-status-one") as HTMLDivElement
    const playerTwoStatus = document.getElementById("player-status-two") as HTMLDivElement
    if (!playerOneStatus || !playerTwoStatus) return

    if (GAME_STATUS.round == 0.5 || GAME_STATUS.round == 0){
        playerOneStatus.style.border = "2px solid yellow"
        playerTwoStatus.style.border = "0px"
        return
    }

    if (GAME_STATUS.round == 1.5 || GAME_STATUS.round == 1){
        playerOneStatus.style.border = "0px"
        playerTwoStatus.style.border = "2px solid yellow"
        return
    }
}