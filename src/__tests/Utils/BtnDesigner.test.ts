import {btnDesigner} from "ct.frontend/helpers/BtnDesigner/BtnDesigner";

describe('BtnDesigner.test.ts', () => {
    let res: string = btnDesigner({});

    it('Should return the default value', () => {
        expect(res).toContain("p__8");
    })

    it("should return values for top & bottom", () => {
        res = btnDesigner({
            padding: { y: 8 }
        });

        expect(res).toEqual("p__t--8 p__b--8 rounded__8");
    })

    it("should have values for all sides", () => {
        res = btnDesigner({
            padding: { y: 8, x: 12 }
        });

        expect(res).toEqual("p__l--12 p__r--12 p__t--8 p__b--8 rounded__8");
    })

    it("should return values for left & right", () => {
        res = btnDesigner({
            padding: { x: 12 },
            borderRadius: 4
        });

        expect(res).toEqual("p__l--12 p__r--12 rounded__4");
    })
})