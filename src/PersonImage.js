import { useEffect, useState } from "react";

const PersonImage = ({ person }) => {
  const { Configuration, OpenAIApi } = require("openai");
  const getImage = async () => {
    const configuration = new Configuration({
      apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createImage({
      prompt: "Ghandi",
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
      <PersonImage person={"tom cruise"}></PersonImage>
    </div>
  );
};

export default PersonImage;
