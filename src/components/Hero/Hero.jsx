import "./Hero.scss";
import { CiSearch } from "react-icons/ci";
const Hero = () => {
  return (
    <section className="hero-component">
      <img
        src="/mikail-mcverry-GSL3IuuwJv8-unsplash.jpg"
        className="hero-img"
      />

      <div className="hero-contents">
        <h2 className="hero-heading-main">
          We help you to find the best property for you
        </h2>
        <h3 className="hero-sub-heading ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          beatae! Lorem ipsum dolor sit amet.
        </h3>
        <button className="hero-btn">Contact us</button>
        <h3 className="hero-heading-bottom ">What are you looking for</h3>

        <div className="hero-search-bar">
          <input type="text" />
          <span className="cursor-pointer">
            <CiSearch />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
