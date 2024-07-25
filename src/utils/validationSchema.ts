import * as Yup from "yup";

export const validationSchema = Yup.object({
  initialPrice: Yup.number().positive("Initial Price Must be a positive number").nullable(),
  billingFrequencyValue: Yup.number()
    .required("Required")
    .positive("Billing frequency value must be a positive number")
    .integer("Billing frequency value must be an integer"),
  billingFrequencyPeriod: Yup.string().required("Required"),
  periodicPayment: Yup.number()
    .required("Setting a periodic payment is required")
    .positive("Periodic payment must be a positive number"),
  trialPeriodValue: Yup.number()
    .positive("Trial period value must be a positive number")
    .integer("Trial period value must be an integer")
    .nullable()
    .test("is-required", "Trial Period Value is required if Trial Period is not None", function (value) {
      const { trialPeriod } = this.parent;
      return trialPeriod === "None" || (value != null && value !== Number(""));
    }),
  trialPeriod: Yup.string().required("Required"),
  duration: Yup.string().required("Required"),
  billingCycles: Yup.number()
    .positive("Billing Cycles must be a positive number")
    .integer("Billing Cycles must be an integer")
    .nullable()
    .test("is-required", "Billing Cycles is required if duration is Customize", function (value) {
      const { duration } = this.parent;
      return duration !== "Customize" || (value != null && value !== Number(""));
    }),
});