import axios from "axios";

export const getTweet = async (text: string) => {
  const resp = await axios.post("api.senti-tweet.thistine.com/sentiment", {
    text,
  });
  return resp.data;
};
