import "./Hero.css";
import { FontAwesomeIcon } from "./../../../node_modules/@fortawesome/react-fontawesome";
import { faArrowRight } from "./../../../node_modules/@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
  <>
    {/* HERO SECTION */}
    <section className="section-hero d-flex align-items-center justify-content-center" id="hero">
      <div className="hero ">
        <h1 className="hero-title">
          We Ensure Better Education For A Better Word{" "}
        </h1>
        <p className="hero-sub-title mt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          odit nobis repellendus, veritatis iste, minus natus voluptates, 
        </p>
        <div className="hero-explore mt-4">
          <button className="btn">Explore More 
            <span>
                <FontAwesomeIcon  className="arrow" icon={faArrowRight} />
            </span>
          </button>
        </div>
      </div>
    </section>
    {/*== END == */}

    </>

  );
}

export default Hero;
