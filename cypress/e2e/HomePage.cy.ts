describe("HomePage.cy.ts", () => {
    beforeEach(() => {
        cy.visit("/");
    })

    it("should ensure the page works", () => {
        for(const element of [
            "hero__title",
            "hero__subtitle",
            "home__page__header"
        ])
            cy.get(`[data-test-id=${element}]`).should("exist");

        cy.get("button[data-test-id='calculator__cta']").should("exist").and("be.visible");
    })
})