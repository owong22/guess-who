import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

const encodedParams = new URLSearchParams();
encodedParams.append("prompt", "dog");
encodedParams.append("id", "12345");
encodedParams.append("width", "512");
encodedParams.append("height", "512");
encodedParams.append("inferenceSteps", "50");
encodedParams.append("guidanceScale", "7.5");
const options = {
  method: "POST",
  url: "https://arimagesynthesizer.p.rapidapi.com/generate",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": "0506cf449bmshdeb5b37664c3214p13c48cjsnc33d49ffc363",
    "X-RapidAPI-Host": "arimagesynthesizer.p.rapidapi.com",
  },
  data: encodedParams,
};

const options2 = {
  method: "GET",
  url: "https://arimagesynthesizer.p.rapidapi.com/get",
  params: { hash: "c295134e2823339e35f5ae0b6809d3b3", returnType: "image" },
  headers: {
    "X-RapidAPI-Key": "0506cf449bmshdeb5b37664c3214p13c48cjsnc33d49ffc363",
    "X-RapidAPI-Host": "arimagesynthesizer.p.rapidapi.com",
  },
};
function App() {
  const [imageData, setImageData] = useState();
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    axios
      .request(options2)
      .then(function (response) {
        console.log(response.data);
        // setImageData(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return <div className="bg-blue-200"></div>;
}

export default App;
