// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/home')
    cy.contains('#main-content', 'Enter the GitHub Username to Search')
  })
})
