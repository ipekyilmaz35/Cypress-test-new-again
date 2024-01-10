describe('SDEP-5657-1 Test Scenario', () => {
  it('User Opens Google page, types "dog", waits for response, and clicks the first link', () => {

    // 1. User Opens Google page
    cy.visit('https://www.google.com')

    // 2. Type "dog" in google input
    cy.visit('https://www.google.com');
    // As Kanchan recommended, I typed here in 2 lines below:
    cy.get('#APjFqb').type('dog');
    cy.get('#APjFqb').type('{enter}');
    
     // Wait for response from Google. Just example seconds
     cy.wait(10000) 

    // 4. Click on the first link provided by Google page. 
    // As Iga recommended I used Cypress locator feature in here.
    cy.get(':nth-child(1) > .MjjYud > .g > .srKDX > .jGGQ5e > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').click();
  })
})

