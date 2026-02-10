describe('Test Case 4: Logout User', () => {

  const email = 'teste-michele@uorak.com'
  const password = 'Senha.123'

  it('Should logout successfully and redirect to login page', () => {

    cy.visit('http://automationexercise.com')
    cy.url().should('include', 'automationexercise.com')
    cy.get('body').should('be.visible')
    cy.contains('Signup / Login').click()
    cy.contains('Login to your account').should('be.visible')
    cy.get('input[data-qa="login-email"]').type(email)
    cy.get('input[data-qa="login-password"]').type(password)
    cy.get('button[data-qa="login-button"]').click()
    cy.contains('Logged in as').should('be.visible')
    cy.contains('Logout').click()
    cy.url().should('include', '/login')
    cy.contains('Login to your account').should('be.visible')
  })
})