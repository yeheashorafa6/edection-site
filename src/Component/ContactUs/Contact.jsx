import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faMessage,
  faPhone,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Contact() {
  const [result, setResult] = useState("");

  const [formInput, setFormInput] = useState({
    name: "",
    phoneNumber: "",
    message: "",
  });

  const misInput =
    formInput.name == "" ||
    formInput.phoneNumber == "" ||
    formInput.message == "";

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1394ff52-77b0-4d7b-87c2-841bf978a50b");

    if (!misInput) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("SomeThing Error ! Try Agine ...");
      event.target.reset();
      result.target.value.reset();
    // setResult(" ");

    }
    
  };

  const items = [
    { id: 1, icon: faMessage, caption: "yeheashorafa6@gmail" },
    { id: 2, icon: faPhone, caption: "+1 234-567-89" },
    {
      id: 3,
      icon: faAddressCard,
      caption: "lababedi st, gaza , gaza strip ,0972 , palestine ",
    },
  ];

  const itemList = items.map((item) => {
    return (
      <li className="message-items mt-3" key={item.id}>
        <span className="me-2">
          <FontAwesomeIcon className="arrow" icon={item.icon} />
        </span>
        {item.caption}
      </li>
    );
  });
  return (
    <section className="section-contactus padding-section">
      <div className="row w-100">
        <div className="col-lg-5 offset-lg-1">
          <div className="message-content">
            <h2 className="message-title me-2">
              Sens Us A Message
              <span className="ms-2">
                <FontAwesomeIcon className="message" icon={faMessage} />
              </span>
            </h2>
            <p className="mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              eius laudantium veniam asperiores in suscipit fuga voluptates
              aspernatur eveniet dolore expedita temporibus explicabo vel optio
              tempora nam, repellendus deserunt dignissimos!
            </p>
          </div>
          <div className="message-contact">
            <ul className="message-list mt-4">{itemList}</ul>
          </div>
        </div>
        <div className="col-lg-6">
          <form className="ms-3" onSubmit={onSubmit}>
            <div className="form-group my-4">
              <label htmlFor="name" className="label-input mb-2">
                Your Name :
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Your Name"
                value={formInput.name}
                onChange={(event) => {
                  setFormInput({ ...formInput, name: event.target.value });
                }}
              />
            </div>
            <div className="form-group my-4">
              <label htmlFor="number" className="label-input mb-2">
                Your Number :
              </label>
              <input
                type="number"
                className="form-control"
                id="number"
                placeholder="Enter Your Number"
                value={formInput.phoneNumber}
                onChange={(event) => {
                  setFormInput({
                    ...formInput,
                    phoneNumber: event.target.value,
                  });
                }}
              />
            </div>
            <div className="form-group my-4">
              <label htmlFor="message" className="label-input mb-2">
                Your Message :
              </label>
              <textarea
                id="message"
                className="form-control"
                rows="4"
                placeholder="Enter Your Message"
                value={formInput.message}
                onChange={(event) => {
                  setFormInput({ ...formInput, message: event.target.value });
                }}
              ></textarea>
            </div>
            <button type="submit" className="btn">
              Submit Now
              <span>
                <FontAwesomeIcon className="arrow" icon={faArrowRight} />
              </span>
            </button>
          </form>
          <div className="message-sending">
            <span className={misInput ? "red" : "green"}>{result}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
