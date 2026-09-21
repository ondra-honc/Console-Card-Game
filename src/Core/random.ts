export class Random {
    private _currentSeed: number;

    private static readonly _a: number = 1103515245;
    private static readonly _c: number = 12345;
    private static readonly _m: number = 2147483648;
    
    constructor(startSeed: number) {
        this._currentSeed = startSeed;
    }
    
    private nextSeed(): number {
        this._currentSeed = (Random._a * this._currentSeed + Random._c) % Random._m;
        return this._currentSeed;
    }

    public next(): number { // <0;1)
        return this.nextSeed() / Random._m;
    }

    public nextInt(min: number, max: number): number { // <min;max>
        const range = max - min + 1;
        return Math.floor(this.next() * range) + min;
    }

    public pick<T>(arr: readonly T[]): T | undefined {
        return arr.length === 0 ? undefined : arr[this.nextInt(0, arr.length - 1)];
    }

    public shuffle<T>(arr: T[]): void {
        for (let i: number = arr.length - 1; i > 0; i--) {
            const j = this.nextInt(0, i);

            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}