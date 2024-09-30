// Import Default 
import React, { useState } from 'react'; 
import AddTask from './components/AddTask';
import TaskList from './components/TaskList'; 
import './App.css'; 

//  Function Component: Main app component
const App = () => {
  
  const [tasks, setTasks] = useState([]); // js variable (array) for tasks

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Function Component: Function to toggle task completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, completed: !task.completed } : task // JS expression
      )
    );
  };

  // Function Component: Function to remove a task
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)); 
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      {/* Using props to add a task */}
      <AddTask addTask={addTask} /> 
      <TaskList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask} /> 
      {/* Conditional Rendering: Displaying message when no tasks are available */}
      {tasks.length === 0 && <p>No tasks available.</p>} 
    </div>
  );
};

// Export Default: Exporting the App component
export default App; 
