export type Product = {
  id: number;
  productNames: string;

  mood: string;
  percent?: number;
};

export const prodData: Product[] = [
  {
    id: 1,
    productNames: "Google Chrome",
    mood: "Happy",
    percent: 40,
  },
  { id: 2, productNames: "Excel", mood: "sad", percent: 40 },
  { id: 3, productNames: "Excel", mood: "Neutral" },
];
