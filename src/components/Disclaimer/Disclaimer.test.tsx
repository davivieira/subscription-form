import { render } from '@testing-library/react';
import Disclaimer from '../Disclaimer/Disclaimer';
import { FormValues } from '@/types';

// Mock the formatNumber utility function
jest.mock('../../utils', () => ({
  formatNumber: jest.fn((num) => num.toFixed(2)),
}));

describe('Disclaimer component', () => {
  it('renders correctly with initial price and periodic payment', () => {
    const values: FormValues = {
      initialPrice: 100,
      trialPeriod: 'None',
      billingFrequencyValue: 1,
      billingFrequencyPeriod: 'Months',
      periodicPayment: 50,
      billingCycles: 12,
      duration: 'Customize',
      trialPeriodValue: "",
    };

    const { getByText } = render(<Disclaimer values={values} />);

    expect(getByText('Your customer will be charged $100.00 immediately and then $50.00 every month, 12 times. The total amount paid will be $700.00.')).toBeInTheDocument();
  });

  it('renders correctly with a trial period', () => {
    const values: FormValues = {
      initialPrice: 100,
      trialPeriod: 'Months',
      billingFrequencyValue: 1,
      billingFrequencyPeriod: 'Months',
      periodicPayment: 50,
      billingCycles: 12,
      duration: 'Customize',
      trialPeriodValue: 1,
    };

    const { getByText } = render(<Disclaimer values={values} />);

    expect(getByText('Your customer will be charged $100.00 immediately for their 1 month trial, and then $50.00 every month, 12 times. The total amount paid will be $700.00.')).toBeInTheDocument();
  });

  it('renders correctly when duration is Never Ends', () => {
    const values: FormValues = {
      initialPrice: 100,
      trialPeriod: 'None',
      billingFrequencyValue: 2,
      billingFrequencyPeriod: 'Months',
      periodicPayment: 50,
      billingCycles: "",
      duration: 'Never Ends',
      trialPeriodValue: "",
    };

    const { getByText } = render(<Disclaimer values={values} />);

    expect(getByText('Your customer will be charged $100.00 immediately and then $50.00 every 2 months until they cancel.')).toBeInTheDocument();
  });

  it('renders correctly with plural billing frequency', () => {
    const values: FormValues = {
      initialPrice: 100,
      trialPeriod: 'None',
      billingFrequencyValue: 2,
      billingFrequencyPeriod: 'Weeks',
      periodicPayment: 50,
      billingCycles: 12,
      duration: 'Customize',
      trialPeriodValue: "",
    };

    const { getByText } = render(<Disclaimer values={values} />);

    expect(getByText('Your customer will be charged $100.00 immediately and then $50.00 every 2 weeks, 12 times. The total amount paid will be $700.00.')).toBeInTheDocument();
  });
});
