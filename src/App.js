import "./styles/app.css";

import Navbar from "./components/Navbar.js";
import Cards from "./components/Cards.js";
import Footer from "./components/Footer.js";

import Profile from "./components/Profile";
import Explore from "./components/Explore";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/myprofile" element={<Profile />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
