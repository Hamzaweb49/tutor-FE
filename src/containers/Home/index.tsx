import Banner from "./Banner";
import OurMission from "./OurMission";
import { BsSearch } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="mx-auto container px-10 py-20 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <div className="relative flex items-center">
            <BsSearch className="absolute left-3 text-gray-400 text-lg" />
            <input
              className="w-full h-14 shadow-md rounded-xl text-lg pr-4 pl-10  outline-primary placeholder:font-normal"
              placeholder="Search Tutor"
            />
          </div>
          <button className="h-14 hover:opacity-80 bg-primary rounded-xl px-10 text-white text-lg mx-auto flex items-center justify-center mt-5">
            Find your tutor
          </button>
        </div>
      </div>
      <OurMission />
    </>
  );
};
export default Home;
