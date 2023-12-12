import "../styles/card.css";

import CardHeader from "./CardHeader.js";
import LikeButton from "./LikeButton.js";

function Card({image,user,info,tags,id}) {

   return (

      <div className="card">
         <CardHeader id = {id} />
         <img className="cardimage" src={image} alt="card" />
         <LikeButton/>
         <h3>{user}</h3>
         <p>{info}</p>
         <h6>{tags}</h6>
      </div>
      
   );
}

export default Card;
