describe('Alurapic', () => {
    it('Dados da API', () => {
      cy.request({
        metohd:'POST',
        url:'https://3076-cypress-alurapic-front.vercel.app/',
        body: Cypress.env()
      }).then((res)=> {
        expect(res.status).to.be.equal(200)
        expect(res.body).is.not.empty
        expect(res.body).to.rave.property('id')
        expect(res.body.id).to.be.equal(338)

      })
      
    })
  })