import React, { useEffect, useState } from "react";
import { LINKED_ACCOUNTS } from "../constants/accountConstants";
import {
  sumOfBalances,
  getAccountsListMessage,
  getProportionalPaymentAmounts,
} from "../utils/utils";
import BankDetails from "./BankDetails";
import SubmitButton from "./SubmitButton";
import PaymentDetails from "./PaymentDetails";
import AccountsList from "./AccountsList";
import useFormValidation from "../hooks/useFormValidation";

const PaymentInfoForm = ({
  setIsSubmitted,
}: {
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [accountNumber, setAccountNumber] = useState("");
  const [confirmAccountNumber, setConfirmAccountNumber] = useState("");
  const [routingNumber, setRoutingNumber] = useState("");
  const [accountType, setAccountType] = useState("Checking");
  const [paymentAmountCents, setPaymentAmountCents] = useState(0);
  const [paymentAmountDollars, setPaymentAmountDollars] = useState(0);
  const [accountsListMessage, setAccountsListMessage] = useState("");
  // const [submitTooltip, setSubmitTooltip] = useState("Fill all details");
  const ACCOUNTS_BALANCE = sumOfBalances(
    LINKED_ACCOUNTS.map((account) => account.balance)
  );
  const [selectedAccounts, setSelectedAccounts] = useState(
    new Array(LINKED_ACCOUNTS.length).fill(false)
  );
  const [proportionalPayments, setProportionalPayments] = useState(
    new Array(LINKED_ACCOUNTS.length).fill(0)
  );

  // hook to update paymentAmountDollars when paymentAmountCents changes
  useEffect(() => {
    setPaymentAmountDollars(paymentAmountCents / 100);
  }, [paymentAmountCents]);

  // update proportionalPayments and accountsListMessage
  // when selectedAccounts or paymentAmountDollars changes
  useEffect(() => {
    const proportionalPayments = getProportionalPaymentAmounts(
      LINKED_ACCOUNTS,
      paymentAmountDollars,
      selectedAccounts
    );
    const accountsListMessage = getAccountsListMessage(
      paymentAmountDollars,
      selectedAccounts,
      proportionalPayments
    );
    setProportionalPayments(proportionalPayments);
    setAccountsListMessage(accountsListMessage);
  }, [paymentAmountDollars, selectedAccounts]);

  const formInfo = useFormValidation(
    accountNumber,
    confirmAccountNumber,
    routingNumber,
    paymentAmountDollars,
    selectedAccounts,
    proportionalPayments
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const paymentDetails = {
      accountNumber,
      routingNumber,
      accountType,
      paymentAmountDollars,
      selectedAccounts: selectedAccounts.map((selected, idx) => ({
        selected,
        amount: proportionalPayments[idx],
      })),
    };
    console.log(paymentDetails);
    setIsSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <BankDetails
        accountNumber={accountNumber}
        setAccountNumber={setAccountNumber}
        confirmAccountNumber={confirmAccountNumber}
        setConfirmAccountNumber={setConfirmAccountNumber}
        routingNumber={routingNumber}
        setRoutingNumber={setRoutingNumber}
        accountType={accountType}
        setAccountType={setAccountType}
      />
      <PaymentDetails
        paymentAmountDollars={paymentAmountDollars}
        accountBalance={ACCOUNTS_BALANCE}
        paymentAmountCents={paymentAmountCents}
        setPaymentAmountCents={setPaymentAmountCents}
      />
      <AccountsList
        accountsListMessage={accountsListMessage}
        selectedAccounts={selectedAccounts}
        setSelectedAccounts={setSelectedAccounts}
        proportionalPayments={proportionalPayments}
        accountBalance={ACCOUNTS_BALANCE}
      />
      <SubmitButton submitTooltip={formInfo} />
    </form>
  );
};

export default PaymentInfoForm;
