import "../styles/addcard.css";

import { useState } from "react";

import firebase from "firebase/compat/app";

import { ReactComponent as CloseSVG } from "../images/close.svg";

function AddCard({ closeModal }) {
  const commentsRef = firebase.firestore().collection("comments");
  const [userComment, setUserComment] = useState("");
  const [userName, setUserName] = useState("");
  const [imageTags, setImageTags] = useState("");

  const addCardData = async (e) => {
    e.preventDefault();

    var newDocRef = commentsRef.doc();
    await newDocRef.set({
      user: userName,
      info: userComment,
      tags: imageTags,
      id: newDocRef.id,
    });
    await setUserComment("");
    setUserName("");
    setImageTags("");
    closeModal();
  };

  return (
    <div className="overlay">
      <div className="modal">
        <CloseSVG className="closeicon" onClick={closeModal} />

        <input
          value={userName}
          class="info"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Add a name..."
        />

        <input
          value={userComment}
          class="info"
          onChange={(e) => setUserComment(e.target.value)}
          placeholder="Add a comment..."
        />

        <input
          value={imageTags}
          class="info"
          onChange={(e) => setImageTags(e.target.value)}
          placeholder="Add image tags..."
        />

        <input
          type="file"
          class="filebutton"
          accept="image/png, image/jpg, image/gif, image/jpeg"
        />

        <button
          onClick={addCardData}
          disabled={!userName || !userComment || !imageTags}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddCard;
