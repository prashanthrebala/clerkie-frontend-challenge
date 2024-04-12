import { convertToDollarString } from "../utils/utils";

const AccountInfo = ({
  accountName,
  accountBalance,
  index,
  selectedAccounts,
  setSelectedAccounts,
  proportionalPayments,
}: {
  accountName: string;
  accountBalance: number;
  index: number;
  selectedAccounts: boolean[];
  setSelectedAccounts: React.Dispatch<React.SetStateAction<boolean[]>>;
  proportionalPayments: number[];
}) => {
  return (
    <div className="flex w-full h-24 items-center">
      <label className="flex h-full items-center gap-4">
        <input
          type="checkbox"
          className="h-4 w-4"
          checked={selectedAccounts[index]}
          onChange={() => {
            setSelectedAccounts((prev) => {
              const newSelectedAccounts = [...prev];
              newSelectedAccounts[index] = !newSelectedAccounts[index];
              return newSelectedAccounts;
            });
          }}
        />
        <div className="flex h-full flex-col justify-center">
          <div className="text-sm font-semibold mb-2">{accountName}</div>
          <div className="text-xs text-text-subtler">Balance</div>
          <div className="text-xs text-text-subtler">
            {convertToDollarString(accountBalance)}
          </div>
        </div>
      </label>

      <div
        className={`flex items-center px-4 justify-end outline-1 ml-auto w-32 h-10 border border-border-default rounded-md text-sm font-semibold ${
          proportionalPayments[index] === 0 &&
          "bg-background-disabled text-text-disabled"
        }`}
      >
        {convertToDollarString(proportionalPayments[index])}
      </div>
    </div>
  );
};

export default AccountInfo;
