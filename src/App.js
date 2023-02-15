import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [hash, setHash] = useState([]);
  const [imageData, setImageData] = useState("");

  const { Configuration, OpenAIApi } = require("openai");

  //   const options = {
  //     method: "POST",
  //     url: "https://arimagesynthesizer.p.rapidapi.com/generate",
  //     headers: {
  //       "content-type": "application/x-www-form-urlencoded",
  //       "X-RapidAPI-Key": "0506cf449bmshdeb5b37664c3214p13c48cjsnc33d49ffc363",
  //       "X-RapidAPI-Host": "arimagesynthesizer.p.rapidapi.com",
  //     },
  //     data: encodedParams,
  //   };

  //   const getImageData = () => {
  //     axios
  //       .request(options)
  //       .then(function (response) {
  //         setHash([...hash, response.data]);
  //         console.log(response);
  //         // console.log(hash);
  //       })
  //       .catch(function (error) {
  //         console.error(error);
  //       });
  //   };

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
      <button onClick={() => {}}>Press</button>
      <button
        onClick={() => {
          getImage();
        }}
      >
        Get Image
      </button>
    </div>
  );
}

export default App;
