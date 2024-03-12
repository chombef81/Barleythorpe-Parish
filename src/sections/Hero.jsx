import Button from "../commponents/Button";
import { arrowRight } from "../assets/icons";
import { hero1 } from "../assets/images";
const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full flex justify-end items-center min-h-[1000px] max-container"
    >
      <img
        src={hero1}
        alt="hero image"
        width={1400}
        height={900}
        className="w-[1450px] h-[900px]"
      />
      <div className="absolute z-10 w-1/2 h-1/3 bg-white rounded-l-full flex justify-center items-center">
        <div className="z-10">
          <h1 className=" text-3xl">
            BARLEYTHORPE <br /> <span> PARISH</span> <br /> Council
          </h1>

          <Button label="About us" iconURL={arrowRight} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
