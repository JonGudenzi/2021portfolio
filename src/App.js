import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";


function App() {
  return (

    <Router>

      <div>
        <Nav />
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
