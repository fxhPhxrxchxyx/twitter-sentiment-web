import axios from "axios";
import { BrandSentiment } from "./components/content/Name";

export interface IGetTweetServiceResult {
  result: BrandSentiment[];
}

export const getTweet = async (text: string) => {
  const resp = await axios.post<IGetTweetServiceResult>(
    "https://api.senti-tweet.thistine.com/sentiment",
    {
      tweet: text,
    }
  );
  console.log(resp.data);
  return resp.data;
};
