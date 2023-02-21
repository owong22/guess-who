import { useEffect, useState, useRef, useContext } from "react";
import Loading from "./Loading";
import { personQuotedContext } from "./App";
function PersonImage({ rerender, setRerender }) {
  const [imageData, setImageData] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const ignoreFirstCall = useRef(true);
  const ignoreSecondCall = useRef(true);
  const { personQuoted, personFetched } = useContext(personQuotedContext);
  const { Configuration, OpenAIApi } = require("openai");

  const getImage = async (person) => {
    setIsLoading(true);
    const configuration = new Configuration({
      apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createImage({
      prompt: `${person}`,
      n: 2,
      size: "1024x1024",
    });
    setImageData(response.data.data[0].url);
    setIsLoading(false);
  };

  useEffect(() => {
    if (ignoreFirstCall.current) {
      ignoreFirstCall.current = false;
      return;
    } else if (ignoreSecondCall.current) {
      ignoreSecondCall.current = false;
      return;
    } else if (personFetched) {
      getImage(personQuoted);
    }
  }, []);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="bg-blue-200">
      <img src={imageData} alt="" />
    </div>
  );
}

export default PersonImage;
