import { useEffect, useState } from "react";

function PersonImage() {
  const [hash, setHash] = useState([]);
  const [imageData, setImageData] = useState("");

  const { Configuration, OpenAIApi } = require("openai");

  const getImage = async () => {
    const configuration = new Configuration({
      apiKey: "",
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createImage({
      prompt: "Mike Tyson",
      n: 2,
      size: "1024x1024",
    });
    console.log(response.data.data[0].url);
  };

  return (
    <div className="bg-blue-200">
      <button
        onClick={() => {
          getImage();
        }}
      >
        Get Image
      </button>
      <h1>hi</h1>
    </div>
  );
}

export default PersonImage;
