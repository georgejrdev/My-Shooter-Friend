import { MESSAGE } from "../defined/Consts.js";
import { Player } from "../defined/Types.js";

export function defense(player: Player){
    MESSAGE.action = "defense"
    MESSAGE.player = player.name
    
    player.defense = true
}