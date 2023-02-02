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
import Technologies from './Components/Technologies/Technologies';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import MyRecord from './Components/MyRecord/MyRecord';
import Service from './Components/Services/Service';
import LeftSidebar from './Components/Sidebar/LeftSidebar';
import Page from './Components/Page';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Page} />
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
        <Route path="/tech">
          <Technologies />
        </Route>
        <Route path="/record">
          <MyRecord />
        </Route>
        <Route path="/service">
          <LeftSidebar />
        </Route>

        <Route exact path="/" component={Page} />
      </Switch>
    </Router>
  );
}

export default App;
