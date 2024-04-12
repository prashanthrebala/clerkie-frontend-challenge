import NumericField from "./NumericField";

const PaymentDetails = ({
  accountBalance,
  paymentAmountDollars,
  paymentAmountCents,
  setPaymentAmountCents,
}: {
  paymentAmountDollars: number;
  accountBalance: number;
  paymentAmountCents: number;
  setPaymentAmountCents: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <>
      <h6 className="block text-sm font-semibold mb-4">Payment Details</h6>
      <div className="flex flex-wrap justify-between mb-8">
        <NumericField
          label={"Payment Amount"}
          id={"paymentDetails"}
          insufficientBalance={accountBalance < paymentAmountDollars}
          textFieldValueCents={paymentAmountCents}
          textFieldValueDollars={paymentAmountDollars}
          setTextFieldValueCents={setPaymentAmountCents}
        />
      </div>
    </>
  );
};

export default PaymentDetails;
