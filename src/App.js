import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Blog from './Components/Blog/Blog';
import ContactMe from './Components/ContactMe/ContactMe';
import About from './Components/About/About';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/contactMe">
            <ContactMe></ContactMe>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
