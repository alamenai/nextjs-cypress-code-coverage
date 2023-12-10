import { Button } from "./Button";

describe("Button Testing", () => {
  it("should contain Test Me text", () => {
    const TestButton = () => <Button>Test Me</Button>;
    cy.mount(<TestButton />);
    cy.get("[data-cy='cy-button']").should("have.text", "Test Me");
  });
});
