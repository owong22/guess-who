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
    refetchOnWindowFocus: false,
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
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    quoteRefetch(); // Commented out to make styling easier
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
    quote?.originator.name === "Adolf Hitler" ||
    quote?.originator.name === "Matka Tereza"
  ) {
    quoteRefetch();
  }

  let personQuoted = quote?.originator.name;

  return (
    <renderContext.Provider
      value={{ quoteRefetch, personQuoted, setShowAlert, setAlertValue }}
    >
      <div className="flex flex-col">
        <div>
          <h1 className="flex justify-center pb-2 text-gray-300 underline text-7xl">
            Guess Who
          </h1>
        </div>
        <div className="mx-auto">
          <GeneratedImage imageURL={image?.data.data[0].url}></GeneratedImage>
        </div>
        <div className="my-3">
          <Quote quote={quote?.content} person={quote?.originator.name}></Quote>
        </div>
        <div className="flex justify-center ">
          <button
            onClick={imageRefetch}
            className="flex px-3 py-2 mx-3 text-white bg-purple-500 rounded-md drop-shadow-2xl hover:bg-purple-600"
          >
            Generate Image
          </button>
          <button
            onClick={quoteRefetch}
            className="flex px-3 py-2 mx-3 text-white bg-red-500 rounded-md hover:bg-red-600 drop-shadow-2xl"
          >
            Skip this Person
          </button>
        </div>
      </div>
    </renderContext.Provider>
  );
};
