import { actions, assertions, selectors } from './all'

describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should display the login form', () => {
        cy.get('[data-test="username"]').should('be.visible')
        cy.get('[data-test="password"]').should('be.visible') 
        cy.get('[data-test="login-button"]').should('be.visible')  
    })
})