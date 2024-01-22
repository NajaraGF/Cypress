const el = require('./elements').ELEMENTS;

class Cadastro {
    acessarPaginaDeCadastro() {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/');
        cy.get('[data-test="register"]').click();
    }
    
    preencherFormulario() {
        cy.get('input[data-test="email"]').type('najaguiland@gmail.com');
        cy.get('input[data-test="fullName"]').type('Lllll Lllll');
        cy.get('input[data-test="registerUserName"]').type('lllllllll');
        cy.get('input[data-test="registerPassword"]').type('LllllLllll');
    }

    submeterCadastro() {
        cy.get('[data-test="btnRegister"]').click();

    }
}

export default new Cadastro();
