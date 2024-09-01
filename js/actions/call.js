import { GAME_STATUS } from "../values";
export const callActions = {
    q() {
        return 1;
    },
    w() {
        return 1;
    },
    e() {
        return 1;
    },
    a() {
        return 1;
    },
    s() {
        if (GAME_STATUS.round == 0.5) {
            return 1;
        }
        return 0.5;
    },
    u() {
        return 0;
    },
    i() {
        return 0;
    },
    o() {
        return 0;
    },
    k() {
        return 0;
    },
    l() {
        if (GAME_STATUS.round == 1.5) {
            return 0;
        }
        return 1.5;
    }
};
