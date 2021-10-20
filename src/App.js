import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./containers/projects/Projects";
import About from "./containers/about/About";
import Resume from "./containers/resume/Resume";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
