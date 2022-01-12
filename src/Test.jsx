import React, { Fragment } from "react";
import Navigation from "./Navigation";
function Test()
{

return(
<React.Fragment>

<Navigation/>

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
      <img src="https://www.bing.com/images/search?view=detailV2&ccid=0s6Q%2bswT&id=F2CE1085B0CCF33FECD7751D816C48B203ED04D5&thid=OIP.0s6Q-swTv6O8v__-YoQ-SwHaEK&mediaurl=https%3a%2f%2fmilitaryleak.com%2fwp-content%2fuploads%2f2018%2f06%2fmikoyan-mig-29-jet-fighter-aircraft-wallpapers.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.d2ce90facc13bfa3bcbffffe62843e4b%3frik%3d1QTtA7JIbIEddQ%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1920&q=Fighter+planes&simid=608044198234388997&FORM=IRPRST&ck=AB4F1326AF39C502D70CE25B0B7942D4&selectedIndex=1" alt="Chicago"width="100%" height="475px">
      </img>
    </div>
    <div className="carousel-item">
      <img src="https://www.bing.com/images/search?view=detailV2&ccid=i7Yd2ybT&id=427E1037FAE9F403048C3B532F049D88B0FCB0D9&thid=OIP.i7Yd2ybT_fp9X-iKQFGy2wHaEo&mediaurl=https%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2019%2f09%2f250649-mig-31-fighter-jet-military-airplane-plane-russian-mig-27-2.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.8bb61ddb26d3fdfa7d5fe88a4051b2db%3frik%3d2bD8sIidBC9TOw%26pid%3dImgRaw%26r%3d0&exph=1200&expw=1920&q=Fighter+planes&simid=608042660641447798&FORM=IRPRST&ck=4939ABDAFFB4F35575023F81AD05E5E7&selectedIndex=2" alt="New York" width="100%" height="475px"></img>
    </div>
    <div className="carousel-item">
      <img src="https://www.bing.com/images/search?view=detailV2&ccid=oeaW6Eym&id=2A28BC7CF450CEA82F0E313141FDBC1F9618EEA6&thid=OIP.oeaW6EymQDGr8J-6HizHzAHaEK&mediaurl=https%3a%2f%2fwww.airforce-technology.com%2fwp-content%2fuploads%2fsites%2f4%2f2016%2f07%2fImage-2-MiG-29SMT-Fulcrum-Multirole-Fighter-Aircraft.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.a1e696e84ca64031abf09fba1e2cc7cc%3frik%3dpu4Ylh%252b8%252fUExMQ%26pid%3dImgRaw%26r%3d0&exph=720&expw=1280&q=Fighter+planes&simid=608052496120834217&FORM=IRPRST&ck=60C8C3C43F97B42C027C0469EFD01570&selectedIndex=9" alt="New York" width="100%" height="475px"></img>
    </div>
    <div className="carousel-item">
      <img src="https://www.bing.com/images/search?view=detailV2&ccid=frkO0z4v&id=8E4288F489C5AA42C86F8F35055BA25535FB3D0B&thid=OIP.frkO0z4vmGLBmHt4QpsLkwHaEL&mediaurl=https%3a%2f%2fcdn-images-1.medium.com%2fmax%2f1200%2f1*2GtlSZ1oN6nDh6vgvQr16Q.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.7eb90ed33e2f9862c1987b78429b0b93%3frik%3dCz37NVWiWwU1jw%26pid%3dImgRaw%26r%3d0&exph=677&expw=1200&q=Fighter+planes&simid=607995836909649020&FORM=IRPRST&ck=E48FCC905222307E24E34DF2F806447C&selectedIndex=6" alt="New York" width="100%" height="475px"></img>
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
export default Test;