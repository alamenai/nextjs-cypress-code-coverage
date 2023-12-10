describe("Home page E2E", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should contain Button component", () => {
    cy.get("[data-cy='cy-button']").should("exist");
  });
});
