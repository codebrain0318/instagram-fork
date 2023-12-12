import "../styles/cards.css";

import Card from "./Card";

import firebase from "firebase/compat/app";
import { useCollectionData } from "react-firebase-hooks/firestore";

function Cards() {
  const commentsRef = firebase.firestore().collection("comments");
  const [comments] = useCollectionData(commentsRef, { idField: "id" });

  return (
    <div className="cards">
      {comments &&
        comments.map((comment) => (
          <Card
            image={`https://source.unsplash.com/random/?${comment.tags}`}
            user={comment.user}
            info={comment.info}
            tags={comment.tags}
            key={comment.id}
            id={comment.id}
          />
        ))}
    </div>
  );
}

export default Cards;
