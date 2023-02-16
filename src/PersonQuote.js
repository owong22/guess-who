import { useEffect, useRef, useState, useContext } from "react";
import axios from "axios";
import PersonImage from "./PersonImage";
import Loading from "./Loading";
import { personQuotedContext } from "./App";

const PersonQuote = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [quote, setQuote] = useState("");
  const firstRender = useRef(true);

  const { setPersonQuoted, personQuoted, setPersonFetched } =
    useContext(personQuotedContext);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0506cf449bmshdeb5b37664c3214p13c48cjsnc33d49ffc363",
      "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
    },
  };

  const getQuote = async () => {
    setIsLoading(true);

    const response = await fetch(
      "https://quotes15.p.rapidapi.com/quotes/random/",
      options
    );
    const quoteData = await response.json();
    console.log(quoteData);
    setPersonQuoted(quoteData.originator.name);
    setQuote(quoteData.content);
    setPersonFetched(true);
    setIsLoading(false);
  };

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    getQuote();
  }, []);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return <div>{quote}</div>;
};

export default PersonQuote;
