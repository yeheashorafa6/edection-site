import "./Navbar.css";
import logo from "./../../assets/logo.png";
import { useState } from "react";
import menu from "./../../assets/menu.png";

function Navbar() {
  const items = [
    { id: "home", name: "Home" },
    { id: "program", name: "Program" },
    { id: "about", name: "About Us" },
    { id: "gallery", name: "Campus" },
    { id: "testimonials", name: "Testimonials" },
  ];


  const itemList = items.map((item) => {
    const active = item.name === "Home" ? "active" : "";
  return <li  key={item.id} className={`nav-item me-lg-4`}>
    <a href={`#${item.id}`} className={`nav-link ${active}`}>{item.name}</a>
  </li>;
  });

  const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);
  const color =  colorChange  ? "navbar colorChange" : "navbar"

  const [mobileMenu , setMobileMenu] = useState(false);

  const toggleMenu = () =>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <>
   {/* HEADER SECTION */}
      <header>
        <nav className={`Navbar w-100 ${color}`} id="home">
          <div className="row w-100">
            <div className="col-3 ms-lg-5 mt-2">
              <div className="nav-logo">
                <img className="nav-logo-img mb-3" src={logo} alt="logo" />
                <span>
                  <h2 className="d-inline-block nav-title">Edusity</h2>
                </span>
              </div>
            </div>

            <div className="col-8 nav-list mt-3">
            <img src={menu} alt="menu" className="menu" onClick={toggleMenu}/>
              <ul className={mobileMenu ? "hide-mobile-menu nav-items" : `nav-items`}>
                {itemList}
                <li className={`nav-item`} >
                    <button className="btn">Content Us</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    {/*== END == */}
    </>
  );
}

export default Navbar;
