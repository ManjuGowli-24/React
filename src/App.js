
import './App.css';
import NavBar from './components/navbar.js';
import SideBar from './components/sidebar.js';
import Main from './components/main.js';
import About from './components/about.js';
import Footer from './components/footer.js';
import LogIn from './components/login.js';
import SignUp from './components/signup.js';
import TextArea from './components/textarea.js';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return ( 
  <>
<div className="headder">
<Router>
{/*name is for understanding props--*/}
  <NavBar name="This is web page of zoo" />
  <div >
  <Switch>
  <Route exact path="/"  >
  {/*<Web/>*/}
  <SideBar/>
  </Route>

  <Route exact path="/About">
  <About/>
  </Route>

  <Route exact path="/LogIn">
  <LogIn/>
  </Route>

  <Route exact path="/SignUp" >
  <SignUp/>
  </Route>

  <Route path='/location' component={() => {
    window.location.href = 'https://www.google.com/maps/@12.9230596,77.6657531,15z';
    return null;

}}/>



  </Switch>
  </div>
  </Router>
  </div>
  <div>
  </div>
 

  </>
  );
}

export default App;
