describe('Contact Us Form Tests', function () {
  const url = 'http://webdriveruniversity.com/Contact-Us/contactus.html'

  beforeEach(() => {
    cy.visit(url)
  })

  // positive case
  it('submits form with max valid inputs', function () {
    cy.get('input[name="first_name"]').type('Harshdeep')
    cy.get('input[name="last_name"]').type('Chauhan')
    cy.get('input[name="email"]').type('harshdeep.chauhan@yopmail.com')
    cy.get('textarea[name="message"]').type('Hello, this is a test message.')
    cy.get('input[type="submit"]').click()
    // verify successful submission
    cy.xpath('//div[@id="contact_reply"]/descendant::h1[contains(text(),"Thank You")]').should('be.visible')
    /*
    alternatively we can use a simpler Xpath
    cy.xpath('//div[@id="contact_reply"]/descendant::h1').should('contain', 'Thank You')
     */
  })

  // positive case
  it('submits form with min valid inputs', function () {
    cy.get('input[name="first_name"]').type('Harshdeep')
    cy.get('input[name="last_name"]').type('Chauhan')
    cy.get('input[name="email"]').type('harshdeep.chauhan@yopmail.com')
    cy.get('input[type="submit"]').click()
    // verify successful submission
    cy.xpath('//div[@id="contact_reply"]/descendant::h1[contains(text(),"Thank You")]').should('be.visible')
  })
  /*
  Note: The above test case will always fail as there is a bug - the comment box is a mandatory field
  */

  // negative case - missing first_name
  it('submits form with missing inputs', function () {
    cy.get('input[name="last_name"]').type('Chauhan')
    cy.get('input[name="email"]').type('harshdeep.chauhan@yopmail.com')
    // adding the following step after confirming the existence of bug from postiive case #2
    cy.get('textarea[name="message"]').type('Hello, this is a test message.')
    cy.get('input[type="submit"]').click()
    // verify unsuccessful submission
    cy.xpath('//body//text()[contains(.,"Error")]').then(function ($el) {
      expect($el.text().toLowerCase()).to.contain('all fields are required')
    })
  })
  // negative case - invalid first_name
  it('submits form with invalid first_name', function () {
    cy.get('input[name="first_name"]').type('H')
    cy.get('input[name="last_name"]').type('Chauhan')
    cy.get('input[name="email"]').type('harshdeep.chauhan@yopmail.com')
    // adding the following step after confirming the existence of bug from postiive case #2
    cy.get('textarea[name="message"]').type('Hello, this is a test message.')
    cy.get('input[type="submit"]').click()
    // verify unsuccessful submission
    cy.xpath('//body//text()[contains(.,"Error")]').should('be.visible')
    /*
  Note: The above test case will always fail as there is a bug
  */
  })
  // negative case - invalid first_name
  it('submits form with invalid first_name', function () {
    cy.get('input[name="first_name"]').type('ABCDEFGHIJKLMNOPQRSTUVWXYZ1')
    cy.get('input[name="last_name"]').type('Chauhan')
    cy.get('input[name="email"]').type('harshdeep.chauhan@yopmail.com')
    // adding the following step after confirming the existence of bug from postiive case #2
    cy.get('textarea[name="message"]').type('Hello, this is a test message.')
    cy.get('input[type="submit"]').click()
    // verify unsuccessful submission
    cy.xpath('//body//text()[contains(.,"Error")]').should('be.visible')

    // Note: The above test case will always fail as there is a bug
  })

  // negative case - missing last_name
  it('submits form with missing inputs', function () {
    cy.get('input[name="first_name"]').type('Harshdeep')
    cy.get('input[name="email"]').type('harshdeep.chauhan@yopmail.com')
    // adding the following step after confirming the existence of bug from postiive case #2
    cy.get('textarea[name="message"]').type('Hello, this is a test message.')
    cy.get('input[type="submit"]').click()
    // verify unsuccessful submission
    cy.xpath('//body//text()[contains(.,"Error")]').then(function ($el) {
      expect($el.text().toLowerCase()).to.contain('all fields are required')
    })
  })
  // negative case - invalid last_name
  it('submits form with invalid last_name', function () {
    cy.get('input[name="first_name"]').type('Harshdeep')
    cy.get('input[name="last_name"]').type('C')
    cy.get('input[name="email"]').type('harshdeep.chauhan@yopmail.com')
    // adding the following step after confirming the existence of bug from postiive case #2
    cy.get('textarea[name="message"]').type('Hello, this is a test message.')
    cy.get('input[type="submit"]').click()
    // verify unsuccessful submission
    cy.xpath('//body//text()[contains(.,"Error")]').should('be.visible')
    // Note: The above test case will always fail as there is a bug
  })
  // negative case - invalid last_name
  it('submits form with invalid last_name', function () {
    cy.get('input[name="first_name"]').type('Harshdeep')
    cy.get('input[name="last_name"]').type('ABCDEFGHIJKLMNOPQRSTUVWXYZ1')
    cy.get('input[name="email"]').type('harshdeep.chauhan@yopmail.com')
    // adding the following step after confirming the existence of bug from postiive case #2
    cy.get('textarea[name="message"]').type('Hello, this is a test message.')
    cy.get('input[type="submit"]').click()
    // verify unsuccessful submission
    cy.xpath('//body//text()[contains(.,"Error")]').should('be.visible')
    // Note: The above test case will always fail as there is a bug
  })

  // negative case - missing email
  it('submits form with missing inputs', function () {
    cy.get('input[name="first_name"]').type('Harshdeep')
    cy.get('input[name="last_name"]').type('Chauhan')
    // adding the following step after confirming the existence of bug from postiive case #2
    cy.get('textarea[name="message"]').type('Hello, this is a test message.')
    cy.get('input[type="submit"]').click()
    // verify unsuccessful submission
    cy.xpath('//body//text()[contains(.,"Error")]').then(function ($el) {
      expect($el.text().toLowerCase()).to.contain('invalid email address')
      expect($el.text().toLowerCase()).to.contain('all fields are required')
    })
  })
  // negative case - first international validation for email
  it('shows error for invalid email - missing "@" symbol', function () {
    cy.get('input[name="first_name"]').type('Harshdeep')
    cy.get('input[name="last_name"]').type('Chauhan')
    cy.get('input[name="email"]').type('harshdeep.chauhan.com') // Invalid email
    // adding the following step after confirming the existence of bug from postiive case #2
    cy.get('textarea[name="message"]').type('Hello, this is a test message.')
    cy.get('input[type="submit"]').click()
    // verify error message for invalid email
    cy.xpath('//body//text()[contains(.,"Error")]').then(function ($el) {
      expect($el.text().toLowerCase()).to.contain('invalid email address')
    })
  })
  // negative case - second international validation for email
  it('shows error for invalid email - missing domain', function () {
    cy.get('input[name="first_name"]').type('Harshdeep')
    cy.get('input[name="last_name"]').type('Chauhan')
    cy.get('input[name="email"]').type('harshdeep@') // Invalid email
    // adding the following step after confirming the existence of bug from postiive case #2
    cy.get('textarea[name="message"]').type('Hello, this is a test message.')
    cy.get('input[type="submit"]').click()
    // verify error message for invalid email
    cy.xpath('//body//text()[contains(.,"Error")]').then(function ($el) {
      expect($el.text().toLowerCase()).to.contain('invalid email address')
    })
  })
})
