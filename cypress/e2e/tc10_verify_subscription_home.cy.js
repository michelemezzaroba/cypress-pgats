describe('Test Case 10: Verify Subscription in Home Page', () => {

  const EMAIL = 'teste_subscribe@example.com'

  it('Should verify subscription functionality in home page', () => {

    cy.visit('http://automationexercise.com')
    cy.url().should('include', 'automationexercise.com')
    cy.get('body').should('be.visible')
    cy.scrollTo('bottom')
    cy.contains('Subscription', { matchCase: false }).should('be.visible')
    cy.get('#susbscribe_email').type(EMAIL)
    cy.get('#subscribe').click()
    cy.contains('You have been successfully subscribed!').should('be.visible')
  })
})