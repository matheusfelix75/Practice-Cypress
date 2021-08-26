//CUSTOM COMMAND
Cypress.Commands.add('FungsiBukaURL',() => {
    cy.visit('wwww.bukalapak.com')
    })


Cypress.Commands.add('URL',() => {
    cy.visit('https://demoblaze.com/')
    cy.get('#nava').should('have.id','nava')
    })


Cypress.Commands.add('LOGIN',() => {
        cy.visit('https://demoblaze.com/')
        cy.get('#login2').click()
        cy.wait(2000)
        cy.get('#loginusername').type('FELIXTHECAT10')
        cy.get('#loginpassword').type('test123')
        cy.wait(1000)
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(5000)
        cy.get('#nameofuser').should('have.text','Welcome FELIXTHECAT10')   //ASSERT
    })
