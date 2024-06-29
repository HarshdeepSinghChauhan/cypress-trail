describe('File Upload and Download Operations', function () {
  it('should upload a file onto a website', function () {
    cy.visit('https://trytestingthis.netlify.app/')
    // Uploading the example.json file
    cy.xpath("//input[@id='myfile']").attachFile('example.json')
    // Downloading a sample image
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg', 'mydownloads', 'example.jpg')
  })
})
