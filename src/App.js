import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';
import Page from './Components/Page';
import 'react-tooltip/dist/react-tooltip.css'


// if (firebase.apps.length === 0) {
//   firebase.initializeApp(firebaseConfig);
// }

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Page} />
        <Route exact path="/" component={Page} />
      </Switch>
    </Router>
  );
}

export default App;

