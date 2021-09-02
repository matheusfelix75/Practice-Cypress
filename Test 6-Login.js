describe('TEST 6', function() {
    it('LOGIN', function() {
    cy.visit('https://admin.pkh.dojobox.id/')
    cy.get('#input-email').type('e@dojobox.id')
    cy.get('#input-password').type('admin')
    cy.get('#btn-login').click()
    cy.get('.mr-2 > b').should('have.text','Super Admin')
    })
})  