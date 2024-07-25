import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Form from './Form';

jest.mock('formik', () => ({
  useFormik: () => ({
    values: {
      initialPrice: '',
      billingFrequencyValue: 1,
      billingFrequencyPeriod: 'Months',
      periodicPayment: '',
      trialPeriodValue: '',
      trialPeriod: 'None',
      duration: 'Never Ends',
      billingCycles: '',
    },
    errors: {},
    touched: {},
    handleSubmit: jest.fn(),
    handleChange: jest.fn(),
    submitCount: 0,
  }),
}));

describe('Form', () => {

  beforeEach(() => {
    render(<Form />);
  });
  it('should render correctly', () => {
    expect(screen.getByText(/Initial Price/i)).toBeInTheDocument();
    expect(screen.getByText(/Billing Frequency/i)).toBeInTheDocument();
    expect(screen.getByText(/Monthly Payment/i)).toBeInTheDocument();
    expect(screen.getByText(/Trial Period/i)).toBeInTheDocument();
    expect(screen.getByText(/Duration/i)).toBeInTheDocument();
    expect(screen.getByText(/Billing Cycles/i)).toBeInTheDocument();
  });

  it('should have correct default values for the fields', () => {
    expect(screen.getByTestId('initialPrice')).toHaveValue(null);
    expect(screen.getByTestId('billingFrequencyValue')).toHaveValue(1);
    expect(screen.getByTestId('periodicPayment')).toHaveValue(null);
    expect(screen.getByTestId('trialPeriod')).toHaveValue('None');
    expect(screen.getByTestId('billingCycles')).toHaveValue(null);
  });

  it('should show billing cycles field when duration is Customize', async () => {
    const durationSelect = screen.getByTestId('duration');
    await waitFor(() => {
      fireEvent.change(durationSelect, { target: { value: 'Customize' } });
    })

    await waitFor(() => {
      expect(screen.getByTestId('billingCycles')).toBeVisible();
    });
  });
});
