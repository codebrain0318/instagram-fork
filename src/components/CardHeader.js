import "../styles/cardheader.css";
import { ReactComponent as MoreSVG } from "../images/more.svg";
import { ReactComponent as TrashSVG } from "../images/trash.svg";
import { useState } from "react";

import firebase from "firebase/compat/app";

function CardHeader({ id }) {
  //create a url with a random number to get different random images
  const [avatarURL] = useState(
    "https://i.pravatar.cc/" + Math.round(Math.random() * 500),
  );

  //firebase database access
  const firestore = firebase.firestore();
  const commentsRef = firestore.collection("comments");

  //delete a record with the id
  const handleDelete = () => {
    //alert("hooray");
    commentsRef.doc(id).delete();
  };

  //capture hover state
  const [hovering, setHovering] = useState(false);

  return (
    <div className="cardheader">
      <img className="avatarimg" src={avatarURL} alt="avatar" />

      <div
        onClick={() => handleDelete()}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {hovering ? <TrashSVG /> : <MoreSVG />}
      </div>
    </div>
  );
}

export default CardHeader;
