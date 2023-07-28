import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Show.css'
function Show() {
  
  const [taskData, setTaskData] = useState([]); // Fix variable name here

  useEffect(() => {
    const fetchTaskData = async () => {
      const token = localStorage.getItem('token');
      console.log(token);
      try {
        const response = await axios.get('http://localhost:8181/get', {
          headers: {
            "cache-control": 'no-cache',
            "Authorization": `Bearer ${token}`, // Add the token to the request headers
          },
        });

        setTaskData(response.data);
        console.log("response.data",response)
      } catch (error) {
        console.log(error);
      }
    };

    fetchTaskData();
  }, []);

  useEffect(() => {
    console.log(taskData); // This will log the updated dataList whenever it changes.
  }, [taskData]);

  return (
    <div>
     
      <table className="songs">
      <div className="container12">
        <thead>
          <tr className="form-title">
            <th className="header-cell">Task ID</th>
            <th className="header-cell">Task Type</th>
            <th className="header-cell">Task Name</th>
            <th className="header-cell">Task Description</th>
            <th className="header-cell">Category</th>
            <th className="header-cell">Start Date</th>
            <th className="header-cell">End Date</th>
            <th className="header-cell">Priority</th>
            <th className="header-cell">Notification</th>
          </tr>
        </thead>
        <tbody>
          {taskData.map((task) => (
            <tr key={task.taskid}>
              <td>{task.id}</td>
              <td>{task.task_type}</td>
              <td>{task.task_name}</td>
              <td>{task.description}</td>
              <td>{task.category}</td>
              <td>{task.startdate}</td>
              <td>{task.enddate}</td>
              <td>{task.priority}</td>
              <td>{task.notification}</td>
            </tr>
          ))}
        </tbody>
        </div>
      </table>
    </div>
  );
}

export default Show;