describe('Learning Cypress Assertions', function () {
  it('will show different assertions and use cases', function () {
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    // Implicit assertions
    cy.contains('.query-btn.btn.btn-primary', 'Button')
    cy.get('#query-btn').contains(/button/i) // Using regex to match the text in the element
    cy.get('#query-btn').should('have.id', 'query-btn').should('be.visible')
    // Explicit assertions
    expect(true).to.not.equal(false)
    assert.notDeepEqual(4, '4')
  })
})
