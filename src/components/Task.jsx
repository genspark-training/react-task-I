import React from 'react'; 

const Task = ({ task, toggleTask, removeTask }) => {
  return (
    <li>
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none', // Conditional styling based on task completion
        }}
        onClick={() => toggleTask(task.id)} // Using props to handle task toggling
      >
        {task.name}
      </span>
      <button onClick={() => removeTask(task.id)}>Remove</button> 
    </li>
  );
};

export default Task; 
