import "./About.css";
import about from "./../../assets/image/about/about.jpg";
import { FontAwesomeIcon } from "./../../../node_modules/@fortawesome/react-fontawesome";
import { faPlay } from "./../../../node_modules/@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <section className="about-section padding-section" id="about">
      <div className="row w-100">
        <div className="col-lg-4 offset-lg-1 px-5">
          <div className="about-img">
            <img src={about} alt="about" />
            <div className="play d-flex justify-content-center align-items-center">
              <FontAwesomeIcon className="play-icon" icon={faPlay} />
            </div>
          </div>
        </div>
        <div className="col-lg-7 px-lg-5 px-md-0 px-5">
          <div className="about-text mt-lg-5 mt-md-0 mt-5 ms-5">
            <h2 className="title">About Universtiy</h2>
            <h1 className="sub-title mt-lg-3">
              Nurturing Tomorrow’s Leaders Today
            </h1>
            <p className="parg mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, voluptas maxime voluptatum minus voluptatem provident
              nesciunt quod. Dolore beatae illo ex similique? Eaque iure ullam,
              eos expedita repudiandae quam numquam!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              neque ipsam ab culpa deserunt, cumque ipsa ut eos repellendus
              corporis, quo exercitationem recusandae expedita dignissimos
              pariatur rem numquam nesciunt reiciendis?
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              unde quibusdam sit blanditiis, a sed perspiciatis eveniet. Illum
              voluptate, voluptates facere provident mollitia, sequi consectetur
              ducimus sed nam, cum consequatur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
