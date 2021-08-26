describe('kumpulan1', function(){
    it ('LOGIN', function(){
    cy.URL()
    
    cy.visit('https://demoblaze.com/')
    cy.get('#signin2').click()
    cy.wait(1000)
    cy.get('#sign-username').type('REGISTERBARU4')
    cy.get('#sign-password').type('test123')
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.wait(1000)
    })
    
})