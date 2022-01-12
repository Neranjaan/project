import React from "react";
function Carousel()
{

return(
<React.Fragment>

<div id="demo" className="carousel slide" data-ride="carousel">

  <ul className="carousel-indicators bg-dark">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
    <li data-target="#demo" data-slide-to="3"></li>
    <li data-target="#demo" data-slide-to="4"></li>
    

  </ul>


  <div className="carousel-inner">
    <div className="carousel-item active">

      <img src="https://dubaischolars.com/wp-content/uploads/2021/08/Slider-DS-2-01-1024x360.png" alt="Los Angeles" width="100%" height="475px">
        </img>
    </div>

    <div className="carousel-item">
      <img src="https://dubaischolars.com/wp-content/uploads/2021/01/banner1-1024x360.png" alt="Chicago"width="100%" height="475px">
      </img>
    </div>
    <div className="carousel-item">
      <img src="https://dubaischolars.com/wp-content/uploads/2021/01/banner2-1024x360.png" alt="New York" width="100%" height="475px"></img>
    </div>
    <div className="carousel-item">
      <img src="https://dubaischolars.com/wp-content/uploads/2021/01/banner3-1024x360.png" alt="New York" width="100%" height="475px"></img>
    </div>
    <div className="carousel-item">
      <img src="https://dubaischolars.com/wp-content/uploads/2021/01/banner4-1024x360.png" alt="New York" width="100%" height="475px"></img>
    </div>
    <div className="carousel-item">
      <img src="https://dubaischolars.com/wp-content/uploads/2021/01/banner5-1024x360.png" alt="New York" width="100%" height="475px"></img>
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
export default Carousel;