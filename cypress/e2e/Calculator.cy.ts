import {GetRandomNumber} from "../../src/helpers/GetRandomNumber/GetRandomNumber";

describe("Calculator.cy.ts", () => {
    beforeEach(() => {
        cy.visit("/");
    })

    it("should ensure the calculator works", () => {
        cy.get("button[data-test-id='calculator__cta']").click();
        cy.get("[data-test-id='calculator__modal']").should("be.visible");

        for(const element of ["header", "footer"])
            cy.get(element).should("exist").and("not.be.empty");

        for(const inputId of ["start", "amount"])
            cy.get(`input[id=${inputId}]`).type(`${GetRandomNumber(999, -999)}`)

        const randomNumber = GetRandomNumber(2, 0);
        cy.get(`button[data-test-id=${randomNumber === 1 ? "add" : "subtract"}]`).click();

        cy.get("button[type=submit]").click();

        cy.get("div[data-test-id='calculator__answer']").should("be.visible")
            .find("h1").should("not.be.empty");

        cy.get(`button[data-test-id='close__modal']`).click();
    })
})