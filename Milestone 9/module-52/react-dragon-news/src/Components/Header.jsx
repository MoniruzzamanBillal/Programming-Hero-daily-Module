import Marquee from "react-fast-marquee";
import moment from "moment";

const Header = () => {
  return (
    <div className=" headerContainer py-3   flex flex-col justify-center items-center ">
      {/* img top  */}
      <div className="imgTop mb-3">
        <img src="../../src/assets/logo.png" alt="" />
      </div>
      {/* img top  */}

      <p className=" mb-2 dark3 ">Journalism Without Fear or Favour</p>
      <p className=" mb-6 "> {moment().format("dddd, LL")} </p>

      {/* breaking news  */}
      <div className="breakingNewsContainer bg-gray-200 py-2 px-4 flex ">
        <div className="latestBtn  ">
          <button className=" bg-red-400 py-2 px-6 rounded text-white font-semibold ">
            Latest
          </button>
        </div>
        <Marquee className="  ">
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
      {/* breaking news  */}
    </div>
  );
};

export default Header;
