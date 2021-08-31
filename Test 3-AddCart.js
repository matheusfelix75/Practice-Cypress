describe('kumpulan1', function(){
    it ('ADD-CHART', function(){
        cy.LOGIN()

        //ADD CART
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
        cy.wait(2000)
        cy.get('#nameofuser').should('have.text','Welcome FELIXTHECAT10')   //ASSERT
        cy.get('.name').should('have.text','Samsung galaxy s6') //ASSERT
        cy.get('.col-sm-12 > .btn').click()
        cy.wait(2000)
        cy.get(':nth-child(4) > .nav-link').click()
        cy.wait(2000)
        cy.get('.success > :nth-child(2)').should('have.text','Samsung galaxy s6') //ASSERT
        cy.get('#nameofuser').should('have.text','Welcome FELIXTHECAT10')   //ASSERT
        cy.get('.col-lg-1 > .btn').click()
        cy.wait(1000)
        cy.get('#name').type('FELIXTHECAT')
        cy.get('#country').type('INDIA')
        cy.get('#city').type('MUMBAI')
        cy.get('#card').type('123456')
        cy.get('#month').type('JUNE')
        cy.get('#year').type('2012')
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(5000)
        cy.get('.sweet-alert > h2').should('have.text','Thank you for your purchase!')
        cy.get('.lead').should('be.visible') //ASSERT
        cy.get('.confirm').click()
        cy.wait(6000)
        cy.get('#nameofuser').should('have.text','Welcome FELIXTHECAT10')   //ASSERT

        })
})
