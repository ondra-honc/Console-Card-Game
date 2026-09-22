import {PlayContext, CardType} from "../Shared/types";

export abstract class Card {
    constructor(private readonly _id: number, private readonly _name: string, private readonly _cost: number, private readonly _type: CardType) {}

    abstract play(ctx: PlayContext): void

    get id(): number { return this._id; }
    get name(): string { return this._name; }
    get cost(): number { return this._cost; }
    get type(): CardType { return this._type; }
}