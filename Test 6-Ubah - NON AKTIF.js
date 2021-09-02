describe('TEST 6', function() {
    it('LOGIN', function() {
    cy.visit('https://admin.pkh.dojobox.id/')
    cy.get('#input-email').type('e@dojobox.id')
    cy.get('#input-password').type('admin')
    cy.get('#btn-login').click()
    cy.get('.mr-2 > b').should('have.text','Super Admin')
    
    cy.get(':nth-child(2) > .dt-center > .btn-group > .btn > .fas').click()
    cy.get('[href="facilitator/edit/6"]').contains('Ubah').click()    
    
    cy.get('#user_is_active').select('Nonaktif') 
    cy.get('#edit').click()
    cy.get('#modal-title').should('have.text','Success')
    cy.get('#modal-body').should('have.text','Perubahan fasilitator berhasil diproses')
    cy.wait(1000)
    cy.get('#generalModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    cy.get('#accordionSidebar > :nth-child(1) > .nav-link').click()
    cy.get('.mr-2 > b').should('have.text','Super Admin')
    })
})  