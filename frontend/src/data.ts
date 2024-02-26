export type Subscription = {
  id: number;
  name: string;
  catergory: string;
  cost: number;
  paymentFrequency: string;
  active: boolean;
  paymentMethod: string;
  paymentDate: string;
  startDate: string;
};

export const SUBSCRIPTIONS: Subscription[] = [
  {
    id: 1,
    name: "Netflix",
    catergory: "Streaming",
    cost: 10,
    paymentFrequency: "Monthly",
    active: true,
    paymentMethod: "Credit Card",
    paymentDate: "2021-12-01",
    startDate: "2021-01-01",
  },
  {
    id: 2,
    name: "Spotify",
    catergory: "Streaming",
    cost: 10,
    paymentFrequency: "Monthly",
    active: false,
    paymentMethod: "Credit Card",
    paymentDate: "2021-12-01",
    startDate: "2021-01-01",
  },

  {
    id: 4,
    name: "Disney+",
    catergory: "Streaming",
    cost: 10,
    paymentFrequency: "Monthly",
    active: true,
    paymentMethod: "Credit Card",
    paymentDate: "2021-12-01",
    startDate: "2021-01-01",
  },
  {
    id: 5,
    name: "Apple Music",
    catergory: "Streaming",
    cost: 10,
    paymentFrequency: "Monthly",
    active: true,
    paymentMethod: "Credit Card",
    paymentDate: "2021-12-01",
    startDate: "2021-01-01",
  },

  {
    id: 7,
    name: "Binge",
    catergory: "Streaming",
    cost: 10,
    paymentFrequency: "Monthly",
    active: false,
    paymentMethod: "Credit Card",
    paymentDate: "2021-12-01",
    startDate: "2021-01-01",
  },
];
