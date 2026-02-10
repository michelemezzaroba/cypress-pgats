describe('TC01 - Register User (AutomationExercise)', () => {

  const name = 'QA'
  const uniqueEmail = `teste+${Date.now()}@uorak.com`
  const password = 'Senha.123'
  const firstName = 'QA'
  const lastName = 'QA'
  const company = 'QA'
  const address1 = 'Rua Exemplo, 123'
  const address2 = 'Apto 45'
  const country = 'Canada' 
  const state = 'SP'
  const city = 'São Paulo'
  const zipcode = '01000-000'
  const mobileNumber = '+5511999999999'

  it('should register a new user, verify login and delete account', () => {
    cy.visit('/')
    cy.get('header').should('be.visible')
    cy.contains('Signup / Login').click()
    cy.contains('New User Signup!').should('be.visible')
    cy.get('input[data-qa="signup-name"]').type(name)
    cy.get('input[data-qa="signup-email"]').type(uniqueEmail)
    cy.get('button[data-qa="signup-button"]').click()
    cy.contains(/enter account information/i).should('be.visible')
    cy.get('#id_gender1').check({ force: true })
    cy.get('#password').type(password)
    cy.get('select#days').select('10') 
    cy.get('select#months').select('May')
    cy.get('select#years').select('1990')
    cy.get('#newsletter').check({ force: true })
    cy.get('#optin').check({ force: true })
    cy.get('#first_name').type(firstName)
    cy.get('#last_name').type(lastName)
    cy.get('#company').type(company)
    cy.get('#address1').type(address1)
    cy.get('#address2').type(address2)
    cy.get('select#country').select(country)
    cy.get('#state').type(state)
    cy.get('#city').type(city)
    cy.get('#zipcode').type(zipcode)
    cy.get('#mobile_number').type(mobileNumber)
    cy.get('button[data-qa="create-account"]').click()
    cy.contains(/account created/i, { timeout: 10000 }).should('be.visible')

    cy.contains('Continue').then($btn => {
      cy.wrap($btn).click({ force: true })
    })

    cy.url({ timeout: 10000 }).should('include', '/')
    cy.contains(new RegExp(`Logged in as ${name}`, 'i')).should('be.visible')
    cy.contains('Delete Account').click()
    cy.contains(/account deleted/i, { timeout: 10000 }).should('be.visible')
    cy.contains('Continue').click({ force: true })
  })
})