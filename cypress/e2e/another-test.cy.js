describe('SDEP-5657-2 Test Scenario', () => {
  it('User clicks on the second link provided by Google search', () => {
    cy.visit('https://www.google.com')
    cy.get('input[name="q"]').type('dog').type('{enter}')
    
    // Wait for response from Google. Just example seconds
    cy.wait(2000) 

    // This code selects the second "a" link inside the "h3" headers to click on the second link from the results of the search on Google.
    cy.get('h3 a').eq(1).click()
  })
})