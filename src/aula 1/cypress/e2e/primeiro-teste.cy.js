describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.ap')
      cy.contains('a', 'Register now').click();
      cy.get('[data-test="regiter"]').click
      cy.get('input[formcontrolname="email"]').type('lllll@lll.com');
      cy.get('input[formcontrolname="fullName"]').type('Lllll Lllll');
      cy.get('input[formcontrolname="userName"]').type('lllllllll');
      cy.get('input[formcontrolname="password"]').type('LllllLllll');
      cy.contains('button', 'Register').click();
    })
  })