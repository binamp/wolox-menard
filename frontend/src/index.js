import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";
import "../src/styles.module.scss";
import Home from "./components/pages/Home/home";
import ContactUs from "./components/pages/ContactUs/contactus";
import PoloLessons from "./components/pages/PoloLessons/pololessons";
import PoloHoliDays from "./components/pages/PoloHoliDays/poloholidays";
import LiveryService from "./components/pages/LiveryServices/liveryservice";
import TeamManagement from "./components/pages/TeamManagement/teammanagement";
import HorseForSale from "./components/pages/HorsesForSale/horsesforsale";
import Error from "./components/pages/Error/error";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/lessons" component={PoloLessons} />
      <Route path="/holidays" component={PoloHoliDays} />
      <Route path="/services" component={LiveryService} />
      <Route path="/management" component={TeamManagement} />
      <Route path="/sale" component={HorseForSale} />
      <Route path="/contact" component={ContactUs} />
      <Route path="/" component={Error} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
