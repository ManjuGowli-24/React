
import './App.css';
import NavBar from './components/navbar.js';
import SideBar from './components/sidebar.js';
import TextArea from './components/textarea.js';

function App() {
  return ( 
  <>
  /*name is for understanding props--*/
    <NavBar name="This is web page of zoo"/>
    <div className="container">
  <TextArea heading="Enter text to analyze" />
   
    </div>
    <SideBar/>
    
  
  
    
    
    </>
  );
}

export default App;
