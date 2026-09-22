import {Random} from "../Core/random";
import {Player} from "../Board/player";
import {AI} from "../AI/Iagent";
import {Minion} from "../Board/minion";

export type PlayContext = {
    owner: Player | AI;
    opponent: Player | AI;
    random: Random;
    target?: Player | AI | Minion;
}

export enum CardType {Spell, Minion}