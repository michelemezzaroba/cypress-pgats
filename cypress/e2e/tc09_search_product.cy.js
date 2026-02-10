describe('Test Case 9: Search Product', () => {

  const PRODUCT_NAME = 'Tshirt'

  it('Should search for a product and display related results', () => {

    cy.visit('http://automationexercise.com')
    cy.url().should('include', 'automationexercise.com')
    cy.get('body').should('be.visible')
    cy.contains('Products').click()
    cy.url().should('include', '/products')
    cy.contains('All Products').should('be.visible')
    cy.get('#search_product').type(PRODUCT_NAME)
    cy.get('#submit_search').click()
    cy.contains('Searched Products').should('be.visible')
    cy.get('.features_items .col-sm-4').should('be.visible')
    cy.get('.features_items .col-sm-4').should('have.length.greaterThan', 0)
  })
})