describe('Test Case 5: Register User with existing email', () => {

  const USER_NAME = 'QA'
  const USER_EMAIL = 'teste-michele@uorak.com'

  it('Should display error when trying to register with an existing email', () => {

    cy.visit('http://automationexercise.com')
    cy.url().should('include', 'automationexercise.com')
    cy.get('body').should('be.visible')
    cy.contains('Signup / Login').click()
    cy.contains('New User Signup!').should('be.visible')
    cy.get('input[data-qa="signup-name"]').type(USER_NAME)
    cy.get('input[data-qa="signup-email"]').type(USER_EMAIL)
    cy.get('button[data-qa="signup-button"]').click()
    cy.contains('Email Address already exist!').should('be.visible')
  })
})