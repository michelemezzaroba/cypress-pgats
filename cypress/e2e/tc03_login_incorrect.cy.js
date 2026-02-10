describe('Test Case 3: Login User with incorrect email and password', () => {
  
  it('Should show error message when login with incorrect credentials', () => {
 
    cy.visit('http://automationexercise.com')
    cy.url().should('include', 'automationexercise.com')
    cy.get('body').should('be.visible')
    cy.contains('Signup / Login').click()
    cy.contains('Login to your account').should('be.visible')
    cy.get('input[data-qa="login-email"]').type('usuario_incorreto@example.com')
    cy.get('input[data-qa="login-password"]').type('senha_errada')
    cy.get('button[data-qa="login-button"]').click()
    cy.contains('Your email or password is incorrect!').should('be.visible')
  })
})