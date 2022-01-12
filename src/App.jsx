
import React from "react";
import Navigation from "./Navigation";
import Carousel from  "./Carousel";
import Carddeck from  "./Carddeck";
import Text from  "./Text";
import Hooks from "./Hooks"
import Schoolfees from "./Schoolfees"
import Schoolhours from "./Schoolhours"
import Academicboosters from "./Academicboosters"
import Vision from "./Vision"
import Homepage from "./Homepage"
import {Route,Switch} from "react-router-dom";
import Ourmission from "./Ourmission"
import Employmentoffers from "./Employmentoffers"
import Aboutus from "./Aboutus"
import Test from "./Test"
import Operations from "./Operations"
import Ourpeople from "./Ourpeople"
import Technology from "./Technology"
import Newsandevents from "./Newsandevents"

function App() {
  return (
   <>
  <Navigation/>

<Switch>
<Route exact path="/" component={Homepage}/>
  <Route exact path="/aboutus" component={Aboutus}/>
  <Route exact path="/operations" component={Operations}/>
  <Route exact path="/ourmission" component={Ourmission}/>
<Route exact path="/ourpeople" component={Ourpeople}/>
<Route exact path="/technology" component={Technology}/>
<Route exact path="/newsandevents" component={Newsandevents}/>

  

</Switch>


   </>
  );
}

export default App;

