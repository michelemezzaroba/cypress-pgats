describe('Test Case 8: Verify All Products and product detail page', () => {

  it('Should display all products and product details correctly', () => {

    cy.visit('http://automationexercise.com')
    cy.url().should('include', 'automationexercise.com')
    cy.get('body').should('be.visible')
    cy.contains('Products').click()
    cy.url().should('include', '/products')
    cy.contains('All Products').should('be.visible')
    cy.get('.features_items').should('be.visible') 
    cy.get('.features_items .col-sm-4').should('have.length.greaterThan', 0)
    cy.get('.features_items .col-sm-4').first().contains('View Product').click()
    cy.url().should('include', '/product_details/')
    cy.get('.product-information').should('be.visible')
    cy.get('.product-information h2').should('be.visible')  
    cy.get('.product-information p').contains('Category').should('be.visible')
    cy.get('.product-information span span').should('be.visible')    
    cy.get('.product-information p').contains('Availability').should('be.visible')
    cy.get('.product-information p').contains('Condition').should('be.visible')
    cy.get('.product-information p').contains('Brand').should('be.visible')
  })
})