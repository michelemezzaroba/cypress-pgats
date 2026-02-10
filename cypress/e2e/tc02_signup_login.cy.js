describe('TC02 - Login User with correct email and password', () => {
  
  const existingEmail = 'teste-michele@uorak.com'
  const password = 'Senha.123'
  const username = 'QA'

  it('should login successfully and delete the account', () => {
    cy.visit('/')
    cy.get('header').should('be.visible')
    cy.contains('Signup / Login').click()
    cy.contains('Login to your account').should('be.visible')
    cy.get('input[data-qa="login-email"]').type(existingEmail)
    cy.get('input[data-qa="login-password"]').type(password)
    cy.get('button[data-qa="login-button"]').click()
    cy.wait(3000)
    cy.get(':nth-child(10) > a').should('be.visible').contains(username)
  })
})