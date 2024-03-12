import { aims } from "../constants";
import Slider from "../commponents/Slider";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Aims = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };
  return (
    <section>
      <div className="relative flex items-center">
        <MdChevronLeft
          className=" opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={60}
        />
        <div
          id="slider"
          className="relative flex items-center overflow-x-scroll scroll scroll-smooth scrollbar-hide"
        >
          {aims.map((image) => (
            <div key={image} className="">
              <Slider imgURL={image} />
            </div>
          ))}
        </div>
        <MdChevronRight
          className=" opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={60}
        />
      </div>
    </section>
  );
};

export default Aims;
