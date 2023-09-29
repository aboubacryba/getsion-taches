// src/App.js
import React, { useState } from 'react';
import './App.css';
import './index.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1, completed: false }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <h1>Application de gestion de tâches</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
    </div>
  );
}

export default App;
