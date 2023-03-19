import { ButtonComponent } from './button.component';

describe('The ButtonComponent', () => {
  beforeEach(() => {
    cy.mount(ButtonComponent);
  });

  it('checks that the button element exists and is visible', () => {
    cy.get('button').should('exist');
    cy.get('button').should('be.visible');
  });

  it('should check that the button is rendering correctly', () => {
    cy.get('button').should('have.css', 'background-color', 'rgb(0, 133, 252)');
    cy.get('button').should('have.css', 'border-color', 'rgb(3, 87, 163)');
  });
});
