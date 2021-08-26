describe('kumpulan1', function(){
    it ('LOGIN', function(){
        cy.URL()

        //LOGIN
        cy.get('#login2').click()
        cy.wait(2000)
        cy.get('#loginusername').type('FELIXTHECAT20')
        cy.get('#loginpassword').type('test123')
        cy.wait(1000)
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(5000)
        cy.contains('Welcome FELIXTHECAT20')
        cy.get('#nameofuser').should('have.text','Welcome FELIXTHECAT20')   //ASSERT
    })

    
})