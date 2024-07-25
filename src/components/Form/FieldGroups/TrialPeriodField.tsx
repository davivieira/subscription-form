import { MenuItem } from "@mui/material";
import { SCFieldGroupContainer, SCPrefixField } from "./FieldGroups.styles";
import { FormValues } from "@/types";
import { SCSelect } from "../Form.styles";
import { FormikErrors, FormikTouched } from "formik/dist/types";

function TrialPeriodField({
  values,
  onChange,
  errors,
  touched,
}: {
  values: FormValues;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: any;
  errors: FormikErrors<FormValues>;
  touched: FormikTouched<FormValues>;
}) {
  const { trialPeriodValue, trialPeriod } = values;

  return (
    <SCFieldGroupContainer>
      <SCPrefixField
        error={!!errors.trialPeriodValue && touched.trialPeriodValue}
        disabled={trialPeriod === "None"}
        InputProps={{ inputProps: { min: 1, 'data-testid': 'trialPeriodValue' },  }}
        value={trialPeriodValue}
        onChange={onChange}
        name="trialPeriodValue"
        type="number"
      />
      <SCSelect
        data-testid="trialPeriod"
        name="trialPeriod"
        value={trialPeriod}
        onChange={onChange}
      >
        <MenuItem data-testid="none" value="None">None</MenuItem>
        <MenuItem data-testid="days" value="Days">Days</MenuItem>
        <MenuItem data-testid="weeks" value="Weeks">Weeks</MenuItem>
        <MenuItem data-testid="months" value="Months">Months</MenuItem>
      </SCSelect>
    </SCFieldGroupContainer>
  );
}

export default TrialPeriodField;
