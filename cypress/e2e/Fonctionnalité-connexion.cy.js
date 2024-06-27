describe('Login Form Tests', () => {
  it('should fill out and submit the login form', () => {
    cy.visit('http://localhost:8080/#/login'); 
    // Journal de débogage
    cy.log('Visiting the login page');

// Remplir le champ email
    cy.get('input[data-cy="login-input-username"]').should('be.visible').type('your_email@example.com').then(() => {
    cy.log('Email input found and filled');
    });

// Remplir le champ mot de passe
    cy.get('input[data-cy="login-input-password"]').should('be.visible').type('your_password').then(() => {
    cy.log('Password input found and filled');
    });

    // Cliquer sur le bouton Soumettre
    cy.get('button[data-cy="login-submit"]').should('be.visible').click().then(() => {
    cy.log('Submit button clicked');
    });
  });
});
