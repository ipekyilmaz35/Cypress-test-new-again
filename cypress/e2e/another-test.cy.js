describe('SDEP-5657-2 Test Scenario', () => {
  it('User clicks on the second link provided by Google search', () => {
    // 1. User Opens Google page
    cy.visit('https://www.google.com')

    //Google terms:
    cy.get('#L2AGLb > div').click();
    
    // 2. Type "dog" in google input
    cy.visit('https://www.google.com');
    cy.get('#APjFqb').type('dog').type('{enter}');

     // 3. Wait some seconds for search results to load
     cy.wait(15000); 

    // 4. Click on the second link provided by Google page. 
    // As Iga recommended I used Cypress locator feature in here.
    cy.get(':nth-child(3) > .g > .srKDX > .jGGQ5e > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').click()
  })
})