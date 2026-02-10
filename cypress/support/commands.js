
Cypress.Commands.add('visitHome', () => {
  cy.visit('/')
  cy.get('header').should('be.visible')
})

Cypress.Commands.add('submitContactForm', ({name, email, subject, message}) => {
  cy.get('input[data-qa="name"]').type(name)
  cy.get('input[data-qa="email"]').type(email)
  cy.get('input[data-qa="subject"]').type(subject)
  cy.get('textarea[data-qa="message"]').type(message)
  cy.get('input[name="submit"]').click()
})