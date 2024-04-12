const PaymentPageLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen flex justify-center bg-gray-200">
      <div className="w-full sm:w-[36rem] bg-neutral-50 p-9">{children}</div>
    </div>
  );
};

export default PaymentPageLayout;
