import {PlayContext, CardType} from "../Shared/types";

abstract class Card {
    private readonly _id: number;
    private readonly _name: string;
    private readonly _cost: number;
    private readonly _type: CardType;

    constructor(idParam: number, nameParam: string, costParam: number, typeParam: CardType) {
        this._id = idParam;
        this._name = nameParam;
        this._cost = costParam;
        this._type = typeParam;
    }

    abstract play(ctx: PlayContext): void

    public get id(): number {
        return this._id;
    }
}