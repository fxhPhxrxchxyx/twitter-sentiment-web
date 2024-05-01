import axios from "axios";

export interface IGetTweetServiceResult {
    result: {
      brand: string;
        sentiment: string;
        examples: {
            sentiment: string;
            text: string;
            from: string;
        }[]
    }[]
}

export const getTweet = async (text: string) => {
  const resp = await axios.post<IGetTweetServiceResult>(
    "https://api.senti-tweet.thistine.com/sentiment",
    {
      tweet: text,
    }
  );
  return resp.data;
};
