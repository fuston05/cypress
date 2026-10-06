export const getPageTitle = (): Cypress.Chainable<JQuery<HTMLElement>> => cy.get(".login_logo")

export const getUserNameInput = (): Cypress.Chainable<JQuery<HTMLElement>> => cy.get('[data-test="username"]')

export const getPasswordInput = (): Cypress.Chainable<JQuery<HTMLElement>> => cy.get('[data-test="password"]')

export const getLoginButton = (): Cypress.Chainable<JQuery<HTMLElement>> => cy.get('[data-test="login-button"]')