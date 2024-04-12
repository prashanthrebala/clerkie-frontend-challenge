const TextField = ({
  id,
  label,
  textFieldValue,
  setTextFieldValue,
  placeHolder,
  styles,
}: {
  id: string;
  label: string;
  textFieldValue: string;
  setTextFieldValue: React.Dispatch<React.SetStateAction<string>>;
  placeHolder: string;
  styles?: string;
}) => {
  return (
    <div className="w-full sm:w-[49%] my-2 text-sm">
      <label
        htmlFor={id}
        className="block mb-2 font-medium text-gray-700 truncate"
      >
        {label}
      </label>
      <input
        placeholder={placeHolder}
        required
        type="text"
        id={id}
        value={textFieldValue}
        onChange={(event) =>
          setTextFieldValue(event.target.value.replace(/\D/g, ""))
        }
        className={`w-full h-10 px-4 py-2 border border-gray-300 placeholder-text-subtler rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 ${styles}`}
      />
    </div>
  );
};

export default TextField;
