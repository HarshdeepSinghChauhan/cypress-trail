import { Login } from './pages/login-page'
const login = new Login()

describe('POM Demonstration for Login', function () {
  beforeEach(function () {
    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    )
  })
  it('should allow a user to log in with correct credentials', function () {
    // User login
    login.enterUsername('Admin')
    login.enterPwd('admin123')
    login.submit()
    // Verifying login
    cy.xpath("//img[@class='oxd-userdropdown-img']").then(function ($img) {
      expect($img.is(':visible'), 'Successful User Login').to.be.true
    })
  })
  it('should not allow a user to log in with incorrect credentials', function () {
    // User login
    login.enterUsername('Admin')
    login.enterPwd('Admin123')
    login.submit()
    // Verifying login
    cy.xpath("//img[@class='oxd-userdropdown-img']").should('not.exist')
  })
})
