import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

function Update() {
  const [taskCreated, setTaskCreated] = useState(false);

  const handleCreateTask = (e) => {
    e.preventDefault();

    const id= e.target.elements.taskId.value;
    const taskData = {
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
      .post(`http://localhost:8080/update/${id}`, taskData)
      .then((response) => {
        setTaskCreated(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='all'>
   
    
      <div className="col-md-12">
        <div className="container1">
        <h1 className="form-title">Update Task</h1>
          <form onSubmit={handleCreateTask} className='sx'>
            <div className="task-details-box">
              <div className="task-input-box">
               
                <input type="number" className="bt" id="taskId" name="taskId" placeholder="Enter Task ID" required />
              </div>
              <div className="task-input-box">
           
                <select id="taskType" className="bt" name="taskType" required>
                  <option value="">Select Type</option>
                  <option value="individual">Individual</option>
                  <option value="team">Team</option>
                </select>
              </div>
              <div className="task-input-box">
               
                <input type="text" className="bt" id="taskName" name="taskName" placeholder="Enter Task Name" required />
              </div>
              <div className="task-input-box">
                
                <textarea id="description" className="bt" name="description" placeholder="Enter Description" required></textarea>
              </div>
              <div className="task-input-box">
                
                <select id="category" className="bt" name="category" required>
                  <option value="">Select Category</option>
                  <option value="study plan">Study Plan</option>
                  <option value="fitness">Fitness</option>
                  <option value="health">Health</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="task-input-box">
                <label htmlFor="startDate">Start Date:</label>
                <input type="date" className="bt" id="startDate" name="startDate" required />
              </div>
              <div className="task-input-box">
                <label htmlFor="endDate">End Date:</label>
                <input type="date" className="bt" id="endDate" name="endDate" required />
              </div>
              <div className="task-input-box">
              
                <select id="priority" className="bt" name="priority" required>
                  <option value="">Select Priority</option>
                  <option value="urgent">Urgent</option>
                  <option value="anytimesoon">Anytime Soon</option>
                  <option value="anytime">Anytime</option>
                </select>
              </div>
              <div className="task-input-box">
               
                <select id="notification" className="bt" name="notification" required>
                  <option value="">Select Notification</option>
                  <option value="on">On</option>
                  <option value="off">Off</option>
                </select>
              </div>
            </div>
            <div className="form-submit-btn">
              <button type="submit" class="mm" value="Create" >Update Task</button>
            </div>
            {taskCreated && (
              <div className="success-message">
                <span className="tick-symbol">&#10004;</span>
                <h5 className="success">Task Updated Successfully!</h5>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
    
  );
}

export default Update;