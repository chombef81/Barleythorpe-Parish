const Slider = ({ imgURL }) => {
  return (
    <div>
      <div className="flex flex-col text-center font-montserrat leading-normal text-lg text-gray justify-center items-center bg-stone-300 shadow-2xl  rounded-xl w-[350px] h-full p-3 hover:scale-105 ease-in-out duration-300 mx-3">
        <img
          src={imgURL.picture}
          alt="card collection"
          width={300}
          height={300}
          className="w-[300px] h-[300px] mb-3"
        />
        <p>{imgURL.aim}</p>
      </div>
    </div>
  );
};

export default Slider;
