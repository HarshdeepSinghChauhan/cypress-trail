// This is my first test case in Cypress
describe('Google Search Test', function () {
  // Test Case 1
  it('should search on google', function () {
    cy.visit('https://www.google.com')
    cy.get('#APjFqb').type('automation step by step {Enter}')
  })
})
