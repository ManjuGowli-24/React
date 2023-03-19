
import './App.css';
import NavBar from './components/navbar.js';
import SideBar from './components/sidebar.js';
import TextArea from './components/textarea.js';
import About from './components/about.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return ( 
  <>

<Router>
/*name is for understanding props--*/
  <NavBar name="This is web page of zoo"/>
  
  <div className="container">
  <Switch>
  <Route exact path="/about">
  <About/>
  </Route>

  <Route exact path="/"  >
  <SideBar heading="Enter text to analyze"/>
  </Route>

  </Switch>
  </div>

  </Router>
  </>
  );
}

export default App;
