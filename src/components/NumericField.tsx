import { useRef } from "react";
import { convertToDollarString } from "../utils/utils";

const NumericField = ({
  id,
  label,
  insufficientBalance,
  textFieldValueDollars,
  setTextFieldValueCents,
}: {
  id: string;
  label: string;
  insufficientBalance: boolean;
  textFieldValueCents: number;
  textFieldValueDollars: number;
  setTextFieldValueCents: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="w-full sm:w-[49%] my-2 text-sm">
      <label
        htmlFor={id}
        className="block mb-2 font-medium text-gray-700 truncate"
      >
        {label}
        {insufficientBalance && (
          <span className="text-red-400 ml-3 text-xs">Insufficient funds</span>
        )}
      </label>
      <input
        ref={inputRef}
        required
        type="text"
        id={id}
        value={convertToDollarString(textFieldValueDollars)}
        onClick={() => {
          if (!inputRef.current) return;
          inputRef.current.selectionStart = inputRef.current.value.length;
          inputRef.current.selectionEnd = inputRef.current.value.length;
        }}
        onKeyDown={(e) => {
          if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) {
            e.preventDefault();
          }
        }}
        onChange={(event) => {
          const value = event.target.value.replace(/\D/g, "");
          setTextFieldValueCents(parseInt(value || "0"));
        }}
        className={`${
          textFieldValueDollars === 0 ? "text-text-subtler" : "text-neutral-900"
        } w-full h-10 px-4 py-2 border font-semibold border-gray-300 placeholder-text-subtler rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500`}
      />
    </div>
  );
};

export default NumericField;
