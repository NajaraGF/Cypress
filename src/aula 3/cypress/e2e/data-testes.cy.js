import Cadastro from "../support/pages/cadastro/pagina-cadastro"

describe('Página de cadastro', () => {

    beforeEach(() => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/')
    })

    it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {

      // cy.get('[data-test="register"]').click();
      // cy.get('input[data-test="email"]').type('lllll@lll.com');
      // cy.get('input[data-test="fullName"]').type('Lllll Lllll');
      // cy.get('input[data-test="registerUserName"]').type('lllllllll');
      // cy.get('input[data-test="registerPassword"]').type('LllllLllll');
      // cy.get('[data-test="btnRegister"]').click();
      Cadastro.acessarPaginaDeCadastro();
      Cadastro.preencherFormulario();
      Cadastro.submeterCadastro()

    })
  })