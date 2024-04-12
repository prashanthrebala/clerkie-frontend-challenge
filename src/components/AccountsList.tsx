import AccountInfo from "./AccountInfo";
import { convertToDollarString } from "../utils/utils";
import { LINKED_ACCOUNTS } from "../constants/accountConstants";

const AccountsList = ({
  accountsListMessage,
  accountBalance,
  selectedAccounts,
  setSelectedAccounts,
  proportionalPayments,
}: {
  accountsListMessage: string;
  accountBalance: number;
  selectedAccounts: boolean[];
  setSelectedAccounts: React.Dispatch<React.SetStateAction<boolean[]>>;
  proportionalPayments: number[];
}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row text-sm font-semibold md:justify-between mb-4">
        <h6>
          Accounts List
          <span className="text-blue-600 ml-3 text-xs">
            {accountsListMessage}
          </span>
        </h6>
        <h6>Total Balance {convertToDollarString(accountBalance)}</h6>
      </div>
      <div className="mb-8">
        {LINKED_ACCOUNTS.map((accountInfo, idx) => (
          <AccountInfo
            key={accountInfo.name}
            accountName={accountInfo.name}
            accountBalance={accountInfo.balance}
            index={idx}
            selectedAccounts={selectedAccounts}
            setSelectedAccounts={setSelectedAccounts}
            proportionalPayments={proportionalPayments}
          />
        ))}
      </div>
    </>
  );
};

export default AccountsList;
