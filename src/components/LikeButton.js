import "../styles/likebutton.css"
import { ReactComponent as LikeSVG } from "../images/like.svg";
import { ReactComponent as LikeFillSVG } from "../images/likefill.svg";
import { useState } from "react";

function LikeButton() {
   
  const [likePost, setLikePost] = useState(false);

  return (

      <div 
        className = "likebutton"
        onClick={() => setLikePost((prevState) => !prevState)}
        >

        { likePost ? <LikeFillSVG className="icon" /> : <LikeSVG className="icon" /> }
      
      </div>

  );
}

export default LikeButton;