import { useEffect, useState, useRef, useContext } from "react";
import Loading from "./Loading";
import { personQuotedContext } from "./App";
function PersonImage() {
  const [imageData, setImageData] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const ignoreFirstCall = useRef(true);

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
    } else if (personFetched) {
      getImage(personQuoted);
    }
  }, [personQuoted]);

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
