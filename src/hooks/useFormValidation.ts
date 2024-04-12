import { useEffect, useState } from "react";
import { sumOfBalances } from "../utils/utils";

const useFormValidation = (
  accountNumber: string,
  confirmAccountNumber: string,
  routingNumber: string,
  paymentAmountDollars: number,
  selectedAccounts: boolean[],
  proportionalPayments: number[]
) => {
  const [submitTooltip, setSubmitTooltip] = useState("");

  useEffect(() => {
    if (accountNumber === "" || accountNumber !== confirmAccountNumber) {
      setSubmitTooltip("Account numbers do not match");
    } else if (routingNumber.length !== 9) {
      setSubmitTooltip("Routing number must be 9 digits");
    } else if (paymentAmountDollars === 0) {
      setSubmitTooltip("Payment amount must be greater than 0");
    } else if (selectedAccounts.filter(Boolean).length === 0) {
      setSubmitTooltip("Select at least one account to pay from");
    } else if (sumOfBalances(proportionalPayments) < paymentAmountDollars) {
      setSubmitTooltip("Selected accounts do not have sufficient balance");
    } else {
      setSubmitTooltip("");
    }
  }, [
    accountNumber,
    confirmAccountNumber,
    routingNumber,
    paymentAmountDollars,
    selectedAccounts,
    proportionalPayments,
  ]);

  return submitTooltip;
};

export default useFormValidation;
