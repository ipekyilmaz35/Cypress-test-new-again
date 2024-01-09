describe('SDEP-5657-1 Test Scenario', () => {
  it('User Opens Google page, types "dog", waits for response, and clicks the first link', () => {
    // 1. User Opens Google page
    cy.visit('https://www.google.com')

    // 2. Type "dog" in google input
    cy.get('#searchInput').type('dog');
    cy.get('#searchInput').type('{enter}');
    
     // Wait for response from Google. Just example seconds
     cy.wait(3000) 

    // 4. Click on the first link provided by Google page. (This code selects the first "a" link inside the "h3" headers to click on the first link from the results of a Google search.)
    cy.get('h3 > a').first().click()
  })
})