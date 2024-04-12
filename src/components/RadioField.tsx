const RadioField = ({
  label,
  options,
  accountType,
  handleAccountTypeChange,
}: {
  label: string;
  options: string[];
  accountType: any;
  handleAccountTypeChange: any;
}) => {
  return (
    <div className="w-full sm:w-[49%] my-2 text-sm truncate">
      <label className="block mb-2 font-medium text-gray-700 truncate">
        {label}
      </label>
      <div className="flex h-10 p-2 gap-4">
        {options.map((option) => (
          <RadioItem
            key={option}
            id={option}
            label={option}
            radioValue={accountType}
            setRadioValue={handleAccountTypeChange}
          />
        ))}
      </div>
    </div>
  );
};

const RadioItem = ({
  id,
  label,
  radioValue,
  setRadioValue,
}: {
  id: string;
  label: string;
  radioValue: string;
  setRadioValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <label htmlFor="savings" className="inline-flex items-center">
      <input
        type="radio"
        id={id}
        value={id}
        checked={radioValue === id}
        onChange={() => setRadioValue(id)}
        className="form-radio"
      />
      <span className="ml-2">{label}</span>
    </label>
  );
};

export default RadioField;
