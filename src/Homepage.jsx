import React from "react";
import {NavLink} from "react-router-dom";
function Homepage()
{

return(
<React.Fragment>
<div id="demo" className="carousel slide" data-ride="carousel">

  <ul className="carousel-indicators bg-dark">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
    <li data-target="#demo" data-slide-to="3"></li>


  </ul>


  <div className="carousel-inner">
    <div className="carousel-item active">

      <img src="https://www.airforce.gov.au/sites/default/files/styles/img-feature-full/public/20200304raaf8185068_0034_1.jpg?itok=vciteB6U" alt="Los Angeles" width="100%" height="475px">
        </img>
    </div>

    <div className="carousel-item">
      <img src="https://www.airforce.gov.au/sites/default/files/styles/img-450x300/public/hero/landing-pages/20170221raaf8207218_0291_0.jpg?itok=CXtemreg" alt="Chicago"width="100%" height="475px">
      </img>
    </div>
    <div className="carousel-item">
      <img src="https://www.airforce.gov.au/sites/default/files/styles/img-450x300/public/news/hero-img/20170718raaf8182715_0087.jpg?itok=B5zfXcLf" alt="New York" width="100%" height="475px"></img>
    </div>
    <div className="carousel-item">
      <img src="https://www.airforce.gov.au/sites/default/files/styles/img-450x300/public/news/hero-img/20170318raaf8161446_0001.jpg?itok=Eg2Qg_HK" alt="New York" width="100%" height="475px"></img>
    </div>
    <div className="carousel-item">
      <img src="https://www.airforce.gov.au/sites/default/files/styles/img-450x300/public/news/hero-img/20170612raaf8202385_0113.jpg?itok=TK5WZnUg" alt="New York" width="100%" height="475px"></img>
    </div>
    
  </div>


  <a className="carousel-control-prev text-dark" href="#demo" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next text-dark" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>

</div>


   
   
    
  



</React.Fragment>




);

}
export default Homepage;