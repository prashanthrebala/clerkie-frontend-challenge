import React from "react";
import TextField from "./TextField";
import RadioField from "./RadioField";

interface BankDetailsProps {
  accountNumber: string;
  setAccountNumber: React.Dispatch<React.SetStateAction<string>>;
  confirmAccountNumber: string;
  setConfirmAccountNumber: React.Dispatch<React.SetStateAction<string>>;
  routingNumber: string;
  setRoutingNumber: React.Dispatch<React.SetStateAction<string>>;
  accountType: string;
  setAccountType: React.Dispatch<React.SetStateAction<string>>;
}

const BankDetails: React.FC<BankDetailsProps> = ({
  accountNumber,
  setAccountNumber,
  confirmAccountNumber,
  setConfirmAccountNumber,
  routingNumber,
  setRoutingNumber,
  accountType,
  setAccountType,
}) => {
  return (
    <>
      <h6 className="block text-sm font-semibold mb-4">Payment Information</h6>
      <div className="flex flex-wrap justify-between mb-8">
        <TextField
          label={"Account Number"}
          id={"accountNumber"}
          placeHolder={"Account number"}
          textFieldValue={accountNumber}
          setTextFieldValue={setAccountNumber}
        />
        <TextField
          label={"Confirm Account Number"}
          id={"confirmAccountNumber"}
          placeHolder={"Account number"}
          textFieldValue={confirmAccountNumber}
          setTextFieldValue={setConfirmAccountNumber}
        />
        <TextField
          label={"Routing Number"}
          id={"routingNumber"}
          placeHolder={"Routing number"}
          textFieldValue={routingNumber}
          setTextFieldValue={setRoutingNumber}
        />
        <RadioField
          label={"Account Type"}
          options={["Checking", "Savings"]}
          accountType={accountType}
          handleAccountTypeChange={setAccountType}
        />
      </div>
    </>
  );
};

export default BankDetails;
