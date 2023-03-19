import { createOutputSpy } from 'cypress/angular';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  beforeEach(() => {
    cy.mount(CounterComponent, {
      componentProperties: {
        count: 0,
      },
    });
  });

  it('should display the initial count value', () => {
    cy.get('span').should('contain', '0');
  });

  it('should update the count value when the increment button is clicked', () => {
    cy.get('button:last-child').click();
    cy.get('span').should('contain', '1');
  });

  it('should update the count value when the decrement button is clicked', () => {
    cy.get('button:first-child').click();
    cy.get('span').should('contain', '-1');
  });

  it('should emit the count value when the increment button is clicked', () => {
    cy.mount(CounterComponent, {
      componentProperties: {
        count: 0,
        countChange: createOutputSpy('changeSpy'),
      },
    });
    cy.get('button:last-child').click();
    cy.get('@changeSpy').should('have.been.calledWith', 1);
  });

  it('should emit the count value when the decrement button is clicked', () => {
    cy.mount(CounterComponent, {
      componentProperties: {
        count: 0,
        countChange: createOutputSpy('changeSpy'),
      },
    });
    cy.get('button:first-child').click();
    cy.get('@changeSpy').should('have.been.calledWith', -1);
  });
});
