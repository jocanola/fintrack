import { Transaction, DashboardSummary, User } from "../types/dashboard";

export const sampleTransactions: Transaction[] = [
  {
    id: "1",
    date: "2023-10-01",
    remark: "Salary",
    amount: 3000,
    currency: "USD",
    type: "Credit",
  },
  {
    id: "2",
    date: "2023-10-02",
    remark: "Groceries",
    amount: -150,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "3",
    date: "2023-10-03",
    remark: "Gym Membership",
    amount: -50,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "4",
    date: "2023-10-04",
    remark: "Dinner",
    amount: -40,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "5",
    date: "2023-10-05",
    remark: "Movie Tickets",
    amount: -30,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "6",
    date: "2023-10-06",
    remark: "Rent",
    amount: -1200,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "7",
    date: "2023-10-07",
    remark: "Utilities",
    amount: -100,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "8",
    date: "2023-10-08",
    remark: "Car Payment",
    amount: -400,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "9",
    date: "2023-10-09",
    remark: "Insurance",
    amount: -200,
    currency: "USD",
    type: "Debit",
  },
];

export const dashboardSummary: DashboardSummary = {
  totalBalance: 12345,
  totalCredits: 7890,
  totalDebits: 4455,
  transactionCount: 150,
  balanceChange: 5,
  creditsChange: 3,
  debitsChange: -2,
  transactionChange: 10,
};

export const users: User[] = [
  {
    id: "1",
    name: "Ava",
    avatar: `/assets/images/member1.png`,
  },
  {
    id: "2",
    name: "Liam",
    avatar: `/assets/images/member2.png`,
  },
  {
    id: "3",
    name: "Noah",
    avatar: `/assets/images/member3.png`,
  },
  {
    id: "4",
    name: "Emma",
    avatar: `/assets/images/member4.png`,
  },
  {
    id: "5",
    name: "Ava",
    avatar: `/assets/images/member1.png`,
  },
  {
    id: "6",
    name: "Liam",
    avatar: `/assets/images/member2.png`,
  },
  {
    id: "7",
    name: "Noah",
    avatar: `/assets/images/member3.png`,
  },
  {
    id: "8",
    name: "Emma",
    avatar: `/assets/images/member4.png`,
  },
  {
    id: "9",
    name: "Liam",
    avatar: `/assets/images/member2.png`,
  },
  {
    id: "10",
    name: "Noah",
    avatar: `/assets/images/member3.png`,
  },
  {
    id: "11",
    name: "Emma",
    avatar: `/assets/images/member4.png`,
  },
  {
    id: "12",
    name: "Emma",
    avatar: `/assets/images/member4.png`,
  },
  {
    id: "13",
    name: "Liam",
    avatar: `/assets/images/member2.png`,
  },
  {
    id: "14",
    name: "Noah",
    avatar: `/assets/images/member3.png`,
  },
  {
    id: "15",
    name: "Emma",
    avatar: `/assets/images/member4.png`,
  },
  {
    id: "16",
    name: "Emma",
    avatar: `/assets/images/member4.png`,
  },
];
