import "./Testimoials.css";
import { FontAwesomeIcon } from "./../../../node_modules/@fortawesome/react-fontawesome";
import { faArrowRight ,faArrowLeft } from "./../../../node_modules/@fortawesome/free-solid-svg-icons";
import user_1 from "./../../assets/image/testimonials/user_1.jpeg";
import user_2 from "./../../assets/image/testimonials/user_2.jpeg";
import user_3 from "./../../assets/image/testimonials/user_3.jpeg";
import user_4 from "./../../assets/image/testimonials/user_4.jpeg";
import { useRef } from "react";

function Testimonials() {
  const items = [
    {
      id: 1,
      image: user_1,
      name: "Yehea Shorafa",
      place: "Remal , Gaza",
      comment:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque asperiores ad natus, laboriosam esse pariatur magnam",
    },
    {
      id: 2,
      image: user_2,
      name: "Eman Ahmed",
      place: "New York , USA",
      comment:
        "  in iusto nemo sunt vero officia saepe consectetur omnis a dolores inventore cupiditate.",
    },
    {
      id: 3,
      image: user_3,
      name: "Omer Khaild",
      place: "Abu Dhabi , UAK",
      comment:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,voluptates! Aspernatur aliquid eveniet, ullam eos",
    },
    {
      id: 4,
      image: user_4,
      name: "Ahmed Mohammed",
      place: "Lababidi , Gaza",
      comment:
        "ullam eos, iusto delectus in perspiciatis optio facilis nulla libero eaque repellendus voluptates laudantium placeat cumque quasi!",
    },
  ];

  const listItems = items.map((item) => {
    return (
      <li className="slider-items" key={item.id}>
        <div className="slide">
          <div className="user-info">
            <img src={item.image} alt="image" />
            <div className="user-text ms-2">
              <h3 className="user-name">{item.name}</h3>
              <span className="user-place">{item.place}</span>
            </div>
          </div>
          <p className="user-comment">{item.comment}</p>
        </div>
      </li>
    );
  });

  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -(items.length - 1) * 25) {
      tx -= 25; 
    } else {
      tx = 0; // Reset to the first slide
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25; 
    } else {
      tx = -(items.length - 1) * 25; // Go to the last slide
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  
  return (
    <section className="testimonials-section margin-section padding-x-section">
      <div className="container d-flex align-items-center">
        <div className="btn-arrow">
          <FontAwesomeIcon
            onClick={slideBackward}
            className="left-arrow"
            icon={faArrowLeft}
          />
          <FontAwesomeIcon
            onClick={slideForward}
            className="right-arrow"
            icon={faArrowRight}
          />
        </div>
        <div  className="slider mt-lg-4">
          <ul ref={slider} className="slider-list">{listItems}</ul>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
