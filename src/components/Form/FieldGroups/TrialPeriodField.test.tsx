import { render, screen, fireEvent } from '@testing-library/react';
import TrialPeriodField from './TrialPeriodField';
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

const mockErrors = {
  trialPeriodValue: 'Error',
};

const mockTouched = {
  trialPeriodValue: true,
};

describe('TrialPeriodField', () => {
  it('should render correctly', () => {
    render(
      <TrialPeriodField 
        values={mockValues}
        onChange={mockOnChange}
        errors={{}}
        touched={{}}
      />
    );

    expect(screen.getByRole('spinbutton')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('should call onChange when input value changes', () => {
    render(
      <TrialPeriodField 
        values={mockValues}
        onChange={mockOnChange}
        errors={{}}
        touched={{}}
      />
    );

    const input = screen.getByRole('spinbutton');
    fireEvent.change(input, { target: { value: 5 } });

    expect(mockOnChange).toHaveBeenCalled();
  });

  it('should display error state', () => {
    render(
      <TrialPeriodField 
        values={mockValues}
        onChange={mockOnChange}
        errors={mockErrors}
        touched={mockTouched}
      />
    );

    const input = screen.getByRole('spinbutton');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });
});
