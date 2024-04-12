function calculateProportionalPayments(
  paymentAmount: number,
  accountBalances: number[]
): number[] {
  if (isNaN(paymentAmount) || paymentAmount <= 0)
    return new Array(accountBalances.length).fill(0);

  // convert all amounts to cents to avoid floating point errors
  const amounts = accountBalances.map((balance) => Math.round(balance * 100));
  const target = Math.round(paymentAmount * 100);

  const totalBalance = amounts.reduce((a, b) => a + b, 0);

  if (totalBalance === 0) return new Array(amounts.length).fill(0);

  // calculate proportional payments
  const proportionalPayments = accountBalances.map((balance) =>
    Math.floor((balance * target * 100) / totalBalance)
  );

  // distribute any remaining amount sequentially
  let remaining = target - proportionalPayments.reduce((a, b) => a + b, 0);

  for (let i = 0; i < accountBalances.length && remaining !== 0; i++) {
    if (proportionalPayments[i] + 1 <= amounts[i]) {
      proportionalPayments[i]++;
      remaining--;
    }
  }

  // convert back to dollars
  return proportionalPayments.map((payment) => payment / 100);
}

function sumOfBalances(balances: number[]): number {
  return balances.reduce((a, b) => a + Math.round(b * 100), 0) / 100;
}

function convertToDollarString(amount: number): string {
  return amount.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

function nAccountsSelectedMessage(n: number): string {
  return n === 1 ? "1 account selected" : `${n} accounts selected`;
}

function getAccountsListMessage(
  paymentAmountDollars: number,
  selectedAccounts: boolean[],
  proportionalPayments: number[]
): string {
  // const selectedAccountsBalance = sumOfBalances(proportionalPayments);
  // if (paymentAmountDollars === 0) {
  //   return "";
  // } else if (selectedAccountsBalance < paymentAmountDollars) {
  //   return "Select accounts to pay from";
  // } else {
  return nAccountsSelectedMessage(selectedAccounts.filter(Boolean).length);
  // }
}

function getProportionalPaymentAmounts(
  accounts: {
    name: string;
    balance: number;
  }[],
  paymentAmount: number,
  selectedAccounts: boolean[]
): number[] {
  const accountBalances = accounts.map((account, idx) =>
    selectedAccounts[idx] ? account.balance : 0
  );
  if (sumOfBalances(accountBalances) < paymentAmount) {
    return new Array(accounts.length).fill(0);
  }
  return calculateProportionalPayments(paymentAmount, accountBalances);
}

export {
  calculateProportionalPayments,
  convertToDollarString,
  nAccountsSelectedMessage,
  sumOfBalances,
  getAccountsListMessage,
  getProportionalPaymentAmounts,
};
