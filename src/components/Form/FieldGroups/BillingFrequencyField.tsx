import { MenuItem } from "@mui/material";
import { SCFieldGroupContainer, SCPrefixField } from "./FieldGroups.styles";
import { FormValues } from "@/types";
import { SCSelect } from "../Form.styles";

function BillingFrequencyField({
  values,
  onChange,
}: {
  values: FormValues;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: any;
}) {
  const { billingFrequencyValue, billingFrequencyPeriod } = values;

  return (
    <SCFieldGroupContainer>
      <SCPrefixField
        InputProps={{ inputProps: { min: 1, 'data-testid': 'billingFrequencyValue' } }}
        value={billingFrequencyValue}
        onChange={onChange}
        name="billingFrequencyValue"
        type="number"
      />
      <SCSelect
        data-testid="billingFrequencyPeriod"
        name="billingFrequencyPeriod"
        value={billingFrequencyPeriod}
        onChange={onChange}
      >
        <MenuItem data-testid="bf-days" value="Days">Days</MenuItem>
        <MenuItem data-testid="bf-weeks" value="Weeks">Weeks</MenuItem>
        <MenuItem data-testid="bf-months" value="Months">Months</MenuItem>
      </SCSelect>
    </SCFieldGroupContainer>
  );
}

export default BillingFrequencyField;
