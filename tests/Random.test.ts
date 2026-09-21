import { describe, test, expect } from 'vitest';
import { Random } from '../src/Core/Random';

describe('Třída Random', () => {
    
    // TEST 1: Dva Random(42) → 20 stejných hodnot z next()
    test('by měla generovat identické hodnoty pro stejný seed', () => {
        const rng1 = new Random(42);
        const rng2 = new Random(42);

        for (let i = 0; i < 20; i++) {
            expect(rng1.next()).toBe(rng2.next());
        }
    });

    // TEST 2: nextInt(0, 1) 1000× → jen 0 nebo 1, obě se vyskytnou
    test('nextInt(0, 1) vrací pouze 0 nebo 1 a obě hodnoty padají', () => {
        const rng = new Random(12345);
        let countZero = 0;
        let countOne = 0;

        for (let i = 0; i < 1000; i++) {
            const val = rng.nextInt(0, 1);
            
            expect([0, 1]).toContain(val);

            if (val === 0) countZero++;
            if (val === 1) countOne++;
        }

        expect(countZero).toBeGreaterThan(0);
        expect(countOne).toBeGreaterThan(0);
    });

    // TEST 3: shuffle na [1..10] → stejná délka, po seřazení stejné prvky
    test('shuffle([1..10]) náhodně zamíchá pole, ale zachová všechny prvky bez poškození', () => {
        const rng = new Random(999);
        const original = [1,2,3,4,5,6,7,8,9,10];
        const shuffled = [...original];
        
        rng.shuffle(shuffled);

        expect(shuffled).toHaveLength(original.length);
        
        expect(shuffled).not.toContain(undefined);

        const sortedShuffled = [...shuffled].sort((a, b) => a - b);
        expect(sortedShuffled).toEqual(original);
    });

    // TEST 4: pick([]) → undefined
    test('pick([]) na prázdném poli bezpečně vrátí undefined', () => {
        const rng = new Random(777);
        const result = rng.pick([]);
        
        expect(result).toBeUndefined();
    });
});
