describe('Página de login', () => {

    beforeEach(() => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/')
    })

        it('Deve preencher os campos do formulário corretamente e realizar login', () => {
            cy.login('carowl', '12345678')
            })

})