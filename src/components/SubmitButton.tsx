const SubmitButton = ({ submitTooltip }: { submitTooltip: string }) => {
  return (
    <button
      type="submit"
      title={submitTooltip}
      disabled={submitTooltip !== ""}
      className={`${
        submitTooltip !== ""
          ? "bg-background-brand-subtler"
          : "bg-background-brand hover:bg-blue-700"
      } text-sm w-full px-4 py-2 text-white rounded-md`}
    >
      Submit
    </button>
  );
};

export default SubmitButton;
