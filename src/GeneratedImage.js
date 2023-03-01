const GeneratedImage = ({ imageURL }) => {
  if (imageURL) {
    // Only used for css styling
    return (
      <div className="my-5">
        <div className="relative ">
          <div className="relative z-10">
            <img
              src={imageURL}
              alt=""
              className="object-cover drop-shadow-2xl w-80"
            />
          </div>
          <div className="absolute z-0 bg-purple-500 drop-shadow-2xl w-80 h-80 top-3 left-3"></div>
        </div>
      </div>
    );
  }
};

export default GeneratedImage;
