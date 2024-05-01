import axios from "axios";

export const getTweet = async (text: string) => {
  const resp = await axios.post(
    "https://api.senti-tweet.thistine.com/sentiment",
    {
      tweet: text,
    }
  );
  return resp.data;
};
