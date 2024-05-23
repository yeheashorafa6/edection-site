import { useRef } from "react"
import About from "./Component/About/About"
import Contact from "./Component/ContactUs/Contact"
import Footer from "./Component/Footer/Footer"
import Gallery from "./Component/Gallery/Gallery"
import Hero from "./Component/Hero/Hero"
import Navbar from "./Component/Navbar/Navbar"
import Program from "./Component/Program/Program"
import Testimoials from "./Component/Testimonials/Testimonials"
import Title from "./Component/Title/Title"
function App() {





  return (
   <>
   <Navbar />
    {/* MAIN */}
   <main>
      {/* =========== */}
      <Hero />
      {/* --------- */}

      {/* =========== */}
      <Title title={"our Program"} sub_title={"What We Offer"}  id={"program"}/>
      <Program />
      {/* --------- */}

      {/* ========= */}
      <About />
      {/* --------- */}

      {/* ========= */}
      <Title title={"Gallery"} sub_title={"Campus Photos"} id={"gallery"}/>
      <Gallery />
      {/* --------- */}

      {/* ========= */}
      <Title title={"Testimonials "} sub_title={"What Student Says"} id={"testimonials"}/>
      <Testimoials />
      {/* --------- */}

      {/* ========= */}
      <Title title={"Contact Us"} sub_title={"Get In Touch"} id={"contact"}/>
      <Contact />
      {/* --------- */}

      {/* ========= */}
      <Footer />
      {/* --------- */}



   </main>
 {/*== END ==*/}
    </>
  )
}

export default App
