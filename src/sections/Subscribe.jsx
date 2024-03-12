import Button from "../commponents/Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center flex-col gap-10"
      id="Subscribe"
    >
      <h3 className="text-4xl leading-[64px] font-palanquin font-bold">
        Sign up for our<span className=" text-green-800"> News Letter</span>
      </h3>
      <div className=" lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-400 rounded-full">
        <input
          type="text"
          placeholder="subscribe@barleythorpeparish.com"
          className=" input"
        />
        <div className=" flex max-sm:justify-end items-center max-sm:w-full">
          <Button lable="sign up" fullWith />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
