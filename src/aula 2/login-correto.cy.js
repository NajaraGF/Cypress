describe('Página de login', () => {

  beforeEach(() => {
      cy.visit ('http://3076-cypress-alurapic-front.vercel.app')
  })

      it('Preencher os campos de login corretamente para realizar login', () => {
      cy.login('nome', 'senha')
      })

})



  //cy.visit('https://3076-cypress-alurapic-front.vercel.app/')