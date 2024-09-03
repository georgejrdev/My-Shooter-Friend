import { MESSAGE } from "../defined/Consts.js";
import { Player } from "../defined/Types.js";
import { runOthersAnimations } from "../screen/Animations.js";

export function defense(player: Player){
    MESSAGE.action = "defense"
    MESSAGE.player = player.name
    
    runOthersAnimations("defense")
    player.defense = true
}