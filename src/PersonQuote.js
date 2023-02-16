import { useEffect, useRef, useState, useContext } from "react";
import axios from "axios";
import PersonImage from "./PersonImage";
import Loading from "./Loading";
import { personQuotedContext } from "./App";

const PersonQuote = () => {
  const [isLoading, setIsLoading] = useState(false);

  const firstRender = useRef(true);

  const { setPersonQuoted, personQuoted, setPersonFetched } =
    useContext(personQuotedContext);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
    },
  };

  const getQuote = async () => {
    setIsLoading(true);

    // fetch("https://quotes15.p.rapidapi.com/quotes/random/", options)
    //   .then((response) => response.json())
    //   .then((response) => console.log(response))
    //   .catch((err) => console.error(err));

    const response = await fetch(
      "https://quotes15.p.rapidapi.com/quotes/random/",
      options
    );
    const quoteData = await response.json();
    console.log(quoteData);
    setPersonQuoted(quoteData.originator.name);
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

  return <div>Hi</div>;
};

export default PersonQuote;
