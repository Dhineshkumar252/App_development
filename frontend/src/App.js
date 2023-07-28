import React from 'react';
import Dash from './Dash';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Slideshow from './components/Slideshow';
import Taskuh from './components/Taskuh.js';
import TeamTask from './components/TeamTask';
import { Aboutus } from './components/Aboutus';
import { Contactus } from './components/Contactus';
import { Terms } from './components/Terms';
import { Blog } from './components/Blog';
import ReactBigCalendar from './components/CalendarReact/ReactBigCalendar';
import Reg from './components/Reg';
import Signup from './components/Signup';
import Signin from './components/Signin';
import PerTask from './components/PerTask'

import Sbar from './components/Sbar';
import Show from './components/Show';
import Delete from './components/Delete';
import Update from './components/Update';
import Feedback from './components/Feedback';
function App(){
    return(
        <div className='App'>
         

      <BrowserRouter>
      <Routes>
      <Route  path='/' element={<Signin/>}></Route>
       <Route path='Signin' element={<Signin/>}></Route>
       <Route path='Signup' element={<Signup/>}></Route>
       <Route path='Navbar' element={<Navbar/>}></Route>
       <Route path='Taskuh' element={<Taskuh/>}></Route>
       <Route path='TeamTask' element={<TeamTask/>}></Route>
       <Route path='Aboutus' element={<Aboutus/>}></Route>
       <Route path='Contactus' element={<Contactus/>}></Route>
       <Route path='Terms' element={<Terms/>}></Route>
       <Route path='Blog' element={<Blog/>}></Route>
       <Route path='Dash' element={<Dash/>}></Route>
       <Route path='SBar' element={<Sbar/>}></Route>
       <Route path='Show' element={<Show/>}></Route>
       <Route path='Delete' element={<Delete/>}></Route>
       <Route path='Update' element={<Update/>}></Route>
       <Route path='PerTask' element={<PerTask/>}></Route>
       <Route path='Feedback' element={<Feedback/>}></Route>
       <Route path='ReactBigCalendar' element={<ReactBigCalendar/>}></Route>
       </Routes>
        </BrowserRouter> 
         
        </div>
    )
}
export default App;