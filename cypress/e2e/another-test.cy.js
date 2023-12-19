describe('SDEP-5657-2 Test Scenario', () => {
    it('User clicks on the second link provided by Google search', () => {
      // This one is about when a user clicks on second link provided (not first)
      cy.visit('https://www.google.com')
      cy.get('input[name="q"]').type('dog').type('{enter}')
      
      // Wait for response from Google
      cy.wait(2000) // This is only an example waiting time
  
      // User clicks on the second link provided by Google search (not the first)
      cy.get('h3').eq(1).find('a').click()
    })
  })