import { useContext } from "react";
import { personQuotedContext } from "./App";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0506cf449bmshdeb5b37664c3214p13c48cjsnc33d49ffc363",
    "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
  },
};

export const fetchQuote = async () => {
  const response = await fetch(
    "https://quotes15.p.rapidapi.com/quotes/random/",
    options
  );
  const quoteData = await response.json();
  console.log(quoteData);

  return quoteData;
};

const { Configuration, OpenAIApi } = require("openai");

export const fetchImage = async (person) => {
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createImage({
    prompt: `${person}`,
    n: 2,
    size: "1024x1024",
  });
  console.log(response);
  return response;
};
