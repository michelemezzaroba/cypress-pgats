describe('Test Case 6: Contact Us Form', () => {

  const USER_NAME = 'QA'
  const USER_EMAIL = 'teste-michele@uorak.com'
  const SUBJECT = 'Dúvida sobre o site'
  const MESSAGE = 'Olá! Estou testando o envio de mensagem pelo formulário de contato.'
  const FILE_PATH = 'teste.png'

  it('Should submit contact form successfully', () => {

    cy.visit('http://automationexercise.com')
    cy.url().should('include', 'automationexercise.com')
    cy.get('body').should('be.visible')
    cy.contains('Contact us').click()
    cy.contains('Get In Touch').should('be.visible')
    cy.get('input[data-qa="name"]').type(USER_NAME)
    cy.get('input[data-qa="email"]').type(USER_EMAIL)
    cy.get('input[data-qa="subject"]').type(SUBJECT)
    cy.get('textarea[data-qa="message"]').type(MESSAGE)
    cy.get('input[name="upload_file"]').selectFile(`cypress/fixtures/${FILE_PATH}`)
    cy.get('input[data-qa="submit-button"]').click()

    cy.on('window:alert', (text) => {
      expect(text).to.contains('Press OK to proceed!')
    })

    cy.contains('Success! Your details have been submitted successfully.').should('be.visible')
    cy.contains('Home').click()
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('body').should('contain', 'AutomationExercise')
  })
})