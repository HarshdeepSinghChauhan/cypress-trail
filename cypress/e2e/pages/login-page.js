export class Login {
  // Objects|Locators
  username = "//input[@placeholder='Username']"
  password = "//input[@placeholder='Password']"
  loginBtn = "//button[@type='submit']"

  enterUsername (username) {
    cy.xpath(this.username).type(username)
  }

  enterPwd (pwd) {
    cy.xpath(this.password).type(pwd)
  }

  submit () {
    cy.xpath(this.loginBtn).click()
  }
}
