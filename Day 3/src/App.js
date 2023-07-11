import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import {Routes,BrowserRouter,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">

     <BrowserRouter>
      <Routes>
       <Route  path='/' element={<Login/>}></Route>
       <Route path='Login' element={<Login/>}></Route>
       <Route path='Register' element={<Register/>}></Route>
       <Route path='Navbar' element={<Navbar/>}></Route>
      </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
