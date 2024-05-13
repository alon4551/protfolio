import './App.css';
import { BrowserRouter ,Route, Routes} from 'react-router-dom';
import Navbar from './navbar';
import Home from './HomePage';

function App() {
  return (
   <>
   <BrowserRouter>
    <Navbar/>
      <Routes className="main">
        <Route exact path ="/" element={<Home/>}/>

        <Route exact path ="/aboutMe" />

        <Route exact path ="/education" />

        <Route exact path ="/expirance" />
 
      </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
