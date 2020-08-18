describe("Tests Form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })
    it("tests the flow", () => {
        cy.get("[data-cy=order]").click();
        cy.get("[data-cy=name]").type("Kyla").should("have.value", "Kyla");
        cy.get("[data-cy=email]").type("test@email.com").should("have.value", "test@email.com");
        cy.get("[data-cy=instructions]").type("Call when ready").should("have.value", "Call when ready");
        cy.get("[data-cy=size]").select("Medium").should("have.value", "Medium");
        cy.get("[data-cy=pepperoni]").click().should("be.checked");
        cy.get("[data-cy=sausage]").click().should("be.checked");
        cy.get("[data-cy=mushroom]").click().should("be.checked");
        cy.get("[data-cy=olives]").click().should("be.checked");
        cy.get("[data-cy=peppers]").click().should("be.checked");
        cy.get("[data-cy=pineapple]").click().should("be.checked");
        cy.get("[data-cy=artichokes]").click().should("be.checked");
        cy.get("[data-cy=anchovies]").click().should("be.checked");
        cy.get("[data-cy=cheese]").click().should("be.checked");
        cy.get("[data-cy=seasoning]").click().should("be.checked");
        cy.get("[data-cy=terms").check();
        cy.get("[data-cy=submit]").click();
    })
})