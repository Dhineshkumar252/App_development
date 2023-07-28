import React, { useState } from 'react';
import './Task.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Delete() {
  const [taskDeleted, setTaskDeleted] = useState(false);

  const handleDeleteTask = (e) => {
    e.preventDefault();

    const id = e.target.elements.taskName.value;

    axios
      .delete(`http://localhost:8080/delete/${id}`)
      .then((response) => {
        setTaskDeleted(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='all'>
     
     <div className="col-md-12">
        <div className="container1">
          <h1 className="form-title">Delete Task</h1>
          <form onSubmit={handleDeleteTask} className='kx'>
            <div className="task-details-box">
              <div className="task-input-box2">
                <input type="number" id="taskName" name="taskName" className="bt" placeholder="Task ID" required />
              </div>
            </div>
            <div className="form-submit-btn">
              <button type="submit" className='mm' value="Delete" placeholder='Id to be deleted' >Delete</button>
            </div>
            {taskDeleted && (
              <div className="success-message">
                <span className="tick-symbol">&#10004;</span>
                <h5 className="success">User Deleted Successfully!</h5>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Delete;
