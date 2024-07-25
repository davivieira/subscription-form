describe('Form Component', () => {
  beforeEach(() => {
    cy.visit('/your-form-page-url');
  });

  it('should display error message for required field periodic payment', () => {
    cy.get('[data-testid="submit-btn"]').click()

    cy.contains('Setting a periodic payment is required');
  })

  it('should make the Billing Cycles field visible when Duration is set to Customize', () => {
    cy.get('[data-testid="billingCycles"]').should('not.be.visible');

    cy.get('[data-testid="duration"]').click()
    cy.get('[data-testid="customize"]').click()

    cy.get('[data-testid="billingCycles"]').should('be.visible');
  });

  it('should keep the Billing Cycles field hidden when Duration is set to Never Ends', () => {
    cy.get('[data-testid="duration"]').click()
    cy.get('[data-testid="neverEnds"]').click()

    cy.get('[data-testid="billingCycles"]').should('not.be.visible');
  });

  it('should fill all fields and submit the form', () => {

    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alertSpy');
    });

    cy.get('[data-testid="initialPrice"]').type('100');

    cy.get('[data-testid="duration"]').click();
    cy.get('[data-testid="customize"]').click();

  
    cy.get('[data-testid="billingFrequencyValue"]').type('5');
    cy.get('[data-testid="billingFrequencyPeriod"]').click();
    cy.get('[data-testid="bf-days"]').click();

    cy.get('[data-testid="periodicPayment"]').type('50');

    cy.get('[data-testid="trialPeriod"]').click();
    cy.get('[data-testid="days"]').click();
    cy.get('[data-testid="trialPeriodValue"]').type('10');

    cy.get('[data-testid="billingCycles"]').type('12');

    cy.get('[data-testid="submit-btn"]').click();

    cy.get('@alertSpy').should('be.called');
  });

});