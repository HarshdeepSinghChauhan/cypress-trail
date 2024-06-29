describe('Read and Write Operations', function () {
  beforeEach(function () {
    cy.fixture('example.json').as('testData')
  })

  it('should read data from a fixture', function () {
    // Test code for reading data from a fixture
    cy.get('@testData').then(function (data) {
      cy.log(data.name)
      cy.log(data)
    })
    cy.log(this.testData)
    cy.log(this.testData.name)
    cy.get('@testData')
      .its('name')
      .should('eq', 'Using fixtures to represent data')
  })

  it('should read file using the readFile function', function () {
    // Test code for reading file using the readFile function
    cy.readFile('cypress/fixtures/example.json').then(function (data) {
      cy.log(data.name)
    })
  })

  it('should write data onto a file', function () {
    // Test code for writing data onto a file
    cy.writeFile('test_output', 'Hello I am Harsh! ')
    cy.writeFile('test_output', 'I am learning Cypress here.', { flag: 'a+' }) // Appending data
  })
})
