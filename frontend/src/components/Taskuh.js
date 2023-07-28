import React from 'react';
import './Task.css';
import TeamTask from './TeamTask';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
function Taskuh(){
  const [taskCreated, setTaskCreated] = useState(false);

  const handleCreateTask = (e) => {
    e.preventDefault();

    const taskData = {
      id: e.target.elements.taskId.value,
      task_type: e.target.elements.taskType.value,
      task_name: e.target.elements.taskName.value,
      description: e.target.elements.description.value,
      category: e.target.elements.category.value,
      startdate: e.target.elements.startDate.value,
      enddate: e.target.elements.endDate.value,
      priority: e.target.elements.priority.value,
      notification: e.target.elements.notification.value,
    };

    axios
      .post('http://localhost:8080/add', taskData)
      .then((response) => {
        setTaskCreated(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };
    return(
<div>
<div class="row">
<div class="main">
<div class="navbar">
    <div class="icon">
        <h2 class="logo">Scheduler</h2>
           
    </div>

    <div class="menu">
        <ul>
            <li><a href="#"><Link to='/Navbar'>HOME</Link></a></li>
            <li><a href="#"><Link to='/Dash' target="_blank">DASHBOARD</Link></a></li>
            <div class="dropdownn">
    <button class="dropbtn">TASKS
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdownn-content">
      <Link to='/Task'>Create Task</Link>
      <Link to='/TeamTask'>Create Team task</Link>
    </div>
  </div>
            <li><Link to=''>CALENDAR</Link></li>
        </ul>
    </div>
    <div class="navigationn">
  <div className="good">
  <img  className="noti" src="data:image/jpeg;base64,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"/>
  <img className="hu" src="data:image/jpeg;base64,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"/>
  </div>
  <a class="buttonn" href="">


<div class="logout">LOGOUT</div>

  </a>

</div>
    </div>
    <div class="col-md-12">
      <form className='sx'>
        <h1> TASK CREATION </h1>
        
        <fieldset>
          <input type="text" id="task_name" name="task_name" className="bt" placeholder='TaskName'/>
        
       
         <label for="job">Task Description:</label>
        <textarea  rows="7" columns="26"className='bio'></textarea>
       
        

        </fieldset>
        <fieldset>  
          <label>Creation date:
          </label>
        <input type="date" className="bt" placeholder='Creation date'></input>

          <label>Deadline date:
          </label>
        <input type="date" className="bt" placeholder='Deadline date'></input>
        
         <label for="job">Category:</label>
          <select id="job" className="bt"  placeholder='Category' name="user_job">
            <optgroup label="Office">
              <option value="frontend_developer">Project</option>
              <option value="php_developer">Study plan</option>
            </optgroup>
            <optgroup label="Others">
              <option value="android_developer">Fitness</option>
              <option value="ios_developer">Health</option>
              <option value="mobile_designer">Entertainment</option>
              <option value="business_owner">Custom</option>
            </optgroup>
          </select>
         </fieldset>
       
        <button type="submit" class="mm">Create Task</button>
        
       </form>
        </div>
      <div className="foott">
        <div className="images">
        <a href="">
              <img className="kk" src="https://wallpapers.com/images/hd/instagram-black-background-1080-x-1080-60av76a8167qjznm.jpg"/>
            </a>
            <a href="">
              <img className="kk" src="data:image/jpeg;base64,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"/>
            </a>
            <a href="">
            <img className="kk" src="data:image/jpeg;base64,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"/>
            </a>
            <a href="">
            <img className="kk" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbFkx51QaxMgsoU3J2IQMHrTSan0Tta6UjAw&usqp=CAU"/>
            </a>  
           
        </div>
        <div className="conn"> 
        <p className="">
            <a href="" className="lo">
               |<Link to='Navbar' className="os">Home</Link> |
              </a>
              <a href="" className="lo" >
             <Link to='/Blog' className="os">Blog</Link>  |
              </a>
              <a href="" className="lo">
             <Link to='/Terms' className="os">terms and conditions </Link> |
              </a>
              <a href="" className="lo">
              <Link to='/Contactus' className="os">Contact Us </Link>|
              </a>
              <a href=""className="lo">
              <Link to='/Aboutus' className="os"> about </Link>|
              </a>
               </p>
        </div>
</div>  
        </div>
      </div>
      <div>
      </div>
      </div>
    )
}
export default Taskuh;