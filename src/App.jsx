import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import SectionAboutUs from "./components/SectionAboutUs.jsx";
import SectionProgram from "./components/SectionProgram.jsx";
import Error404 from "./pages/Error404.jsx";


function App() {

  return (
<Router>
      <Header />

      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/*/!* About page *!/*/}
        <Route path="/about" element={<SectionAboutUs />} />
        {/*/!*  Gallery *!/*/}
        {/*<Route path="/gallery" element={<Blogs />} />*/}
        {/*  /!*  Programs *!/*/}
        <Route path="/programs" element={<SectionProgram />} />
        {/*/!*  Contact Us*!/*/}
        {/*<Route path="/contact-us" element={<Contacts/>} />*/}

        {/*/!* Redirect unknown routes to home *!/*/}
        <Route path="*" element={<Error404/>} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
