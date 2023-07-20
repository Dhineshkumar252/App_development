import React from 'react';
import Dash from './Dash';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Slideshow from './components/Slideshow';
import Taskuh from './components/Taskuh.js';
import TeamTask from './components/TeamTask';
import Calc from './components/Calc';
import { Aboutus } from './components/Aboutus';
import { Contactus } from './components/Contactus';
import { Terms } from './components/Terms';
import { Blog } from './components/Blog';
import ReactBigCalendar from './components/CalendarReact/ReactBigCalendar';
import TuiCalendar from './components/CalendarReact/TuiCalendar';
import events from './components/CalendarReact/events';
import FullCalendar from './components/CalendarReact/FullCalendar';
import ReactCalendar from './components/CalendarReact/ReactCalendar';
function App(){
    return(
        <div className='App'>

      <BrowserRouter>
      <Routes>
      <Route  path='/' element={<Login/>}></Route>
       <Route path='Login' element={<Login/>}></Route>
       <Route path='Register' element={<Register/>}></Route>
       <Route path='Navbar' element={<Navbar/>}></Route>
       <Route path='Taskuh' element={<Taskuh/>}></Route>
       <Route path='TeamTask' element={<TeamTask/>}></Route>
       <Route path='Calc' element={<Calc/>}></Route>
       <Route path='Calc' element={<Calc/>}></Route>
       <Route path='Aboutus' element={<Aboutus/>}></Route>
       <Route path='Contactus' element={<Contactus/>}></Route>
       <Route path='Terms' element={<Terms/>}></Route>
       <Route path='Blog' element={<Blog/>}></Route>
       <Route path='Dash' element={<Dash/>}></Route>
       </Routes>
        </BrowserRouter>
         
        </div>
    )
}
export default App;