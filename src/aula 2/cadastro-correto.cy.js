// describe('Página de cadastro', () => {
//   it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
//     cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
//     cy.contains('a','Register now').click();
//     cy.get('[data-test="email"]').type('najaguiland@email.com.br')
//     cy.get('[data-test="fullName"]').type('Najara Guiland Ferraz')
//     cy.get('[data-test="registerUserName"]').type('najaragf')
//     cy.get('[data-test="registerPassword"]').type('Nah280484')
//     cy.contains('button','Register').click();
//     cy.log();
//   })
// })


describe('Página de cadastro', () => {
  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('file:///C:/Users/najag.LAPTOP-4L06GP1P/AppData/Local/Temp/e0b9821e-9cb8-4267-a43e-b1f764ff70a5_formulario-teste.zip.0a5/formulario-teste/index.html')
    cy.contains('a','Register now').click();
    cy.get('[type="name"]').type('Najara Guiland Ferraz')
    cy.get('[type="email"]').type('najaguiland@gmail.com')
    cy.get('[type="tel"]').type('(11) 984616207)')
    cy.contains('[type="submit"]').click();
    cy.log();
  })
})