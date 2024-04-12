# clerkie-frontend-challenge

A short video demonstration of the app can be found here: https://youtu.be/bPxuevgYUJc

This project was built using React, Vite, and TypeScript.

The user's linked account details are specified in `constants/accountConstants.ts`

The submit button is disabled if there are any errors in the form. Hovering over the submit button will display any errors that are present. 

The prorated amount calculation is done through a function in utils called 
`calculateProportionalPayments(paymentAmount: number, accountBalances: number[]): number[]`

To simplify the calculations, all dollar amounts are first converted to cents and rounded to avoid floating point errors. The split is calculated proportionally and then all values are rounded down (floored). There will then be at most n - 1 cents remaining. A cent will be added to each amount sequentially if needed, and if it doesn't exceed the initial balance by doing so. All the values are then divided by 100 and returned back. 


#### Running the project
Download the project locally and run
```
  $ npm install
  $ npm run dev
```

#### Dependencies
None
