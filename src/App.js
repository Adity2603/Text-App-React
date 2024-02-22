
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About'
import Alert from './components/alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode , setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showalert = (message)=>{
    setAlert(message)
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      showalert("Dark Mode Set ")
      
      // document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      showalert("Light Mode Set ")
      
      // document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Router>
    <Navbar mode = {mode}  toggleMode={toggleMode} />
    <div className="container my-2 ">
      <Alert alert= {alert} />
    </div>
    <div className="container my-3">
      <Switch>
      <Route exact path='/about' >
        <About/>

        </Route>
        <Route exact path='/' >
        <TextForm showalert= {showalert} heading="Enter the text to analyze below"/>

        </Route>
        
      </Switch>

      
    
    </div>
    </Router>
    </>
  );
}

export default App;
