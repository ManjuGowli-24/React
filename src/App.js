
import './App.css';
import NavBar from './components/navbar.js';
import SideBar from './components/sidebar.js';
import Main from './components/main.js';
import About from './components/about.js';
import Footer from './components/footer.js';
import LogIn from './components/login.js';
import SignUp from './components/signup.js';
import TextArea from './components/textarea.js';
import Contact from './components/Contact.js';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return ( 
  <main>
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

<Route path="/suggestion">
  <TextArea/>
  </Route>
  <Route path="/Contact">
  <Contact/></Route>

  </Switch>
  </div>
  </Router>
  </div>
  
  </main>
  );
}

export default App;
