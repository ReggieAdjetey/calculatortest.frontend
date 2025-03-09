import {GetRandomNumber} from "ct.frontend/helpers/GetRandomNumber/GetRandomNumber";

describe("GetRandomNumber.test.ts", () => {
    let max = GetRandomNumber(1000, 500);
    let min = GetRandomNumber(500, 1);
    let value = GetRandomNumber(max, min);

    it("should return a number.", () => expect(typeof value).toBe("number"));

    it("should be greater than or equal to the minimum value.", () => expect(value).toBeGreaterThanOrEqual(min));

    it("should be less than the max value.", () => expect(value).toBeLessThan(max));

    it("should handle edge cases where min and max are equal.", () => {
            min = 10;
            max = 10;
            value = GetRandomNumber(max, min);
            expect(value).toEqual(min);
            expect(value).toEqual(max);
        }
    );

    it("should handle cases where min is greater than max.", () => {
            min = GetRandomNumber(20, 11);
            max = GetRandomNumber(10, 2);
            expect(value).toBeGreaterThan(max);
    });
});