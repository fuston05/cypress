import * as login from "./login/all"

describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.intercept('get', '**/api').as('getRequest')
    })

    it('should display the login form', () => {
        cy.get('[data-test="username"]').should('be.visible')
        cy.get('[data-test="password"]').should('be.visible') 
        cy.get('[data-test="login-button"]').should('be.visible')  
    })
})