import React from "react";
import Googlekeep from "./Images/GoogleKeep.png";

function Header() {
  return (
    <>
      {/* <header className="main_head">
          <div className="HEAD">
          <h3 class="title">Google Keep</h3>
      
         <img src={Googlekeep} alt="logo" className="header_image" />
         
         </div>
      </header> */}

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid HEAD">
  <img src={Googlekeep} alt="logo" className="header_image" />
    <h3 class=" title navbar-brand" href="#">Google Keep</h3>
 
  </div>
</nav>



    </>
  );
}

export default Header;
