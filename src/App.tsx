import { useState } from "react";
import PaymentInfoForm from "./components/PaymentInfoForm";
import PaymentPageLayout from "./layouts/PaymentPageLayout";
import SubmittedPage from "./components/SubmittedPage";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <>
      <PaymentPageLayout>
        {!isSubmitted && <PaymentInfoForm setIsSubmitted={setIsSubmitted} />}
        {isSubmitted && <SubmittedPage />}
      </PaymentPageLayout>
    </>
  );
}

export default App;
