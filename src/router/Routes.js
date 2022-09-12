import React from "react";
import Preview from "../views/Preview";
// import HomeLightAnimation from "../views/all-home-version/HomeLightAnimation";
// import HomeTyperCreative from "../views/all-home-version/HomeTyperCreative";
// import HomeParallaxTyper from "../views/all-home-version/HomeParallaxTyper";
import HomeDarkAnimation from "../views/all-home-version/HomeDarkAnimation";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route exact path='/' component={HomeDarkAnimation} />
          {/* <Route path="/home-light-animation" component={HomeLightAnimation} /> */}
          <Route path='/home-dark-animation' component={HomeDarkAnimation} />
          {/* <Route path="/home-typer-creative" component={HomeTyperCreative} /> */}
          {/* <Route path="/home-parallax-typer" component={HomeParallaxTyper} /> */}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
