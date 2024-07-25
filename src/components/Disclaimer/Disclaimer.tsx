import { Typography } from "@mui/material";
import { FormValues } from "@/types";
import { formatNumber } from "../../utils";

interface DisclaimerProps {
  values: FormValues;
}

function Disclaimer({ values }: DisclaimerProps) {
  const {
    initialPrice,
    trialPeriod,
    billingFrequencyValue,
    billingFrequencyPeriod,
    periodicPayment,
    billingCycles,
    duration,
    trialPeriodValue,
  } = values;

  let desc = `Your customer will be charged $${formatNumber(
    initialPrice || 0
  )} immediately`;
  if (trialPeriod !== "None") {
    desc += ` for their ${Number(trialPeriodValue)} ${
      Number(trialPeriodValue) > 1
        ? trialPeriod.toLowerCase()
        : trialPeriod.toLowerCase().slice(0, -1)
    } trial,`;
  }
  desc += ` and then $${formatNumber(periodicPayment || 0)} every ${
    billingFrequencyValue > 1 ? `${billingFrequencyValue} ` : ""
  } ${
    billingFrequencyValue > 1
      ? billingFrequencyPeriod.toLowerCase()
      : billingFrequencyPeriod.toLowerCase().slice(0, -1)
  }`;
  if (duration === "Never Ends") {
    desc += " until they cancel.";
  } else {
    const totalAmountPaid =
      Number(initialPrice) + Number(periodicPayment) * Number(billingCycles);
    desc += `, ${billingCycles} times. The total amount paid will be $${formatNumber(
      totalAmountPaid || 0
    )}.`;
  }

  return <Typography>{desc}</Typography>;
}

export default Disclaimer;
