// describe('Alurapic', () => {
//     it('Dados da API', () => {
//       cy.request({
//         metohd:'POST',
//         url:'https://alurapic-api.onrender.com/user/login',
//         body: Cypress.env()
//       }).then((res)=> {
//         expect(res.status).to.be.equal(200)
//         expect(res.body).is.not.empty
//         expect(res.body).to.rave.property('id')
//         expect(res.body.id).to.be.equal(338)

//       })
      
//     })
//   })

describe('Buscar fotos e dados', () => {

      it('buscar fotos do usuário', () => {
        
        const tempoEsperado = Math.random() * 50;
  
          cy.request({
              method: 'GET' ,
              url: 'https://alurapic-api.onrender.com/najaragf/photos'
          }).then((res) => {
              expect(res.status).to.be.equal(200)
              expect(res.body).is.not.empty
              expect(res.body[0]).to.have.property('description')
              expect(res.body[0].description).to.be.equal('')
              expect(res.duration).to.be.lte(tempoEsperado)
          })
      })
  })
  
