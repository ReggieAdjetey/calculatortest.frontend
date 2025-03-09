import RemCalculator from "ct.frontend/components/helpers/RemCalculator";
import {GetRandomNumber} from "ct.frontend/helpers/GetRandomNumber/GetRandomNumber";

describe('RemCalculator.test.ts', () => {
    const valueInPixels = GetRandomNumber(100, 0);
    const value = RemCalculator(valueInPixels);

    it("should work correctly", () => {
        expect(value).toBe(`${valueInPixels/16}rem`);
    })
})