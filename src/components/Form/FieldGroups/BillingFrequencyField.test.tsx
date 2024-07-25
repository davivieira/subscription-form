import { render, screen, fireEvent } from '@testing-library/react';
import BillingFrequencyField from './BillingFrequencyField';
import { FormValues } from '@/types';

const mockValues: FormValues = {
  initialPrice: 0,
  billingFrequencyValue: 1,
  billingFrequencyPeriod: "Months",
  periodicPayment: 0,
  trialPeriodValue: 0,
  trialPeriod: "None",
  duration: "Never Ends",
  billingCycles: 0,
};

const mockOnChange = jest.fn();

describe('BillingFrequencyField', () => {
  it('should render correctly', () => {
    render(
      <BillingFrequencyField 
        values={mockValues}
        onChange={mockOnChange}
      />
    );

    expect(screen.getByRole('spinbutton')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('should call onChange when input value changes', () => {
    render(
      <BillingFrequencyField 
        values={mockValues}
        onChange={mockOnChange}
      />
    );

    const input = screen.getByRole('spinbutton');
    fireEvent.change(input, { target: { value: 5 } });

    expect(mockOnChange).toHaveBeenCalled();
  });
});
