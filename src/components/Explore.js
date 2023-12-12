import "../styles/explore.css";

import { useState } from "react";
import firebase from "firebase/compat/app";
import { useCollectionData } from "react-firebase-hooks/firestore";

function Explore() {
  const commentsRef = firebase.firestore().collection("comments");
  const [comments] = useCollectionData(commentsRef, { idField: "id" });
  console.log(comments);
  const [filterValue, setFilterValue] = useState("");

  const onChange = (e) => {
    setFilterValue(e.target.value);
  };

  return (
    <>
      <div className="explore">
        <input type="text" placeholder="Search" onChange={onChange} />
        <div className="container">
          {comments &&
            comments
              .filter((comment) =>
                comment.tags.toLowerCase().includes(filterValue.toLowerCase())
              )
              .map((comment) => (
                <img
                  src={`https://source.unsplash.com/random/?${comment.tags}`}
                  width="130px"
                  height="100px"
                  alt="image"
                />
              ))}
        </div>
      </div>
    </>
  );
}

export default Explore;
