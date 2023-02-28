import GuessBox from "./GuessBox";

const Quote = ({ quote }) => {
  return (
    <div>
      <div>"{quote}"</div>
      <GuessBox></GuessBox>
    </div>
  );
};

export default Quote;
