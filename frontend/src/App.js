import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Adminpage from './pages/adminpage/adminpage';
import Userpage from './pages/userpage/userpage';
import Addcentres from './pages/centre/addcentres';
import Bookslot from './pages/bookslot/bookslot';

function App() {
  return (
    <div className="App">

      {/* <div>
         <Navbar />
      </div>

      <div className='herosection'>
          <Hero />
      </div> */}

      <BrowserRouter>
         <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/login" element ={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/admin">
            <Route index element = {<Adminpage />} />
            <Route path="addcentres" element = {<Addcentres />} />
          </Route>
          <Route path="/user" >
             <Route index element ={<Userpage/>} />
             <Route path="bookslot" element = {<Bookslot />} />
          </Route>

         </Routes>
      </BrowserRouter>

      

    </div>
  );
}

export default App;
