import { useFormik } from "formik";
import { FormValues } from "@/types";
import Disclaimer from "../Disclaimer/Disclaimer";
import { Button, MenuItem } from "@mui/material";
import {
  SCDisclaimerSection,
  SCFieldGroup,
  SCFormContainer,
  SCFormSectionsContainer,
  SCSection,
  SCSelect,
  SCTextField,
} from "./Form.styles";
import BillingFrequencyField from "./FieldGroups/BillingFrequencyField";
import TrialPeriodField from "./FieldGroups/TrialPeriodField";
import { SCErrorMessage } from "@/styles";
import { validationSchema } from "@/utils/validationSchema";

const BillingFrequencyMap = new Map<string, string>([
  ["Days", "Daily"],
  ["Weeks", "Weekly"],
  ["Months", "Monthly"],
]);

function Form() {
  const { values, errors, touched, submitCount, handleSubmit, handleChange } =
    useFormik<FormValues>({
      initialValues: {
        initialPrice: "",
        billingFrequencyValue: 1,
        billingFrequencyPeriod: "Months",
        periodicPayment: "",
        trialPeriodValue: "",
        trialPeriod: "None",
        duration: "Never Ends",
        billingCycles: "",
      },
      validationSchema,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
        /**
         * From this point on, the next steps should be to send this data to a server and/or redirect user to a page,
         * or show some visual feedback to the user, saying that the form has been submitted.
         */
      },
    });

  return (
    <SCFormContainer>
      <form onSubmit={handleSubmit}>
        <SCFormSectionsContainer>
          <SCSection>
            <SCFieldGroup>
              <label aria-labelledby="initialPrice" htmlFor="initialPrice">
                Initial Price
              </label>
              <SCTextField
                InputProps={{
                  inputProps: {
                    min: 1,
                    step: 0.01,
                    "data-testid": "initialPrice",
                  },
                }}
                value={values.initialPrice}
                onChange={handleChange}
                error={!!errors.initialPrice}
                name="initialPrice"
                type="number"
              />
            </SCFieldGroup>
            <SCFieldGroup>
              <label
                aria-labelledby="billingFrequency"
                htmlFor="billingFrequency"
              >
                Billing Frequency
              </label>
              <BillingFrequencyField
                data-testid="billingFrequency"
                values={values}
                onChange={handleChange}
              />
            </SCFieldGroup>

            <SCFieldGroup>
              <label
                aria-labelledby="periodicPayment"
                htmlFor="periodicPayment"
              >
                {BillingFrequencyMap.get(values.billingFrequencyPeriod)} Payment
              </label>
              <SCTextField
                InputProps={{
                  inputProps: {
                    min: 1,
                    step: 0.01,
                    "data-testid": "periodicPayment",
                  },
                }}
                value={values.periodicPayment}
                onChange={handleChange}
                error={!!errors.periodicPayment && touched.periodicPayment}
                name="periodicPayment"
                type="number"
              />
            </SCFieldGroup>
          </SCSection>
          <SCSection>
            <SCFieldGroup>
              <label aria-labelledby="trialPeriod" htmlFor="trialPeriod">
                Trial Period
              </label>
              <TrialPeriodField
                data-testid="trialPeriod"
                values={values}
                onChange={handleChange}
                errors={errors}
                touched={touched}
              />
            </SCFieldGroup>

            <SCFieldGroup>
              <label aria-labelledby="duration" htmlFor="duration">
                Duration
              </label>
              <SCSelect
                data-testid="duration"
                sx={{ minWidth: 240 }}
                name="duration"
                value={values.duration}
                onChange={handleChange}
              >
                <MenuItem data-testid="neverEnds" value="Never Ends">Never Ends</MenuItem>
                <MenuItem data-testid="customize" value="Customize">Customize</MenuItem>
              </SCSelect>
            </SCFieldGroup>

            <SCFieldGroup
              sx={{
                visibility:
                  values.duration === "Customize" ? "visible" : "hidden",
              }}
            >
              <label aria-labelledby="billingCycles" htmlFor="billingCycles">
                Billing Cycles
              </label>
              <SCTextField
                InputProps={{ inputProps: { min: 1, 'data-testid': "billingCycles" } }}
                value={values.billingCycles}
                onChange={handleChange}
                error={!!errors.billingCycles && touched.billingCycles}
                name="billingCycles"
                type="number"
              />
            </SCFieldGroup>
          </SCSection>
          <SCDisclaimerSection>
            <Disclaimer values={values} />
          </SCDisclaimerSection>
          {submitCount > 0 &&
            touched &&
            Object.keys(errors).map((key) => (
              <SCErrorMessage>
                {(errors as Record<string, string>)[key]}
              </SCErrorMessage>
            ))}
          <Button data-testid="submit-btn" variant="contained" color="secondary" type="submit">
            Submit
          </Button>
        </SCFormSectionsContainer>
      </form>
    </SCFormContainer>
  );
}

export default Form;
