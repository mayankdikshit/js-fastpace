let salesData = [
  { product: "laptop", price: 1200 },
  { product: "smartphone", price: 800 },
  { product: "headphones", price: 150 },
  { product: "keyboard", price: 300 },
];

// calculate total price

let  userActivity = [
    {user:"Alice",activityCount: 45},
    {user:"Bob",activityCount: 72},
    {user:"Charlie",activityCount: 33},
]

// find most active user 

// let mostActiveUser = userActivity.reduce(() => ())

  let expenses = [
    { description: "Groceries", amount: 50, category: "Food" },
    { description: "Electricity Bill", amount: 100, category: "Utilities" },
    { description: "Dinner", amount: 30, category: "Food" },
    { description: "Internet Bill", amount: 50, category: "Utilities" },
  ];
  
  let expenseReport = expenses.reduce((report, expense) => {
    report[expense.category] = (report[expense.category] || 0) + expense.amount;
    return report;
  }, {});
  
  console.log("Expense Report", expenseReport);
  