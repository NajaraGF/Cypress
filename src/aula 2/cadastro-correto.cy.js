  describe('Página de cadastro', () => {
    it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    cy.contains('a','Register now').click();
    cy.get('[data-test="email"]').type('najaguiland@email.com.br')
    cy.get('[data-test="fullName"]').type('Najara Guiland Ferraz')
    cy.get('[data-test="registerUserName"]').type('najaragf')
    cy.get('[data-test="registerPassword"]').type('Nah280484')
    cy.contains('button','Register').click();
    cy.log();
   })
 })

