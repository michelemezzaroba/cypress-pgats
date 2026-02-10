describe('Test Case 15: Place Order - Register before Checkout', () => {

  const USER_NAME = 'UsuarioTeste'
  const USER_EMAIL = 'usuarioqa15@uorak.com'
  const PASSWORD = 'Senha.123'
  const FIRST_NAME = 'Usuario'
  const LAST_NAME = 'Teste'
  const ADDRESS = 'Rua Teste, 123'
  const COUNTRY = 'Canada'
  const STATE = 'Ontario'
  const CITY = 'Toronto'
  const ZIPCODE = 'M4B1B3'
  const MOBILE_NUMBER = '1234567890'
  const CARD_NAME = 'Usuario Teste'
  const CARD_NUMBER = '4111111111111111'
  const CVC = '123'
  const EXPIRY_MONTH = '12'
  const EXPIRY_YEAR = '2025'
  const ORDER_COMMENT = 'Por favor, entregar entre 9h e 18h'

  it('Should place order after registering', () => {

    cy.visit('http://automationexercise.com')
    cy.url().should('include', 'automationexercise.com')
    cy.get('body').should('be.visible')
    cy.contains('Signup / Login').click()
    cy.get('input[data-qa="signup-name"]').type(USER_NAME)
    cy.get('input[data-qa="signup-email"]').type(USER_EMAIL)
    cy.get('button[data-qa="signup-button"]').click()
    cy.get('#id_gender1').check() 
    cy.get('#password').type(PASSWORD)
    cy.get('#days').select('10')
    cy.get('#months').select('May')
    cy.get('#years').select('1990')
    cy.get('#first_name').type(FIRST_NAME)
    cy.get('#last_name').type(LAST_NAME)
    cy.get('#address1').type(ADDRESS)
    cy.get('#country').select(COUNTRY)
    cy.get('#state').type(STATE)
    cy.get('#city').type(CITY)
    cy.get('#zipcode').type(ZIPCODE)
    cy.get('#mobile_number').type(MOBILE_NUMBER)
    cy.get('button[data-qa="create-account"]').click()
    cy.contains('Account Created!').should('be.visible')
    cy.get('a[data-qa="continue-button"]').click()
    cy.contains(`Logged in as ${USER_NAME}`).should('be.visible')
    cy.get('.features_items .col-sm-4').first().contains('Add to cart').click()
    cy.wait(1000)
    cy.get('.modal-content').contains('Continue Shopping').click()
    cy.contains('Cart').click()
    cy.url().should('include', '/view_cart')
    cy.contains('Shopping Cart').should('be.visible')
    cy.contains('Proceed To Checkout').click()
    cy.contains('Address Details').should('be.visible')
    cy.contains('Review Your Order').should('be.visible')
    cy.get('textarea[name="message"]').type(ORDER_COMMENT)
    cy.contains('Place Order').click()
    cy.get('input[name="name_on_card"]').type(CARD_NAME)
    cy.get('input[name="card_number"]').type(CARD_NUMBER)
    cy.get('input[name="cvc"]').type(CVC)
    cy.get('input[name="expiry_month"]').type(EXPIRY_MONTH)
    cy.get('input[name="expiry_year"]').type(EXPIRY_YEAR)
    cy.get('#submit').click()
    cy.contains('Congratulations! Your order has been confirmed!', { timeout: 10000 }).should('be.visible')
    cy.contains('Delete Account').click()
    cy.contains('Account Deleted!').should('be.visible')
    cy.get('a[data-qa="continue-button"]').click()
  })
})