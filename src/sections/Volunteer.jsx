import { bloom } from "../assets/images";
import { canopy } from "../assets/images";
import { countyMap } from "../assets/images";

const Volunteer = () => {
  return (
    <section id="volunteer" className="">
      <div className=" card-layout font-montserrat leading-normal text-gray">
        <img src={bloom} width={250} height={250} className="mb-4" />
        <div className="pl-4">
          <h3 className=" font-bold pb-3">BARLEYTHORPE IN BLOOM</h3>
          <p>
            Are you passionate about gardening and beautifying your community?
            Do you want to make a difference in your local environment and meet
            new people? If you answered yes to any of these questions, then you
            might be interested in joining Barleythorpe in Bloom! Barleythorpe
            in Bloom is a group of volunteers who work together to improve the
            appearance and quality of life in Barleythorpe. Our aim is to create
            attractive floral displays, enhance green spaces, promote
            biodiversity, and foster community pride. We are looking for new
            members who can help us with our projects, such as planting bulbs,
            weeding, watering, litter picking, fundraising, and more. No
            experience or skills are required, just enthusiasm and willingness
            to learn.
          </p>
        </div>
      </div>
      <div className="card-layout font-montserrat leading-normal text-gray">
        <img src={canopy} width={250} height={250} className="mb-4" />
        <div className="ml-4">
          <h3 className=" font-bold pb-3">CLIMATE CHANGE ACTION</h3>
          <p>
            Are you passionate about the environment and planting trees as part
            of Barleythorpe Climate Change Action in your community? If you are
            then you might be interested in joining Barleythorpe Climate Change
            Action! We are a group of volunteers who work together to combat
            climate change and its effects in Barleythorpe and Rutland. We are
            part of the Woodland Trust’s Big Climate Fightback campaign, which
            aims to plant 50 million trees across the UK by 2025. Our goal is to
            plant four new woods in and around Barleythorpe, which will provide
            habitat for wildlife, improve air quality, store carbon, and enhance
            the landscape. Our aim is to enhance green spaces, promote
            biodiversity, and foster community pride. We are looking for
            volunteers who can help us with planting trees. No experience or
            skills are required, just enthusiasm and willingness to learn.
          </p>
        </div>
      </div>
      <div className="card-layout font-montserrat leading-normal text-gray">
        <img src={countyMap} width={250} height={250} className="" />
        <div className="pt-3 ml-4">
          <h3 className=" font-bold pb-3">BECOME A PARISH COUNCILER</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
