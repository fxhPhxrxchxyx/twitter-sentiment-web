export type Product = {
  id: number;
  productNames: string;
  detail: string;
  mood: string;
  percent?: number;
};

export const prodData: Product[] = [
  {
    id: 1,
    productNames: "Google Chrome",
    detail: "",
    mood: "Happy",
    percent: 40,
  },
  { id: 2, productNames: "Excel", detail: "", mood: "sad", percent: 40 },
  { id: 3, productNames: "Excel", detail: "", mood: "Neutral" },
];
