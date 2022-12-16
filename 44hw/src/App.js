
import './assets/css/App.css';
import  Header  from "./components/Header.js";
import  FullWidth  from "./components/FullWidth.js";
import Blog from "./components/Blog.js";

function App() {
  return (
    < div className='App' style={{"backgroundColor":"grey"}}>
   
    
      <Blog/>
      < FullWidth/>
      <div className='flex'>
      < Header/>
        
      </div>
      
    </div> 
  );
}

export default App;
