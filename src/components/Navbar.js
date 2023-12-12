import "../styles/navbar.css";

import { useState } from "react";

import AddCard from "./AddCard";

import { ReactComponent as HomeSVG } from "../images/home.svg";
import { ReactComponent as AddSVG } from "../images/add.svg";
import { ReactComponent as ProfileSVG } from "../images/profile.svg";
import { ReactComponent as LikeSVG } from "../images/like.svg";
import { ReactComponent as ExploreSVG } from "../images/telegram.svg";

import { Link } from "react-router-dom";

function Navbar() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div>
      {isOpenModal && <AddCard closeModal={closeModal} />}
      <div className="navbar">
        <Link to="/">
          <img
            className="logo"
            src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
            alt="logo"
          />
        </Link>
        <div className="menu">
          <Link to="/">
            <HomeSVG className="icon" />
          </Link>

          <Link to="/explore">
            <ExploreSVG className="icon" />
          </Link>

          <AddSVG onClick={openModal} className="icon" />

          <Link to="/">
            <LikeSVG className="icon" />
          </Link>

          <Link to="/myprofile">
            <ProfileSVG className="icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
