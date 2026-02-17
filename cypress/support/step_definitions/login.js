import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que eu acesso a página de login", () => {
  cy.visit("https://www.saucedemo.com/");
});

When("eu insiro usuário e senha válidos", () => {
  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
});

Then("devo ver a página de produtos", () => {
  cy.url().should("include", "/inventory.html");
  cy.get(".title").should("have.text", "Products");
});
