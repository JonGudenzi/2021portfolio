import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Work from "./components/pages/Work";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div>
        
        <NavTabs />
        <Switch>
        <Route exact path={["/", "/2021portfolio"]} component={Home} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
