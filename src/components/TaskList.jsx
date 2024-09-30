import React from 'react'; 
import Task from './Task'; 

const TaskList = ({ tasks, toggleTask, removeTask }) => {
  return (
        // Rendering by Looping: Looping through tasks array
    <ul>
      {tasks.map((task) => (
        // React Lists and Keys: Using keys to optimize rendering
        <Task 
          key={task.id} 
          task={task} 
          toggleTask={toggleTask} 
          removeTask={removeTask} 
        />
      ))}
    </ul>
  );
};

export default TaskList; 
