describe('TEST 6', function() {
    it('LOGIN', function() {
    cy.visit('https://admin.pkh.dojobox.id/')
    cy.get('#input-email').type('e@dojobox.id')
    cy.get('#input-password').type('admin')
    cy.get('#btn-login').click()
    cy.get('.mr-2 > b').should('have.text','Super Admin')

    cy.get('#dataTable_filter > label > .form-control').type('kucing20@mail.com') ////////////----------
    cy.wait(2000)
    cy.get('.odd > :nth-child(3)').should('have.text','kucing20@mail.com')      ////////////////------------
    cy.get('.btn-group > .btn > .fas').click()
    cy.get('[href="facilitator/detail/248"]').click()    
    
    cy.get('#user_email').should('have.text','kucing20@mail.com')               ////////////////------------
    cy.get('#user_is_active > .badge').should('exist')
    cy.get('#user_province_name').should('have.text','ACEH').should('exist')
    cy.get('#user_city_name').should('have.text','KAB. ACEH SELATAN').should('exist')
    cy.get('#user_subdistrict_name').should('have.text','Bakongan').should('exist')
    cy.get('#user_address').should('exist')
    cy.get('.alert').should('exist').should('have.text','Alamat penugasan diatur sama dengan alamat domisili fasilitator')
    cy.get('#user_province_name').should('have.text','ACEH').should('exist')
    cy.get('#user_city_name').should('have.text','KAB. ACEH SELATAN').should('exist')
    cy.get('#user_subdistrict_name').should('have.text','Bakongan').should('exist')
    })
})  