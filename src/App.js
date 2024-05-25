import './App.css';
import { BrowserRouter ,Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './AboutMe';
import Experience from './Experience';
function App() {
  return (
   <>
   <BrowserRouter>
    <Navbar/>
      <Routes className="main">
        <Route exact path ="/" element={<Home/>}/>

        <Route exact path ="/aboutMe" element={<AboutMe/>} />

        <Route exact path ="/expirance" element={<Experience/>} />
 
      </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
