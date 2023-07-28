//  import React, { useState } from 'react';
// import './Task.css';
// import { Link,useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from './Navbar';
// // const [taskCreated, setTaskCreated] = useState(false);

// // const handleCreateTask = (e) => {
// //   e.preventDefault();


// //   axios
// //     .post('http://localhost:8080/add', taskData)
// //     .then((response) => {
// //       setTaskCreated(true);
// //     })
// //     .catch((error) => {
// //       console.error(error);
// //     });
// //   try{
//   //     const response = await axios.post('http://localhost:8080/add', taskData
// //     {
// //       headers:{
//   //         "Authorization":`Bearer ${token}`,
//   //         "cache-control":'no-cache',
//   //       }
//   //     });
//   //     console.log(response.data);
//   //   }catch(error){
//     //     console.error("Error : ",error);
//     //   }
//     //   const taskData = {
//     //     id: e.target.elements.taskId.value,
//     //     task_type: e.target.elements.taskType.value,
//     //     task_name: e.target.elements.taskName.value,
//     //     description: e.target.elements.description.value,
//     //     category: e.target.elements.category.value,
//     //     startdate: e.target.elements.startDate.value,
//     //     enddate: e.target.elements.endDate.value,
//     //     priority: e.target.elements.priority.value,
//     //     notification: e.target.elements.notification.value,
//     //   };
 
// // };
// function Task() {
//   const [id, setId] = useState('');
//   const [task_type, setTask_type] = useState('');
//   const [task_name, setTask_name] = useState('');
//   const [description, setDescription] = useState('');
//   const [category, setCategory] = useState('');
//   const [startdate, setStartdate] = useState('');
//   const [enddate, setEnddate] = useState('');
//   const [priority, setPriority] = useState('');
//   const [notification, setNotification] = useState('');
//   const [isSubmit, setIsSubmit] = useState(false);
//   const navigate = useNavigate();

//   const handleId = (event) => {
//     event.preventDefault();
//     setId(event.target.taskId.value);
//   };

//   const handletask_type = (event) => {
//     event.preventDefault();
//     setTask_type(event.target.taskType.value);
//   };

//   const handletask_name = (event) => {
//     event.preventDefault();
//     setTask_name(event.target.taskName.value);
//   };
//   const handledescription = (event) => {
//     event.preventDefault();
//     setDescription(event.target.description.value);
//   };
//   const handlecategory = (event) => {
//     event.preventDefault();
//     setCategory(event.target.category.value);
//   };
//   const handlestartdate = (event) => {
//     event.preventDefault();
//     setStartdate(event.target.startdate.value);
//   };
//   const handleenddate = (event) => {
//     event.preventDefault();
//     setEnddate(event.target.enddate.value);
//   };
//   const handlepriority = (event) => {
//     event.preventDefault();
//     setPriority(event.target.priority.value);
//   };
//   const handlenotification = (event) => {
//     event.preventDefault();
//     setNotification(event.target.notification.value);
//   };

//   const handleSubmit = async (event) => {
//     const token= localStorage.getItem("token");
//     event.preventDefault();
//     try{
//       const response=await axios.post('http://localhost:8080/add',{
//        id:id,
//        task_name:task_name,
//        task_type:task_type,
//        description:description,
//        category:category,
//        startdate:startdate,
//        enddate:enddate,
//        priority:priority,
//        notification:notification
  
//       },
//       {
//         headers:{
//           'Authorization':`BEARER ${token}`,
//           'cache-control': 'no-cache'
//         }
//       });
//       console.log(response.status);
//       if(response.status===200){
//         setId('');
//         setTask_name('');
//         setTask_type('');
//         setDescription('');
//         setCategory('');
//         setStartdate('');
//         setEnddate('');
//         setPriority('');
//         setNotification('');
//         setIsSubmit(true);
//         navigate('/Sbar');
//       }
      
//     }
//     catch(error){
//       alert(error);
//       setIsSubmit(false);
  
//     }
//     if (isSubmit) {
//     }
//   };

//   return (
//     <div className='all'>
   
//       <div className="col-md-12">
//         <h1 className="form-title">Add Task</h1>
//    {/* <video src="Video.mp4" muted autoPlay loop type="video/mp4"></video> */}
//         <div className="container1">
//           <form onSubmit={handleSubmit} className='sx'>
//             <div className="task-details-box">
//               <div className="task-input-box">
               
//                 <input type="number" className="bt" id="taskId" name="taskId" value={id}
//                 onChange={handleId} placeholder="Enter Task ID" required />
//               </div>
//               <div className="task-input-box">
           
//                 <select id="taskType" className="bt" value={task_type}
//                 onChange={handletask_type} name="taskType" required>
//                   <option value="">Select Type</option>
//                   <option value="individual">Individual</option>
//                   <option value="team">Team</option>
//                 </select>
//               </div>
//               <div className="task-input-box">
               
//                 <input type="text" className="bt" id="taskName" value={task_name}
//                 onChange={handletask_name}  name="taskName" placeholder="Enter Task Name" required />
//               </div>
//               <div className="task-input-box">
                
//                 <textarea id="description" className="bt" value={description}
//                 onChange={handledescription} name="description" placeholder="Enter Description" required></textarea>
//               </div>
//               <div className="task-input-box">
                
//                 <select id="category" className="bt"  value={category}
//                 onChange={handlecategory}name="category" required>
//                   <option value="">Select Category</option>
//                   <option value="study plan">Study Plan</option>
//                   <option value="fitness">Fitness</option>
//                   <option value="health">Health</option>
//                   <option value="entertainment">Entertainment</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>
//               <div className="task-input-box">
//                 <label htmlFor="startDate">Start Date:</label>
//                 <input type="date" className="bt" id="startDate"  value={startdate}
//                 onChange={handlestartdate} name="startDate" required />
//               </div>
//               <div className="task-input-box">
//                 <label htmlFor="endDate">End Date:</label>
//                 <input type="date" className="bt" id="endDate" value={enddate}
//                 onChange={handleenddate}  name="endDate" required />
//               </div>
//               <div className="task-input-box">
              
//                 <select id="priority" className="bt" value={priority}
//                 onChange={handlepriority} name="priority" required>
//                   <option value="">Select Priority</option>
//                   <option value="urgent">Urgent</option>
//                   <option value="anytimesoon">Anytime Soon</option>
//                   <option value="anytime">Anytime</option>
//                 </select>
//               </div>
//               <div className="task-input-box">
               
//                 <select id="notification" className="bt" value={notification}
//                 onChange={handlenotification}  name="notification" required>
//                   <option value="">Select Notification</option>
//                   <option value="on">On</option>
//                   <option value="off">Off</option>
//                 </select>
//               </div>
//             </div>
//             <div className="form-submit-btn">
//               <button type="submit" class="mm" value="Create" >Create Task</button>
//             </div>
//           </form>
//         </div>
//            {/*  */}
//       </div>
//     </div>
    
//   );
// }

// export default Task;
import React, { useState } from 'react';
import './Task.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function PerTask() {
  const [taskCreated, setTaskCreated] = useState(false);

  const handleCreateTask = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    // Check if the token is available and valid
    if (!token) {
      console.log('No token found. Redirect to login page or handle the error.');
      return;
    }

    const taskData = {
      id: e.target.elements.taskId.value,
   task_type: e.target.elements.taskType.value  === 'on' ? 'individual' : 'team',
    task_name: e.target.elements.taskName.value,
    description: e.target.elements.description.value,
   category: e.target.elements.category.value,
     startdate: e.target.elements.startDate.value,
    enddate: e.target.elements.endDate.value,
     priority: e.target.elements.priority.value,
    notification: e.target.elements.notification.value,
    };
   
    try {
      await axios.post('http://localhost:8080/add', taskData, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token to the request headers
        },
      });

      setTaskCreated(true);
    } catch (error) {
      console.error(error);
      // Handle the error appropriately, such as showing an error message to the user
    }
  };

  return (
    <div>
   
      <div className='all'>
        <div className="col-md-12">
          <h1 className="form-title">TASK CREATION</h1>
          <form onSubmit={handleCreateTask} className='sx'>
            <div className="task-details-box">
              <div className="task-input-box">
                <label htmlFor="taskid">Task ID</label>
                <input type="number" id="taskid" className="bt" name="taskid" placeholder="Enter Task ID" required />
              </div>
              <div className="task-input-box">
                <label htmlFor="remainder">Task Type</label>
                <select id="remainder" className="bt" name="remainder" required>
                  <option value="">Select Type</option>
                  <option value="on">Individual</option>
                  <option value="off">Team</option>
                </select>
              </div>
              <div className="task-input-box">
                <label htmlFor="taskName">Task Name</label>
                <input type="text" className="bt" id="taskName" name="taskName" placeholder="Enter Task Name" required />
              </div>
              <div className="task-input-box">
                <label htmlFor="description">Description</label>
                <textarea id="description" className="bt" name="description" placeholder="Enter Description" required></textarea>
              </div>
              <div className="task-input-box">
                <label htmlFor="category">Category</label>
                <select id="category" className="bt" name="category" required>
                  <option value="">Select Category</option>
                  <option value="study plan">Study Plan</option>
                  <option value="fitness">Fitness</option>
                  <option value="health">Health</option>
                  <option value="other">Other</option>
                </select>
              </div>
          
              <div className="task-input-box">
                <label htmlFor="startDate">Start Date</label>
                <input type="date" className="bt" id="startDate" name="startDate" required />
              </div>
              <div className="task-input-box">
                <label htmlFor="endDate">End Date</label>
                <input type="date" className="bt" id="endDate" name="endDate" required />
              </div>
              <div className="task-input-box">
                <label htmlFor="priority">Priority</label>
                <select id="priority" className="bt" name="priority" required>
                  <option value="">Select Priority</option>
                  <option value="urgent">Urgent</option>
                  <option value="anytime-soon">Anytime Soon</option>
                  <option value="anytime">Anytime</option>
                </select>
              </div>
              <div className="task-input-box">
                <label htmlFor="notification">Notification</label>
                <select id="notification" className="bt" name="notification" required>
                  <option value="">Select Notification</option>
                  <option value="on">On</option>
                  <option value="off">Off</option>
                </select>
              </div>
            </div>
            <div className="form-submit-btn">
              <button type="submit" value="Create" className='mm' >Create</button>
            </div>
          </form>
          {taskCreated && (
            <div className="success-message5">
              <span className="tick-symbol">&#10004;</span>
              <h5 className='success'>Task Created Successfully!</h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PerTask;