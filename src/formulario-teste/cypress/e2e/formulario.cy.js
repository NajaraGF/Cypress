describe('Página de formulario', () => {
  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
      cy.contains('Enviar').click();
  cy.get('[name="nome"]').type('Najara Guiland Ferraz')
  cy.get('[name="email"]').type('najaguiland@email.com.br')
  cy.get('[name="telefone"]').type('1198462-0000')
  cy.get('[name="mensagem"]').type('Olá, meu nome é najara e gostaria solicitar o cadastro.')
  cy.contains('Enviar').click();
  cy.log();
  })
})