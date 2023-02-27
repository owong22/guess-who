import { useState, createContext, useContext, useEffect, useRef } from "react";
import { fetchQuote, fetchImage } from "./fetchData";
import { useQuery, QueryClient } from "@tanstack/react-query";

import Loading from "./Loading";
import Quote from "./Quote";
import GeneratedImage from "./GeneratedImage";
import CorrectGuess from "./CorrectGuess";

export const renderContext = createContext(); // Test

export const ReactQuery = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertValue, setAlertValue] = useState("Incorrect");
  const {
    data: quote,
    refetch: quoteRefetch,
    isFetching: quoteFetching,
  } = useQuery({
    queryKey: ["quote"],
    queryFn: fetchQuote,
    enabled: false,
  });

  const person = quote?.originator.name;

  const {
    data: image,
    refetch: imageRefetch,
    isFetching: imageFetching,
  } = useQuery({
    queryKey: ["image", person],
    queryFn: () => fetchImage(person),
    enabled: !!person,
  });

  useEffect(() => {
    quoteRefetch();
  }, []);

  if (showAlert) {
    return (
      <CorrectGuess
        setShowAlert={setShowAlert}
        alertValue={alertValue}
      ></CorrectGuess>
    );
  }

  if (imageFetching || quoteFetching) {
    return <Loading></Loading>;
  }

  if (
    quote?.originator.name === "Mwanandeke Kindembo" ||
    quote?.originator.name === "Miyuru Amarasiri" ||
    quote?.originator.name === "Cornelius Keagon" ||
    quote?.originator.name === "Rumi" ||
    quote?.originator.name === "bts" ||
    quote?.originator.name === "Adolf Hitler"
  ) {
    quoteRefetch();
  }

  let personQuoted = quote?.originator.name;

  return (
    <renderContext.Provider
      value={{ quoteRefetch, personQuoted, setShowAlert, setAlertValue }}
    >
      <div>
        <Quote quote={quote?.content}></Quote>
        <h1>{quote?.originator.name}</h1>
        <GeneratedImage imageURL={image?.data.data[0].url}></GeneratedImage>
        <button onClick={imageRefetch} className="flex">
          Generate Another Image
        </button>
        <button onClick={quoteRefetch} className="flex">
          Skip this Person
        </button>
      </div>
    </renderContext.Provider>
  );
};
