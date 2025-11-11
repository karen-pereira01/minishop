describe('Testes de Login do MiniShop', () => {


  beforeEach(() => {
    cy.visit('./html/index.html')
    cy.fixture('usuarios').its('usuarioInvalido').as('usuarioInvalido')
    cy.fixture('usuarios').its('usuarioValido').as('usuarioValido')
  })

  it('Verifica o titulo da aba da pagina', () => {
    cy.title().should('be.eq', 'MiniShop - Login')
  })

  it('Login com campos em branco', () => {
    cy.get('#username').clear()
    cy.get('#password').clear()
    cy.get('button[type=submit]').click()

    //assercao
    cy.get('div[role=alert]').should('be.visible')
  })

  it('Login com dados incorretos', () => {

    //login por comandos
    cy.get('@usuarioInvalido').then((usuario) => {
      cy.login(usuario)
    })
    

    //assercao
    cy.get('div[role=alert]').should('be.visible')
  })

  it('Login com dados corretos', () => {

    //login por comandos
    cy.get('@usuarioValido').then((usuario) => {
      cy.login(usuario)
    })

    //assercao
    cy.contains('button', 'Sair').should('exist')
    cy.title().should('be.eq', 'MiniShop - Home')
  })


})