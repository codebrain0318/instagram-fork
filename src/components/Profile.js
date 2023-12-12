import "../styles/profile.css";

import { Link } from "react-router-dom";

function Profile() {
   return (
      <>
         <div className="profile">
            <h2>This is a new page</h2>
            <p> Take me <Link to="/">Home</Link> </p>
         </div>
      </>
   );
   
}

export default Profile;