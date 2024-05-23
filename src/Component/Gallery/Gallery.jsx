import "./Gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import gallery_1 from "./../../assets/image/gallery/gallery_1.jpg";
import gallery_2 from "./../../assets/image/gallery/gallery_2.jpg";
import gallery_3 from "./../../assets/image/gallery/gallery_3.jpg";
import gallery_4 from "./../../assets/image/gallery/gallery_1.jpg";

function Gallery() {
  const images = [
    { id: 1, src: gallery_1 },
    { id: 2, src: gallery_2 },
    { id: 3, src: gallery_3 },
    { id: 4, src: gallery_4 },

  ];

  const imageList = images.map((image) => {
    return (
      <div className="gallery p-md-2 text-center gallery my-5 my-lg-0" key={image.id}>
        <img className="img-fluid" src={image.src} />
      </div>
    );
  });

  
  return (
    <section className="gallery-section padding-section">
      <div className="container">
        <div className="row w-100">
          <div className="gallerys d-lg-flex align-items-center ">
            {imageList}
          </div>
          <div className="gallery-btn mt-4">
            <button className="btn">See More
            <span>
                <FontAwesomeIcon  className="arrow" icon={faArrowRight} />
            </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
