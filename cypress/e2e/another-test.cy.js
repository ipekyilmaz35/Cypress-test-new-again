describe('SDEP-5657-2 Test Scenario', () => {
  it('User clicks on the second link provided by Google search', () => {
    // 1. User Opens Google page
    cy.visit('/');

    //Google terms:
    cy.get('#L2AGLb > div').click();
    
    // 2. Type "dog" in google input
    cy.visit('/');
    cy.get('#APjFqb').type('dog').type('{enter}');

    // 3. Wait some seconds for search results to load
    cy.wait(5000); 

    // 4. Click on the second link provided by Google page. 
    cy.contains('Dog Niemiecki - Encyklopedia Ras Psów').click({force: true});
})
})