const Introduction = ({ setIntroduction }) => {
  return (
    <div>
      <h1 className="text-5xl">
        Hello, welcome to "guess who". Guess the famous individual using one of
        their quotes and a text to image generator from open AI's DALLE 2. Have
        fun!
      </h1>
      <button onClick={() => setIntroduction(false)}>Let's Go!</button>
    </div>
  );
};

export default Introduction;
