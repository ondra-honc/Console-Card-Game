import type {Random} from "../Core/random";
import type {Player} from "../Board/player";
import type {Minion} from "../Board/minion";

export type PlayContext = {
    owner: Player;
    opponent: Player;
    random: Random;
    target?: Player | Minion;
}

export enum CardType {Spell, Minion}