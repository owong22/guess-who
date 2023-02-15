import "./App.css";
import PersonImage from "./PersonImage";

import { useEffect, useState } from "react";

function App() {
  //   const [hash, setHash] = useState([]);
  //   const [imageData, setImageData] = useState("");

  //   const { Configuration, OpenAIApi } = require("openai");

  //   const getImage = async () => {
  //     const configuration = new Configuration({
  //       apiKey: "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",
  //     });
  //     const openai = new OpenAIApi(configuration);
  //     const response = await openai.createImage({
  //       prompt: "Ghandi",
  //       n: 2,
  //       size: "1024x1024",
  //     });
  //     console.log(response.data.data[0].url);
  //   };

  return (
    <div className="bg-blue-200">
      {/* <button
        onClick={() => {
          getImage();
        }}
      >
        Get Image
      </button> */}
      <h1>hi</h1>
      <PersonImage person={"tom cruise"}></PersonImage>
    </div>
  );
}

export default App;
