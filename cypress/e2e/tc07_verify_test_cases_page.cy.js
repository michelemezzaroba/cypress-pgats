describe('Test Case 7: Verify Test Cases Page', () => {

  it('Should navigate to Test Cases page successfully', () => {

    cy.visit('http://automationexercise.com')
    cy.url().should('include', 'automationexercise.com')
    cy.get('body').should('be.visible')
    cy.contains('Test Cases').click()
    cy.url().should('include', '/test_cases')
    cy.contains('Test Cases').should('be.visible')
  })
})