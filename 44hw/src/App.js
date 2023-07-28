
import './assets/css/App.css';
import  Header  from "./components/Header.js";
import  FullWidth  from "./components/FullWidth.js";
import Blog from "./components/Blog.js";
/* import "./assets/css/App.css"; */
import "./assets/scss/App.scss";

/* let stylingObject ={
  header:{
    color:"red",
    backgroundColor:"green"
  },
  p:{
    color: "grey"
  }
} */

function App() {
  return (
    < div className='App' /* style={stylingObject.header}  *//*  style={{"backgroundColor": "grey", "color":"green"}} */>
   
    {/* <p style={stylingObject.p}>Some text</p> */}
      <Blog/>
      < FullWidth/>
      <div className='flex'>
      < Header/>
        
      </div>
      
    </div> 
  );
}

export default App;
