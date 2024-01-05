describe('SDEP-5657-1 Test Scenario', () => {
  it('User Opens Google page, types "dog", waits for response, and clicks the first link', () => {
    // 1. User Opens Google page
    cy.visit('https://www.google.com')

    // 2. Type "dog" in google input
    cy.get('input[name="q"]').type('dog').type('{enter}')

    // 3. (Waits for response from Google) - Cypress by default waits for the next command to run

    // 4. Click on the first link provided by Google page. (This code selects the first "a" link inside the "h3" headers to click on the first link from the results of a Google search.)
    cy.get('h3 a').first().click()
  })
})