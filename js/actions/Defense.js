import { MESSAGE } from "../defined/Consts.js";
import { runOthersAnimations } from "../screen/Animations.js";
export function defense(player) {
    MESSAGE.action = "defense";
    MESSAGE.player = player.name;
    runOthersAnimations("defense");
    player.defense = true;
}
