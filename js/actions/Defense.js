import { MESSAGE } from "../defined/Consts.js";
export function defense(player) {
    MESSAGE.action = "defense";
    MESSAGE.player = player.name;
    player.defense = true;
}
