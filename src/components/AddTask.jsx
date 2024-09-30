import React, { useState } from 'react'; 
import { v4 as uuidv4 } from 'uuid'; 

const AddTask = ({ addTask }) => {
  const [taskName, setTaskName] = useState(''); 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName) return; 
    addTask({ id: uuidv4(), name: taskName, completed: false }); 
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)} 
        placeholder="Add a new task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask; 