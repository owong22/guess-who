const Introduction = ({ setIntroduction }) => {
  return (
    <div>
      <h1 className="text-2xl text-white">
        Hello, welcome to "guess who". Guess the famous individual using one of
        their quotes and a text to image generator from open AI's DALLE 2. Have
        fun!
      </h1>
      <button
        onClick={() => setIntroduction(false)}
        className="px-3 py-2 text-black bg-purple-300 rounded-sm animate-bounce mt-7"
      >
        Let's Go!
      </button>
    </div>
  );
};

export default Introduction;
