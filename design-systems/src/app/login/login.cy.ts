import { createOutputSpy } from 'cypress/angular';
import { LoginComponent } from './login.component';
import { LoginModule } from './login.module';
import { LoginService } from './login.service';
import { MockLoginService } from './mocks/mock-login.service';

describe('The login component', () => {
  beforeEach(() => {
    cy.mount(LoginComponent, {
      componentProperties: {
        loginAttempted: createOutputSpy('loginAttempted'),
        loginResult: createOutputSpy('loginResult'),
      },
      imports: [LoginModule],
    });
  });

  it('should fail when no mocks are present', () => {
    cy.get('[data-cy-username] input').type('username');
    cy.get('[data-cy-password] input').type('password');
    cy.get('button').click();

    cy.get('@loginAttempted').should('have.been.calledOnce');
    cy.get('@loginResult').should('have.been.calledOnceWith', false); // this should fail b/c of the 4000ms timeout
  });

  it('should return true when the mocks are present', () => {
    cy.mount(LoginComponent, {
      componentProperties: {
        loginAttempted: createOutputSpy('loginAttempted'),
        loginResult: createOutputSpy('loginResult'),
      },
      imports: [LoginModule],
      providers: [
        {
          provide: LoginService,
          useClass: MockLoginService,
        },
      ],
    });
    cy.get('[data-cy-username] input').type('username');
    cy.get('[data-cy-password] input').type('password');
    cy.get('button').click();

    cy.get('@loginAttempted').should('have.been.calledOnce');
    cy.get('@loginResult').should('have.been.calledOnceWith', false); // this should fail b/c of the 4000ms timeout
  });
});
