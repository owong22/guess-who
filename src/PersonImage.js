import { useEffect, useState, useRef, useContext } from "react";

function PersonImage({ newPerson }) {
  const [imageData, setImageData] = useState("");
  const [person, setPerson] = useState(newPerson);
  const [isLoading, setIsLoading] = useState(false);
  const ignoreFirstCall = useRef(true);
  const { Configuration, OpenAIApi } = require("openai");

  const getImage = async (person) => {
    setIsLoading(true);
    const configuration = new Configuration({
      apiKey: "",
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createImage({
      prompt: `${person}`,
      n: 2,
      size: "1024x1024",
    });

    console.log(response.data.data[0].url);
    setImageData(response.data.data[0].url);
    setIsLoading(false);
  };

  useEffect(() => {
    if (ignoreFirstCall.current) {
      ignoreFirstCall.current = false;
      return;
    } else {
      getImage(person);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="w-[1024px] h-[1024px] mx-auto my-0 border-2 border-gray-600 rounded-full animate-spin border-t-gray-200"></div>
    );
  }

  return (
    <div className="bg-blue-200">
      <img src={imageData} alt="" />
    </div>
  );
}

export default PersonImage;
