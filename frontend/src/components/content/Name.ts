export type BrandSentiment = {
  sentiment: string;
  brand: string;
  examples: TweetSentiment[];
};

export type TweetSentiment = {
  sentiment: string;
  text: string;
  from: string;
};
